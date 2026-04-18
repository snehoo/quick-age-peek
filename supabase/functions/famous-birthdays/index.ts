// Dynamic, country-localised famous birthdays for a given month/day via Lovable AI
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ReqBody {
  month?: number;
  day?: number;
  country?: string | null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { month, day, country } = (await req.json()) as ReqBody;
    if (!month || !day) {
      return new Response(JSON.stringify({ error: "month and day required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const cleanCountry = (country || "").trim().slice(0, 60);

    const systemPrompt = `You are a pop-culture & history expert. Return famous people born on the given month/day. Mix global icons with locally-relevant celebrities from the user's country (if given). Include a variety of fields: actors, musicians, athletes, scientists, founders, leaders, writers, etc. Return 8-12 people, prefer those most recognisable today.`;

    const userPrompt = `Date: ${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} (any year)
${cleanCountry ? `User country: ${cleanCountry} — include 3-5 well-known people from this country.` : ""}
Return via the provided tool.`;

    const tools = [
      {
        type: "function",
        function: {
          name: "return_birthdays",
          description: "Return list of famous people born on this date.",
          parameters: {
            type: "object",
            properties: {
              people: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    tag: { type: "string", description: "Short tag like Actor, Musician, Athlete, Founder, Scientist, Leader, Writer, Director, Activist, Royalty, Billionaire, Artist" },
                  },
                  required: ["name", "tag"],
                  additionalProperties: false,
                },
              },
            },
            required: ["people"],
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
        tool_choice: { type: "function", function: { name: "return_birthdays" } },
      }),
    });

    if (!aiRes.ok) {
      if (aiRes.status === 429)
        return new Response(JSON.stringify({ error: "Rate limited" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (aiRes.status === 402)
        return new Response(JSON.stringify({ error: "AI credits exhausted" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const t = await aiRes.text();
      console.error("AI gateway error", aiRes.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const data = await aiRes.json();
    const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
    let people: { name: string; tag: string }[] = [];
    if (toolCall?.function?.arguments) {
      try {
        const parsed = JSON.parse(toolCall.function.arguments);
        people = Array.isArray(parsed.people) ? parsed.people : [];
      } catch (e) {
        console.error("parse err", e);
      }
    }

    return new Response(JSON.stringify({ people, month, day, country: cleanCountry || null }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("famous-birthdays error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
