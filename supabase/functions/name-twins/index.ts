// Dynamic Celebrity Name-Twins via Lovable AI + Google Search grounding
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

    const systemPrompt = `You are a pop-culture historian. Given a first name, a birth year, and (optionally) a country, return up to 4 famous "Celebrity Name-Twins" — real people OR iconic fictional characters whose FIRST NAME matches the given name AND who were culturally relevant in or around that birth year. Mix real-world celebrities (actors, musicians, athletes, founders, billionaires, politicians) with iconic fictional characters from films/TV/games of that era. If a country is given, prioritise at least one local/regional icon from that country. Return strictly via the provided tool. If you genuinely cannot find any first-name match relevant to that era, return an empty twins array — do not invent people.`;

    const userPrompt = `First name: "${cleanName}"\nBirth year: ${year}${cleanCountry ? `\nCountry: ${cleanCountry}` : ""}\n\nFind up to 4 famous people or iconic characters whose FIRST NAME is "${cleanName}" who were prominent around ${year}. Each entry: a category label (e.g. "The Real-World Twin", "The Fictional Twin", "The Name-Sake Legend", "The Local Icon"), the full name, and a 1-sentence blurb explaining what made them culturally relevant in/near ${year}.`;

    const tools = [
      {
        type: "function",
        function: {
          name: "return_name_twins",
          description: "Return celebrity name-twins for the given name and year.",
          parameters: {
            type: "object",
            properties: {
              twins: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    label: { type: "string", description: "Category label e.g. 'The Real-World Twin'" },
                    name: { type: "string", description: "Full name of the celebrity or character" },
                    blurb: { type: "string", description: "One sentence describing their cultural relevance around the birth year" },
                  },
                  required: ["label", "name", "blurb"],
                  additionalProperties: false,
                },
              },
            },
            required: ["twins"],
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
        tool_choice: { type: "function", function: { name: "return_name_twins" } },
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
        return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits in Lovable workspace settings." }), {
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
    let twins: Array<{ label: string; name: string; blurb: string }> = [];
    if (toolCall?.function?.arguments) {
      try {
        const args = JSON.parse(toolCall.function.arguments);
        if (Array.isArray(args.twins)) twins = args.twins;
      } catch (e) {
        console.error("Failed to parse tool args", e);
      }
    }

    // Filter — only keep entries whose first token matches the requested first name (case-insensitive)
    const target = cleanName.toLowerCase();
    twins = twins.filter((t) => {
      const first = (t.name || "").trim().split(/\s+/)[0]?.toLowerCase();
      return first === target;
    }).slice(0, 4);

    return new Response(JSON.stringify({ twins, name: cleanName, year, country: cleanCountry || null }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("name-twins error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
