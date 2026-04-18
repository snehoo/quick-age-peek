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

    const systemPrompt = `You are a pop-culture expert. Return ONLY famous CELEBRITIES (actors, musicians, singers, film/TV stars, pop icons, sports superstars known for celebrity status) born on the given month/day. STRICTLY EXCLUDE: scientists, founders/CEOs, politicians/leaders, writers, activists, royalty, billionaires, inventors, generic athletes who aren't celebrity-tier. Return EXACTLY the TOP 3 MOST GLOBALLY POPULAR celebrities today — no more, no less. Do NOT consider any country or region — pick purely by global fame today. CRITICAL: Sort from MOST globally popular today to least — biggest celebrity first.`;

    const userPrompt = `Date: ${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} (any year)
Return EXACTLY 3 celebrities, ranked by current GLOBAL popularity. Use the provided tool.`;

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
                    tag: { type: "string", description: "Short tag — ONLY one of: Actor, Musician, Singer, Athlete, Director" },
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

    return new Response(JSON.stringify({ people, month, day }), {
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
