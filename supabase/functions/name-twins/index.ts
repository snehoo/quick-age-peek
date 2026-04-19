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

    const systemPrompt = `You are a pop-culture historian. Given a first name, a birth year, and (optionally) a country, return exactly 2 famous "Celebrity Name-Twins" — real people whose FIRST NAME matches AND who were culturally relevant in/around that birth year. Prefer the most globally recognisable real people. If a country is given, one of the two should ideally be a local icon from that country. Provide a Wikipedia page slug (the part after /wiki/) for each so a photo can be fetched. If you genuinely cannot find a real person matching, return an empty array.`;

    const userPrompt = `First name: "${cleanName}"\nBirth year: ${year}${cleanCountry ? `\nCountry: ${cleanCountry}` : ""}\n\nReturn exactly 2 famous real people whose FIRST NAME is "${cleanName}" and who were prominent around ${year}. For each: a short category label (e.g. "Global Icon", "Local Legend"), full name, a brief blurb (max 12 words), and their Wikipedia slug (e.g. "Steve_Jobs").`;

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
                    label: { type: "string", description: "Short category label" },
                    name: { type: "string", description: "Full name of the real person" },
                    blurb: { type: "string", description: "Brief blurb, max 12 words" },
                    wiki_slug: { type: "string", description: "Wikipedia page slug, e.g. 'Steve_Jobs'" },
                  },
                  required: ["label", "name", "blurb", "wiki_slug"],
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
    let twins: Array<{ label: string; name: string; blurb: string; wiki_slug?: string; image?: string | null }> = [];
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
    }).slice(0, 2);

    // Fetch Wikipedia thumbnails in parallel
    twins = await Promise.all(
      twins.map(async (t) => {
        const slug = (t.wiki_slug || t.name).replace(/\s+/g, "_");
        try {
          const r = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
            { headers: { "User-Agent": "WhatsMyAge/1.0" } }
          );
          if (r.ok) {
            const j = await r.json();
            const img = j?.thumbnail?.source || j?.originalimage?.source || null;
            return { ...t, image: img };
          }
        } catch (_) { /* ignore */ }
        return { ...t, image: null };
      })
    );

    return new Response(JSON.stringify({ twins, name: cleanName, year, country: cleanCountry || null }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("name-twins error", e);
    return new Response(JSON.stringify({ error: "An unexpected error occurred. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
