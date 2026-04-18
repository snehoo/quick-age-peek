// Dynamic Name Insights via Lovable AI — meaning, origin, vibe, popularity for any name + birth year
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ReqBody {
  name?: string;
  year?: number;
  country?: string | null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { name, year, country } = (await req.json()) as ReqBody;
    if (!name || !year || typeof name !== "string" || typeof year !== "number") {
      return new Response(JSON.stringify({ error: "name and year required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const cleanName = name.trim().slice(0, 60);
    const cleanCountry = (country || "").trim().slice(0, 60);

    const systemPrompt = `You are an expert onomastician (name historian) and personality archetypist. Given a first name, a birth year, and optionally a country, return:
- meaning: literal meaning of the name (1 short phrase)
- origin: language/culture of origin (e.g. "Hebrew", "Sanskrit", "Old English")
- popularity: 1 sentence describing how popular the name was around the given birth year, ideally referencing rank, trend (rising/falling/peaking), and region if country is given.
- personality: 1-2 warm sentences describing a personality archetype for people with this name + birthday combo. MUST start with the exact phrase "People with your birthday tend to be" — frame it as gentle identity validation (warm, flattering, evocative — not horoscope-cheesy). Reference traits, vibes, strengths.
Be concise, factual, and culturally aware. If the country is non-Western, prioritise local naming context.`;

    const userPrompt = `Name: "${cleanName}"\nBirth year: ${year}${cleanCountry ? `\nCountry: ${cleanCountry}` : ""}\n\nReturn the structured insights via the provided tool.`;

    const tools = [
      {
        type: "function",
        function: {
          name: "return_name_insights",
          description: "Return name meaning, origin, vibe, and popularity context.",
          parameters: {
            type: "object",
            properties: {
              meaning: { type: "string" },
              origin: { type: "string" },
              popularity: { type: "string" },
              personality: { type: "string" },
            },
            required: ["meaning", "origin", "popularity", "personality"],
            additionalProperties: false,
          },
        },
      },
    ];

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools,
        tool_choice: { type: "function", function: { name: "return_name_insights" } },
      }),
    });

    if (!aiRes.ok) {
      if (aiRes.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiRes.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await aiRes.text();
      console.error("AI gateway error", aiRes.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiRes.json();
    const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
    let insights: { meaning?: string; origin?: string; popularity?: string; personality?: string } = {};
    if (toolCall?.function?.arguments) {
      try {
        insights = JSON.parse(toolCall.function.arguments);
      } catch (e) {
        console.error("Failed to parse tool args", e);
      }
    }

    return new Response(JSON.stringify({ ...insights, name: cleanName, year, country: cleanCountry || null }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("name-insights error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
