var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/entry-server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  render: () => render
});
module.exports = __toCommonJS(entry_server_exports);
var import_server = require("react-dom/server");
var import_server2 = require("react-router-dom/server");
var import_react_query = require("@tanstack/react-query");

// src/components/ui/tooltip.tsx
var React = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/tooltip.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/entry-server.tsx
var import_react_router_dom16 = require("react-router-dom");

// src/pages/Index.tsx
var import_react5 = require("react");

// src/components/AgeCalculator.tsx
var import_react4 = require("react");

// src/lib/ageCalculator.ts
function calculateAge(dob) {
  const now = /* @__PURE__ */ new Date();
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const diffMs = now.getTime() - dob.getTime();
  const totalDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
  let nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday <= now) {
    nextBirthday = new Date(now.getFullYear() + 1, dob.getMonth(), dob.getDate());
  }
  const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - now.getTime()) / (1e3 * 60 * 60 * 24));
  return { years, months, days, hours, minutes, seconds, totalDays, nextBirthdayDays };
}

// src/lib/lifeContext.ts
var getGeneration = (year) => {
  if (year <= 1945) return { name: "Silent Generation", tagline: "Built the modern world from the rubble." };
  if (year <= 1964) return { name: "Baby Boomer", tagline: "Rewrote the rules and never looked back." };
  if (year <= 1980) return { name: "Gen X", tagline: "The original independents \u2014 analog kids, digital adults." };
  if (year <= 1984) return { name: "Xennial", tagline: "Last to remember dial-up, first to text." };
  if (year <= 1994) return { name: "Millennial", tagline: "Last to know life before the internet." };
  if (year <= 1998) return { name: "Zillennial", tagline: "Caught between Millennial nostalgia and Gen Z energy." };
  if (year <= 2012) return { name: "Gen Z", tagline: "Born scrolling, fluent in irony, quietly changing everything." };
  return { name: "Gen Alpha", tagline: "iPad in one hand, the future in the other." };
};
var getLocalizedItems = (ageYears, country) => {
  const c = (country || "").toLowerCase().trim();
  const fullMoons = Math.floor(ageYears * 12.37);
  if (c === "india") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: Math.floor(ageYears / 4), label: "Cricket World Cups" },
      { value: Math.floor(ageYears / 5), label: "General elections" }
    ];
  }
  if (["usa", "us", "united states", "united states of america"].includes(c)) {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "Super Bowls" },
      { value: Math.floor(ageYears / 4), label: "Presidential elections" }
    ];
  }
  if (["uk", "united kingdom", "england", "britain", "great britain"].includes(c)) {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "FA Cup Finals" },
      { value: Math.max(1, Math.floor(ageYears / 10)), label: "Royal events" }
    ];
  }
  if (c === "australia") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "AFL Grand Finals" },
      { value: ageYears, label: "Summers (southern)" }
    ];
  }
  return [
    { value: fullMoons, label: "Full moons" },
    { value: Math.floor(ageYears / 4), label: "FIFA World Cups" },
    { value: ageYears, label: "Orbits around the Sun" }
  ];
};
var getAgeMoodLine = (ageYears) => {
  if (ageYears < 13) return "Just getting started \u2014 every day is a brand new world.";
  if (ageYears < 20) return "The teenage chapter \u2014 loud, messy, unforgettable.";
  if (ageYears < 30) return "Still in the morning of your life \u2014 the best chapters are ahead.";
  if (ageYears < 40) return "Hitting your stride \u2014 building the life you imagined.";
  if (ageYears < 50) return "Midday energy \u2014 you've earned your point of view.";
  if (ageYears < 60) return "The golden afternoon \u2014 wisdom meets momentum.";
  if (ageYears < 70) return "Slowing down to savour \u2014 the view from here is wider.";
  if (ageYears < 80) return "Every sunset is a quiet kind of victory.";
  return "A life well-lived \u2014 your story is the gift.";
};
var getLifeClockMood = (ageYears) => {
  if (ageYears < 20) return "early morning \xB7 the day is yours";
  if (ageYears < 35) return "morning \xB7 best chapters ahead";
  if (ageYears < 50) return "midday \xB7 in full motion";
  if (ageYears < 65) return "afternoon \xB7 the long view";
  if (ageYears < 80) return "evening \xB7 soft golden hours";
  return "late night \xB7 stars and stories";
};

// src/lib/isoDate.ts
var ISO_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
function parseIsoDate(input) {
  if (typeof input !== "string") return null;
  const m = ISO_RE.exec(input.trim());
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > 31) return null;
  const d = new Date(Date.UTC(year, month - 1, day));
  if (d.getUTCFullYear() !== year || d.getUTCMonth() !== month - 1 || d.getUTCDate() !== day) {
    return null;
  }
  return { year, month, day };
}
function isoToLocalDate(input) {
  const parts = parseIsoDate(input);
  if (!parts) return null;
  return new Date(parts.year, parts.month - 1, parts.day);
}
function getMonthDay(input) {
  const parts = parseIsoDate(input);
  if (!parts) return null;
  return { month: parts.month, day: parts.day };
}

// src/components/ui/slider.tsx
var React2 = __toESM(require("react"), 1);
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var Slider = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  SliderPrimitive.Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/CompactNameTile.tsx
var import_react = require("react");

// src/integrations/supabase/client.ts
var import_supabase_js = require("@supabase/supabase-js");
var SUPABASE_URL = "https://vsvmtwqodeilfafxsmib.supabase.co";
var SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdm10d3FvZGVpbGZhZnhzbWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNTUzNzIsImV4cCI6MjA5MTkzMTM3Mn0.w7QLU9ire5yrltFclKxuqMTuTQMyqgTobAfBIpZfG6w";
var supabase = (0, import_supabase_js.createClient)(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});

// src/components/CompactNameTile.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CompactNameTile = ({ name, birthYear, country }) => {
  const [data, setData] = (0, import_react.useState)(null);
  const [loading, setLoading] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const trimmed2 = name.trim();
    if (!trimmed2 || !birthYear) {
      setData(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setData(null);
    const t = setTimeout(async () => {
      try {
        const { data: res, error } = await supabase.functions.invoke("name-insights", {
          body: { name: trimmed2, year: birthYear, country: country || null }
        });
        if (cancelled) return;
        if (!error && res) setData(res);
      } catch (e) {
        if (!cancelled) console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [name, birthYear, country]);
  const trimmed = name.trim();
  if (!trimmed) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "age-stat-card text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Name meaning" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "font-display text-xl text-primary mb-1", children: trimmed }),
    loading ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "h-3 w-2/3 mx-auto bg-muted/60 rounded animate-pulse" }) : data?.meaning ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-xs text-muted-foreground italic leading-snug", children: [
      data.meaning,
      data.origin && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        " \xB7 ",
        data.origin
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-xs text-muted-foreground italic", children: "A name worth carrying." })
  ] });
};
var CompactNameTile_default = CompactNameTile;

// src/components/FamousBirthdaysList.tsx
var import_react2 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var tagColors = {
  Athlete: "bg-accent/15 text-accent",
  Musician: "bg-primary/15 text-primary",
  Actor: "bg-purple-500/15 text-purple-600",
  Founder: "bg-blue-500/15 text-blue-600",
  Leader: "bg-amber-500/15 text-amber-700",
  Scientist: "bg-teal-500/15 text-teal-600",
  Inventor: "bg-teal-500/15 text-teal-600",
  Writer: "bg-rose-500/15 text-rose-600",
  Director: "bg-indigo-500/15 text-indigo-600",
  Activist: "bg-green-500/15 text-green-600",
  Royalty: "bg-yellow-500/15 text-yellow-700",
  Billionaire: "bg-emerald-500/15 text-emerald-600",
  Artist: "bg-pink-500/15 text-pink-600"
};
var FamousBirthdaysList = ({ month, day }) => {
  const [people, setPeople] = (0, import_react2.useState)(null);
  const [loading, setLoading] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (!month || !day) return;
    let cancelled = false;
    setLoading(true);
    setPeople(null);
    const t = setTimeout(async () => {
      try {
        const { data, error } = await supabase.functions.invoke("famous-birthdays", {
          body: { month, day }
        });
        if (cancelled) return;
        if (!error && data?.people) setPeople(data.people);
      } catch (e) {
        if (!cancelled) console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [month, day]);
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8 rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl text-foreground mb-4", children: "Famous Birthday Twins" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-wrap gap-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-9 w-32 bg-muted/60 rounded-lg animate-pulse" }, i)) })
    ] });
  }
  if (!people || people.length === 0) return null;
  const topPeople = people.slice(0, 3);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl text-foreground mb-4", children: "Famous Birthday Twins" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-wrap gap-3", children: topPeople.map((person, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: "flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-sm font-medium text-foreground", children: person.name }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "span",
            {
              className: `text-[11px] font-medium px-2 py-0.5 rounded-full ${tagColors[person.tag] || "bg-muted text-muted-foreground"}`,
              children: person.tag
            }
          )
        ]
      },
      `${person.name}-${i}`
    )) })
  ] });
};
var FamousBirthdaysList_default = FamousBirthdaysList;

// src/components/ShareCard.tsx
var import_react3 = require("react");
var import_html_to_image = require("html-to-image");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ShareCard = ({
  name,
  years,
  totalDays,
  fullMoons,
  heartBeatsStr,
  moodLine,
  dobFormatted,
  nextBirthdayDays,
  generationName,
  generationTagline,
  famousName
}) => {
  const cardRef = (0, import_react3.useRef)(null);
  const [busy, setBusy] = (0, import_react3.useState)(false);
  const displayName = name.trim() || "Me";
  const generateImage = async () => {
    if (!cardRef.current) return null;
    const node = cardRef.current;
    const width = node.offsetWidth;
    const height = node.offsetHeight;
    const dataUrl = await (0, import_html_to_image.toPng)(node, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#3a1a0c",
      width,
      height,
      canvasWidth: width,
      canvasHeight: height,
      style: {
        margin: "0",
        transform: "none"
      }
    });
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return { blob, dataUrl };
  };
  const handleShare = async () => {
    try {
      setBusy(true);
      const result = await generateImage();
      if (!result) return;
      const file = new File([result.blob], "my-age-card.png", { type: "image/png" });
      const shareText = `${displayName === "Me" ? "I'm" : displayName + " is"} ${years} years old \u2014 ${totalDays.toLocaleString()} days alive. Your turn.`;
      const shareUrl = typeof window !== "undefined" ? window.location.href : "";
      const nav = navigator;
      if (nav.canShare && nav.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "My Age Card",
          text: shareText,
          url: shareUrl
        });
      } else {
        const link = document.createElement("a");
        link.href = result.dataUrl;
        link.download = "my-age-card.png";
        link.click();
      }
    } catch (err) {
      console.error("Share failed", err);
    } finally {
      setBusy(false);
    }
  };
  const handleDownload = async () => {
    try {
      setBusy(true);
      const result = await generateImage();
      if (!result) return;
      const link = document.createElement("a");
      link.href = result.dataUrl;
      link.download = "my-age-card.png";
      link.click();
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setBusy(false);
    }
  };
  const tileBase = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "14px 16px"
  };
  const valueStyle = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "26px",
    lineHeight: 1.1,
    color: "#fdf6ec"
  };
  const labelStyle = {
    fontSize: "10px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    opacity: 0.65,
    marginTop: "6px"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "overflow-hidden rounded-2xl border border-border shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        ref: cardRef,
        style: {
          width: "440px",
          maxWidth: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          background: "linear-gradient(165deg, #4a1d0a 0%, #7a2e10 45%, #c45a25 100%)",
          color: "#fdf6ec",
          padding: "32px 26px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          fontFamily: "'DM Sans', sans-serif"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { fontSize: "15px", fontWeight: 700, opacity: 0.9 }, children: [
              displayName,
              " \xB7 ",
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { fontWeight: 400, opacity: 0.8 }, children: dobFormatted })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                style: {
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "78px",
                  lineHeight: 1,
                  marginTop: "10px",
                  color: "#fdf6ec"
                },
                children: years
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                style: {
                  fontSize: "14px",
                  opacity: 0.75,
                  marginTop: "6px"
                },
                children: "years on this planet"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              style: {
                borderLeft: "3px solid #e8a464",
                paddingLeft: "12px"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "div",
                {
                  style: {
                    fontFamily: "'DM Serif Display', serif",
                    fontStyle: "italic",
                    fontSize: "16px",
                    color: "#e8a464",
                    lineHeight: 1.4
                  },
                  children: [
                    '"',
                    moodLine,
                    '"'
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: valueStyle, children: heartBeatsStr }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: labelStyle, children: "Heartbeats" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: valueStyle, children: fullMoons.toLocaleString() }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: labelStyle, children: "Full Moons" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: valueStyle, children: totalDays.toLocaleString() }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: labelStyle, children: "Days Alive" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: valueStyle, children: nextBirthdayDays === 0 ? "\u{1F382}" : nextBirthdayDays }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: labelStyle, children: "To Birthday" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                style: {
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "20px",
                  color: "#fdf6ec"
                },
                children: generationName
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: "12px", opacity: 0.7, marginTop: "4px" }, children: generationTagline })
          ] }),
          famousName && (() => {
            const initials = famousName.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
            return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "div",
                {
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "#fdf6ec",
                    flexShrink: 0
                  },
                  children: initials
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { fontSize: "13px", lineHeight: 1.35 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontWeight: 700, color: "#fdf6ec" }, children: famousName }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { opacity: 0.7 }, children: "Born on the same day" })
              ] })
            ] });
          })(),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              style: {
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                margin: "2px 0"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                style: {
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#e8a464",
                  marginBottom: "10px"
                },
                children: "Your turn."
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                      "div",
                      {
                        style: {
                          ...valueStyle,
                          filter: "blur(8px)",
                          userSelect: "none"
                        },
                        children: "1.2B"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: labelStyle, children: "Heartbeats" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: tileBase, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                      "div",
                      {
                        style: {
                          ...valueStyle,
                          filter: "blur(8px)",
                          userSelect: "none"
                        },
                        children: "408"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: labelStyle, children: "Full Moons" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { marginTop: "4px", fontSize: "13px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { color: "#e8a464" }, children: "Find out \u2192" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { fontWeight: 700, color: "#fdf6ec" }, children: "whatismyage.me" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-5 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "button",
        {
          onClick: handleShare,
          disabled: busy,
          className: "flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.Share2, { className: "h-4 w-4" }),
            busy ? "Preparing..." : "Share with friends"
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "button",
        {
          onClick: handleDownload,
          disabled: busy,
          className: "flex items-center justify-center gap-2 rounded-lg border border-input bg-card py-3 font-semibold text-foreground hover:bg-secondary transition-all disabled:opacity-60",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.Download, { className: "h-4 w-4" }),
            "Save card"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 rounded-xl border border-border bg-card/50 p-5 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "font-display text-lg text-foreground mb-1", children: "Want to compare with a friend?" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          onClick: () => {
            const el = document.getElementById("dob");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              el.focus();
            }
          },
          className: "text-sm text-primary hover:underline",
          children: "Enter their birthday \u2192"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-4 text-center text-sm text-muted-foreground", children: "\u{1F382} Come back on your birthday for your personalised year ahead." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-6 text-center text-xs text-muted-foreground/70", children: "\u{1F512} We don't store your name or date of birth." })
  ] });
};
var ShareCard_default = ShareCard;

// src/components/AgeCalculator.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var DEFAULT_LIFE_EXPECTANCY = 80;
var AgeCalculator = () => {
  const [name, setName] = (0, import_react4.useState)("");
  const [dob, setDob] = (0, import_react4.useState)("");
  const [lifeExpectancy, setLifeExpectancy] = (0, import_react4.useState)(DEFAULT_LIFE_EXPECTANCY);
  const [result, setResult] = (0, import_react4.useState)(null);
  const [country, setCountry] = (0, import_react4.useState)(null);
  const [timezone, setTimezone] = (0, import_react4.useState)("");
  const [error, setError] = (0, import_react4.useState)("");
  const [topCelebName, setTopCelebName] = (0, import_react4.useState)(null);
  const dobRef = (0, import_react4.useRef)("");
  const intervalRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    fetch("https://ipapi.co/json/").then((r) => r.json()).then((data) => {
      if (data?.country_name) setCountry(data.country_name);
      if (data?.timezone) setTimezone(data.timezone);
    }).catch(() => {
    });
  }, []);
  const startLiveUpdate = (dobStr) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    dobRef.current = dobStr;
    const dobLocal = isoToLocalDate(dobStr);
    if (!dobLocal) return;
    const tick = () => setResult(calculateAge(dobLocal));
    tick();
    intervalRef.current = setInterval(tick, 1e3);
  };
  (0, import_react4.useEffect)(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  const validateAndStart = (dobStr) => {
    setError("");
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!dobStr) {
      setResult(null);
      return;
    }
    const parts = parseIsoDate(dobStr);
    if (!parts) {
      setResult(null);
      return;
    }
    const dobDate = isoToLocalDate(dobStr);
    const now = /* @__PURE__ */ new Date();
    if (dobDate > now) {
      setError("Date of birth can't be in the future.");
      setResult(null);
      return;
    }
    if (parts.year < 1900) {
      setError("Please enter a valid date of birth.");
      setResult(null);
      return;
    }
    startLiveUpdate(dobStr);
  };
  (0, import_react4.useEffect)(() => {
    validateAndStart(dob);
  }, [dob]);
  (0, import_react4.useEffect)(() => {
    if (!dob) {
      setTopCelebName(null);
      return;
    }
    const md = getMonthDay(dob);
    if (!md) return;
    const { month, day } = md;
    let cancelled = false;
    setTopCelebName(null);
    const t = setTimeout(async () => {
      try {
        const { data, error: error2 } = await supabase.functions.invoke("famous-birthdays", {
          body: { month, day }
        });
        if (cancelled) return;
        if (!error2 && data?.people?.[0]?.name) setTopCelebName(data.people[0].name);
      } catch (e) {
        if (!cancelled) console.error("share card celeb fetch", e);
      }
    }, 350);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [dob]);
  const handleCalculate = (e) => {
    e.preventDefault();
    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }
    validateAndStart(dob);
  };
  const openPicker = (el) => {
    if (!el) return;
    const input = el;
    try {
      input.focus();
      input.showPicker?.();
    } catch {
    }
  };
  const greeting = name.trim() ? name.trim() : "You";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-full max-w-xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("form", { onSubmit: handleCalculate, className: "space-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { htmlFor: "name", className: "block text-sm font-medium text-muted-foreground mb-1.5", children: [
          "First name ",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-muted-foreground/70 font-normal", children: "(so we can make it personal)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            id: "name",
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "e.g. Sarah",
            className: "w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "dob", className: "block text-sm font-medium text-muted-foreground mb-1.5", children: "Date of birth" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            id: "dob",
            type: "date",
            value: dob,
            onChange: (e) => setDob(e.target.value),
            onClick: (e) => openPicker(e.currentTarget),
            onFocus: (e) => openPicker(e.currentTarget),
            onTouchEnd: (e) => openPicker(e.currentTarget),
            max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            className: "w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-destructive text-sm", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "submit",
          className: "w-full rounded-lg bg-primary py-3.5 font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.99] transition-all",
          children: "Calculate My Age"
        }
      )
    ] }),
    result && (() => {
      const lifeFraction = Math.min(result.years / lifeExpectancy, 0.999);
      const totalMinsInDay = lifeFraction * 24 * 60;
      const lifeHour = Math.floor(totalMinsInDay / 60);
      const lifeMin = Math.floor(totalMinsInDay % 60);
      const ampm = lifeHour >= 12 ? "PM" : "AM";
      const displayHour = lifeHour % 12 === 0 ? 12 : lifeHour % 12;
      const lifeTimeStr = `${displayHour}:${String(lifeMin).padStart(2, "0")} ${ampm}`;
      const nightsSlept = Math.floor(result.totalDays / 3);
      const heartBeats = result.totalDays * 24 * 60 * 80;
      const heartBeatsStr = heartBeats >= 1e9 ? `${(heartBeats / 1e9).toFixed(1)}B` : `${(heartBeats / 1e6).toFixed(0)}M`;
      const moodLine = getAgeMoodLine(result.years);
      const shortMood = getLifeClockMood(result.years);
      const yearsLeft = Math.max(lifeExpectancy - result.years, 0);
      const weekendsLeft = Math.max(Math.round(yearsLeft * 52), 0);
      const localized = getLocalizedItems(result.years, country);
      const dobParts = parseIsoDate(dob);
      const dobDate = isoToLocalDate(dob);
      if (!dobParts || !dobDate) return null;
      const gen = getGeneration(dobParts.year);
      const dobFormatted = dobDate.toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-10 animate-fade-in-up", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "rounded-2xl border border-border bg-card p-5 sm:p-6 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h2", { className: "font-display text-2xl sm:text-3xl text-foreground leading-tight", children: [
            greeting,
            ", you are ",
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-primary", children: result.years }),
            " years old"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-sm text-muted-foreground mt-1", children: [
            timezone ? `${timezone} \xB7 ` : "",
            dobFormatted
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-sm sm:text-base text-foreground italic", children: [
            "\u201C",
            moodLine,
            "\u201D"
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.years }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Years" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.months }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Months" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.days }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Days" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.hours }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Hours" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.minutes }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Minutes" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value animate-pulse", children: result.seconds }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Seconds" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.totalDays.toLocaleString() }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Days Alive" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: result.nextBirthdayDays === 0 ? "\u{1F382}" : result.nextBirthdayDays }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: result.nextBirthdayDays === 0 ? "Happy Birthday!" : "To Birthday" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: nightsSlept.toLocaleString() }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Days Slept" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value", children: heartBeatsStr }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: "Heart Beats" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-4 grid grid-cols-3 gap-4", children: localized.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-value text-2xl sm:text-3xl", children: item.value }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "age-stat-label", children: item.label })
        ] }, item.label)) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-4 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Life as a 24-hour day" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "font-display text-2xl sm:text-3xl text-primary", children: lifeTimeStr }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs text-muted-foreground italic mt-1 leading-snug", children: shortMood })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: [
              "Time Left (to age ",
              lifeExpectancy,
              ")"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "font-display text-2xl sm:text-3xl text-primary", children: [
              yearsLeft.toLocaleString(),
              " years"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
              weekendsLeft.toLocaleString(),
              " weekends"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-3 px-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                Slider,
                {
                  value: [lifeExpectancy],
                  min: 70,
                  max: 100,
                  step: 1,
                  onValueChange: (v) => setLifeExpectancy(v[0]),
                  "aria-label": "Life expectancy"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between text-[10px] text-muted-foreground/70 mt-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "70" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: lifeExpectancy }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "100" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-4 grid grid-cols-2 gap-4", children: [
          name.trim() ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            CompactNameTile_default,
            {
              name,
              birthYear: dobParts.year,
              country
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Name meaning" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-sm text-muted-foreground italic", children: "Add your name above to reveal its meaning." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "age-stat-card text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Generation" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "font-display text-xl text-primary mb-1", children: gen.name }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs text-muted-foreground italic leading-snug", children: gen.tagline })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          FamousBirthdaysList_default,
          {
            month: dobParts.month,
            day: dobParts.day
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          ShareCard_default,
          {
            name,
            years: result.years,
            totalDays: result.totalDays,
            fullMoons: Math.floor(result.years * 12.37),
            heartBeatsStr,
            moodLine,
            dobFormatted,
            nextBirthdayDays: result.nextBirthdayDays,
            generationName: gen.name,
            generationTagline: gen.tagline,
            famousName: topCelebName
          }
        )
      ] });
    })()
  ] });
};
var AgeCalculator_default = AgeCalculator;

// src/components/BlogMenu.tsx
var import_react_router_dom = require("react-router-dom");

// src/components/ui/dropdown-menu.tsx
var React3 = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React3.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React3.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React3.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React3.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React3.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/BlogMenu.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var BLOG_POSTS = [
  { slug: "how-many-heartbeats-in-a-lifetime", title: "How Many Heartbeats in a Lifetime?" },
  { slug: "how-many-full-moons-in-a-lifetime", title: "How Many Full Moons in a Lifetime?" },
  { slug: "what-generation-am-i", title: "What Generation Am I?" },
  { slug: "how-to-calculate-age-in-days", title: "Calculate Your Age in Days" },
  { slug: "what-is-a-life-clock", title: "What Is a Life Clock?" },
  { slug: "what-day-of-the-week-was-i-born", title: "What Day of the Week Were You Born?" },
  { slug: "how-many-seconds-old-am-i", title: "How Many Seconds Old Are You?" },
  {
    slug: "birthday-twins-famous-people-born-on-your-birthday",
    title: "Birthday Twins: Famous People Born on Your Birthday"
  },
  {
    slug: "how-to-find-your-zodiac-sign-by-birth-date",
    title: "How to Find Your Zodiac Sign by Birth Date"
  },
  { slug: "what-does-days-to-birthday-mean", title: "Days to Your Next Birthday" }
];
var itemClass = "cursor-pointer focus:bg-primary/10 focus:text-primary data-[highlighted]:bg-primary/10 data-[highlighted]:text-primary";
var BlogMenu = ({
  className,
  label = "Blog",
  align = "center",
  side = "top"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      DropdownMenuTrigger,
      {
        className: className ?? "hover:text-foreground transition-colors outline-none cursor-pointer",
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(DropdownMenuContent, { align, side, className: "w-64", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DropdownMenuItem, { asChild: true, className: itemClass, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom.Link, { to: "/blog", className: "font-medium", children: "All posts" }) }),
      BLOG_POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DropdownMenuItem, { asChild: true, className: itemClass, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom.Link, { to: `/blog/${p.slug}`, children: p.title }) }, p.slug))
    ] })
  ] });
};
var BlogMenu_default = BlogMenu;

// src/pages/Index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var setCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};
var Index = () => {
  (0, import_react5.useEffect)(() => {
    setCanonical("https://whatismyage.me/");
  }, []);
  const sample = (0, import_react5.useMemo)(() => {
    const years = Math.floor(Math.random() * (58 - 25 + 1)) + 25;
    const totalDays = years * 365.25;
    const fullMoons = Math.round(totalDays / 29.53);
    const beats = totalDays * 24 * 60 * 80;
    const beatsStr = beats >= 1e9 ? `${(beats / 1e9).toFixed(2)} billion` : `${(beats / 1e6).toFixed(0)} million`;
    const birthYear = (/* @__PURE__ */ new Date()).getFullYear() - years;
    const generation = getGeneration(birthYear).name;
    return { years, fullMoons, beatsStr, generation };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { style: { position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }, children: "What Is My Age \u2014 Age Calculator" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { className: "flex-1 flex flex-col items-center justify-center px-5 py-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h2", { className: "text-3xl sm:text-4xl text-foreground leading-tight mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-primary", children: sample.years }),
          " years.",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-primary", children: sample.fullMoons }),
          " full moons.",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-primary", children: sample.beatsStr }),
          " heartbeats.",
          " ",
          "A ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-primary", children: sample.generation }),
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Your age in years is just the beginning \u2014 discover your heartbeats, full moons, and the exact moment of your life's 24-hour clock." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(AgeCalculator_default, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("footer", { className: "py-6 px-5 text-center text-xs text-muted-foreground/60", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "space-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "whatismyage.me" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlogMenu_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "/privacy", className: "hover:text-foreground transition-colors", children: "Privacy" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("nav", { "aria-label": "Blog posts", className: "sr-only", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "/blog", children: "All blog posts" }),
        BLOG_POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: `/blog/${p.slug}`, children: p.title }, p.slug))
      ] })
    ] })
  ] });
};
var Index_default = Index;

// src/pages/Privacy.tsx
var import_react_router_dom2 = require("react-router-dom");
var import_react6 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Privacy = () => {
  (0, import_react6.useEffect)(() => {
    document.title = "Privacy Policy \u2014 whatismyage.me";
    const meta5 = document.querySelector('meta[name="description"]');
    const desc = "Privacy Policy for whatismyage.me \u2014 what data we collect, how we use Google AdSense cookies, and how to opt out.";
    if (meta5) meta5.setAttribute("content", desc);
  }, []);
  const lastUpdated = "April 20, 2026";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("main", { className: "flex-1 max-w-2xl mx-auto px-5 py-12 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_react_router_dom2.Link,
        {
          to: "/",
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: "\u2190 Back"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("article", { className: "mt-8 space-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("header", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h1", { className: "text-3xl sm:text-4xl text-foreground mb-2", children: [
            "Privacy ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-primary", children: "Policy" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
            "Last updated: ",
            lastUpdated
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "space-y-3", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-foreground/90 leading-relaxed", children: 'whatismyage.me ("we", "us") is a free tool that turns your date of birth into a fun breakdown of your life \u2014 heartbeats, full moons, days alive, and more. We try to collect as little as possible.' }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl text-foreground", children: "1. What we collect" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "list-disc pl-5 space-y-2 text-foreground/90 leading-relaxed", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Name and date of birth" }),
              " you enter into the calculator. This is processed entirely in your browser to generate your results."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "We do not store your name or date of birth." }),
              " It is never sent to a database, never associated with you, and disappears the moment you close or refresh the page."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Anonymous usage data" }),
              " (such as page views and rough country) may be collected by standard web analytics to help us improve the site."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl text-foreground", children: "2. Cookies and advertising" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-foreground/90 leading-relaxed", children: [
            "We use ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Google AdSense" }),
            " to display ads. Google and its partners use cookies (including the DoubleClick DART cookie) to serve ads based on your visit to this site and other sites on the internet. These cookies may be used to:"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "list-disc pl-5 space-y-2 text-foreground/90 leading-relaxed", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "Show ads relevant to your interests" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "Limit the number of times you see the same ad" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "Measure the effectiveness of advertising campaigns" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-foreground/90 leading-relaxed", children: "Third-party vendors, including Google, may also use cookies to serve ads based on your prior visits to this website or other websites." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl text-foreground", children: "3. How to opt out" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "list-disc pl-5 space-y-2 text-foreground/90 leading-relaxed", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
              "Opt out of personalised ads from Google by visiting",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "a",
                {
                  href: "https://adssettings.google.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary underline",
                  children: "Google Ads Settings"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
              "Opt out of third-party vendor cookies via",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "a",
                {
                  href: "https://www.aboutads.info",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary underline",
                  children: "aboutads.info"
                }
              ),
              " ",
              "or",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "a",
                {
                  href: "https://www.youronlinechoices.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary underline",
                  children: "youronlinechoices.com"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "You can also block or delete cookies in your browser settings at any time. The site will still work without them." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl text-foreground", children: "4. Children" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-foreground/90 leading-relaxed", children: "whatismyage.me is not directed at children under 13, and we do not knowingly collect personal information from them." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl text-foreground", children: "5. Your rights" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-foreground/90 leading-relaxed", children: [
            "Because we do not store your name or date of birth, there is nothing personal of yours for us to access, export, or delete. For any questions about this policy, contact us at",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "a",
              {
                href: "mailto:hello@whatismyage.me",
                className: "text-primary underline",
                children: "hello@whatismyage.me"
              }
            ),
            "."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl text-foreground", children: "6. Changes" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-foreground/90 leading-relaxed", children: 'We may update this policy from time to time. The "Last updated" date at the top will always reflect the latest version.' })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("footer", { className: "py-6 text-center text-xs text-muted-foreground/60", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom2.Link, { to: "/", className: "hover:text-foreground transition-colors", children: "whatismyage.me" }) })
  ] });
};
var Privacy_default = Privacy;

// src/pages/Blog.tsx
var import_react_router_dom3 = require("react-router-dom");
var import_react7 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var posts = [
  {
    slug: "how-many-heartbeats-in-a-lifetime",
    tag: "Biology & Science",
    title: "How Many Heartbeats Does a Human Have in a Lifetime?",
    excerpt: "The average human heart beats 2.5 billion times in a lifetime. Discover the science behind resting heart rate, cardiac output, and how to calculate your personal heartbeat total.",
    readTime: "6 min read"
  },
  {
    slug: "how-many-full-moons-in-a-lifetime",
    tag: "Astronomy & Time",
    title: "How Many Full Moons Will You See in Your Lifetime?",
    excerpt: "There are roughly 13 full moons per year. Over an average lifetime you will see around 1,000 full moons \u2014 fewer than most people expect.",
    readTime: "5 min read"
  },
  {
    slug: "what-generation-am-i",
    tag: "Culture & Identity",
    title: "What Generation Am I? The Complete Birth Year Guide",
    excerpt: "Find out which generation you belong to \u2014 Gen Z, Millennial, Gen X, Boomer \u2014 with birth year ranges and what defines each one.",
    readTime: "6 min read"
  },
  {
    slug: "how-to-calculate-age-in-days",
    tag: "How-to & Calculation",
    title: "How to Calculate Your Exact Age in Days",
    excerpt: "Learn how to calculate your exact age in days, account for leap years correctly, and understand milestone day counts.",
    readTime: "5 min read"
  },
  {
    slug: "what-is-a-life-clock",
    tag: "Philosophy & Perspective",
    title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained",
    excerpt: "If your life were a 24-hour day, what time is it right now? The life clock converts your age into a powerful time-of-day metaphor.",
    readTime: "6 min read"
  },
  {
    slug: "what-day-of-the-week-was-i-born",
    tag: "Trivia & History",
    title: "What Day of the Week Were You Born? And Why It Matters",
    excerpt: "Discover the Doomsday algorithm, weekday folklore from Monday's Child to Thai birth colours, and what your birth weekday actually reveals.",
    readTime: "5 min read"
  },
  {
    slug: "how-many-seconds-old-am-i",
    tag: "Science & Numbers",
    title: "How Many Seconds Old Are You Right Now?",
    excerpt: "A 38-year-old has lived 1.2 billion seconds. Find out when you turn 1 billion seconds old and why seconds are the most honest unit of age.",
    readTime: "5 min read"
  },
  {
    slug: "birthday-twins-famous-people-born-on-your-birthday",
    tag: "Culture & Curiosity",
    title: "Birthday Twins: Famous People Born on Your Birthday",
    excerpt: "The birthday paradox, the similarity-attraction effect, and the famous figures who arrived on the same calendar date as you.",
    readTime: "5 min read"
  },
  {
    slug: "how-to-find-your-zodiac-sign-by-birth-date",
    tag: "Astrology & Culture",
    title: "How to Find Your Zodiac Sign by Birth Date",
    excerpt: "Western, Vedic, and Chinese astrology \u2014 plus what your sun sign, moon sign, and rising sign actually mean for your birth chart.",
    readTime: "6 min read"
  },
  {
    slug: "what-does-days-to-birthday-mean",
    tag: "How-to & Celebration",
    title: "Days to Your Next Birthday: How the Countdown Works",
    excerpt: "How the days-to-birthday number is calculated, why it feels different at every age, and the milestones worth tracking on the way there.",
    readTime: "5 min read"
  }
];
var Blog = () => {
  (0, import_react7.useEffect)(() => {
    document.title = "Blog \u2014 whatismyage.me";
    const meta5 = document.querySelector('meta[name="description"]');
    if (meta5)
      meta5.setAttribute(
        "content",
        "Stories about time, age, heartbeats, full moons, and the numbers that quietly shape your life."
      );
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("header", { className: "w-full px-5 py-4 max-w-3xl mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom3.Link, { to: "/", className: "font-display text-lg text-foreground", children: [
      "What Is My ",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-primary", children: "Age" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("main", { className: "flex-1 max-w-3xl mx-auto px-5 py-12 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        import_react_router_dom3.Link,
        {
          to: "/",
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: "\u2190 Back"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("header", { className: "mt-8 mb-10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h1", { className: "text-4xl sm:text-5xl text-foreground mb-3", children: [
          "The ",
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-primary", children: "Blog" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-muted-foreground max-w-xl", children: "Stories about time, age, and the numbers that quietly shape your life." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "space-y-5", children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        import_react_router_dom3.Link,
        {
          to: `/blog/${p.slug}`,
          className: "block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-3 mb-3 text-xs uppercase tracking-wider text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "px-2 py-1 rounded-full bg-secondary text-secondary-foreground", children: p.tag }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: p.readTime })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-2xl text-foreground mb-2 leading-snug", children: p.title }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-muted-foreground leading-relaxed", children: p.excerpt }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "inline-block mt-4 text-primary text-sm font-medium", children: "Read article \u2192" })
          ]
        },
        p.slug
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("footer", { className: "py-6 text-center text-xs text-muted-foreground/60 space-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom3.Link, { to: "/", className: "hover:text-foreground transition-colors", children: "whatismyage.me" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlogMenu_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom3.Link, { to: "/privacy", className: "hover:text-foreground transition-colors", children: "Privacy" })
    ] })
  ] });
};
var Blog_default = Blog;

// src/pages/blog/HeartbeatsLifetime.tsx
var import_react_router_dom4 = require("react-router-dom");
var import_react8 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var CANONICAL = "https://whatismyage.me/blog/how-many-heartbeats-in-a-lifetime";
var TITLE = "How Many Heartbeats in a Human Lifetime? | whatismyage.me";
var DESC = "The average human heart beats 2.5 billion times in a lifetime. Discover resting heart rate science, cardiac output, and how to calculate your personal heartbeat total.";
var setMeta = (selector, attr, value) => {
  let el = document.querySelector(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      el.rel = "canonical";
    } else {
      el = document.createElement("meta");
      const m = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (m) el.setAttribute(m[1], m[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};
var StatCard = ({ n, l }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4 text-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-2xl font-bold text-primary", children: n }),
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mt-1", children: l })
] });
var HeartbeatsLifetime = () => {
  (0, import_react8.useEffect)(() => {
    document.title = TITLE;
    setMeta('meta[name="description"]', "content", DESC);
    setMeta('link[rel="canonical"]', "href", CANONICAL);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESC);
    setMeta('meta[property="og:url"]', "content", CANONICAL);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[name="twitter:description"]', "content", DESC);
    const existing = document.getElementById("article-jsonld");
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "article-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How Many Heartbeats Does a Human Have in a Lifetime?",
      description: DESC,
      url: CANONICAL,
      datePublished: "2026-04-20",
      dateModified: "2026-04-20",
      author: { "@type": "Organization", name: "whatismyage.me", url: "https://whatismyage.me" },
      publisher: { "@type": "Organization", name: "What Is My Age", url: "https://whatismyage.me" },
      mainEntityOfPage: CANONICAL
    });
    document.head.appendChild(ld);
    return () => {
      setMeta('link[rel="canonical"]', "href", "https://whatismyage.me/");
      const el = document.getElementById("article-jsonld");
      if (el) el.remove();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("header", { className: "border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "max-w-3xl mx-auto px-5 py-4 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom4.Link, { to: "/", className: "font-display text-lg text-foreground", children: [
        "What Is My ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-primary", children: "Age" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BlogMenu_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_react_router_dom4.Link,
          {
            to: "/",
            className: "text-xs sm:text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap",
            children: "Calculate my age"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("main", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("article", { className: "max-w-2xl mx-auto px-5 py-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        import_react_router_dom4.Link,
        {
          to: "/blog",
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: "\u2190 All posts"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: "How Many Heartbeats Does a Human Have in a Lifetime?" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "italic text-foreground/80 border-l-4 border-primary pl-4 mb-8 text-lg leading-relaxed", children: "Your heart has been beating since before you were born. Furthermore, it has never once stopped to rest. But how many times has it actually beaten \u2014 and how many beats remain?" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "The answer is staggering. By the time the average person reaches 80, their heart will have completed approximately",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "2.5 to 3 billion beats" }),
        ". Not million. Billion. That single number changes how most people think about the organ quietly working inside them every second of every day."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-card border-l-4 border-primary rounded-r-xl py-5 px-6 my-7", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-3xl sm:text-4xl font-bold text-primary", children: "~2.85 billion" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-xs text-muted-foreground mt-1", children: "Average lifetime heartbeats based on 70 BPM resting heart rate over 77.5 years (CDC, 2022)" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border", children: "How to Calculate Your Total Heartbeats in a Lifetime" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "The calculation starts with your ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "resting heart rate" }),
        " ",
        "\u2014 the number of times your heart beats per minute while at rest. For most healthy adults, this figure ranges from 60 to 100 beats per minute (BPM). Consequently, doctors commonly use 70\u201372 BPM as a reliable average for estimation purposes."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-2 gap-3 my-7", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StatCard, { n: "72", l: "Beats per minute" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StatCard, { n: "4,320", l: "Beats per hour" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StatCard, { n: "103,680", l: "Beats per day" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StatCard, { n: "37,843,200", l: "Beats per year" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: "Therefore, multiply 37.8 million by your age in years and you have a working estimate of your personal heartbeat total. For instance, a 38-year-old has already crossed 1.43 billion beats. Moreover, someone born in 1970 is rapidly approaching 2 billion." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-card border border-border rounded-xl p-5 my-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "font-semibold text-foreground mb-2", children: "Total heartbeats formula" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-sm text-muted-foreground leading-relaxed", children: [
          "Age in years \xD7 365.25 \xD7 24 \xD7 60 \xD7 resting BPM = lifetime heartbeats",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
          "Example: 38 \xD7 365.25 \xD7 24 \xD7 60 \xD7 72 =",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { className: "text-foreground", children: "1,432,166,400 beats" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border", children: "Does Cardiac Output Affect Your Total Heartbeat Count?" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "Cardiac output" }),
        " \u2014 the volume of blood the heart pumps per minute \u2014 is distinct from heart rate. However, both are deeply connected. A typical adult heart pumps around 5 litres of blood per minute at rest. Additionally, with each heartbeat the heart ejects roughly 70ml of blood, known as the stroke volume."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "Over a lifetime, your heart will pump approximately",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "200 million litres of blood" }),
        " \u2014 enough to fill 80 Olympic swimming pools. Meanwhile, every single beat is coordinating oxygen delivery to every cell in your body simultaneously. As a result, cardiovascular health becomes one of the most consequential factors in how long \u2014 and how well \u2014 you live."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-display text-xl text-foreground mt-7 mb-2", children: "What the science says about heart rate and life expectancy" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "Research consistently links lower resting heart rate to better cardiovascular health outcomes. A landmark 2013 Danish study tracking 5,200 men over 16 years found a clear association between elevated resting pulse rate and mortality risk. Consequently, a resting heart rate below 60 BPM \u2014 called ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "bradycardia" }),
        " ",
        "in athletic individuals \u2014 is generally considered a sign of excellent cardiovascular fitness."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "Conversely, a persistently elevated heart rate above 100 BPM at rest \u2014 ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "tachycardia" }),
        " \u2014 signals increased strain on the heart. Similarly, high ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "heart rate variability" }),
        " ",
        "(the variation between beats) is increasingly recognised as a marker of good autonomic nervous system function and overall health."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border", children: "Do All Mammals Get the Same Number of Heartbeats in a Lifetime?" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "This is where the biology becomes genuinely surprising. Research across the animal kingdom reveals a remarkable pattern: most mammals accumulate roughly ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "one billion heartbeats" }),
        " ",
        "over their lifespan, regardless of body size."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "bg-secondary/60 rounded-xl px-5 py-4 my-6 text-foreground/90 leading-relaxed", children: "A hamster's heart beats 400 times a minute. It lives for roughly 3 years. An elephant's heart beats 28 times a minute. It lives for 70 years. Both arrive at approximately one billion total beats." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: "Humans are a notable exception. Subsequently, thanks to modern medicine, nutrition, and sanitation, we live 2.5 times longer than the mammalian heart-rate pattern would predict. In fact, we receive what amounts to a biological bonus \u2014 one gifted entirely by civilisation." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-display text-xl text-foreground mt-7 mb-2", children: "Exercise, resting heart rate, and your personal beat count" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: "Exercise is the most powerful tool for lowering your resting pulse rate. Elite endurance athletes regularly record resting rates in the low 40s. For instance, cyclist Miguel Indurain reportedly had a resting rate of just 28 BPM. Furthermore, a lower resting rate means fewer total beats over a lifetime \u2014 though whether this directly extends life remains debated." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: "Additionally, factors such as stress, poor sleep, excessive caffeine intake, and certain medications all raise resting heart rate meaningfully. Therefore, managing these variables is not merely wellness advice \u2014 it is arithmetic." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border", children: "Your Personal Heartbeat Counter \u2014 Calculated to This Moment" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: "Your exact heartbeat total depends entirely on your date of birth and your personal resting heart rate. However, using the standard 72 BPM reference figure, the numbers are straightforward to calculate. Moreover, they tell a story no other single statistic can." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children: [
        "For more on translating your age into remarkable numbers, try the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/", className: "text-primary underline", children: "age calculator on whatismyage.me" }),
        ". You may also enjoy",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/blog/how-many-full-moons-in-a-lifetime", className: "text-primary underline", children: "how many full moons you'll see in a lifetime" }),
        ",",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "your life as a 24-hour clock" }),
        ",",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/blog/how-to-calculate-age-in-days", className: "text-primary underline", children: "your exact age in days" }),
        ", and",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/blog/what-generation-am-i", className: "text-primary underline", children: "which generation you belong to" }),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-primary text-primary-foreground rounded-2xl p-7 text-center my-10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-display text-2xl mb-2", children: "Calculate your exact heartbeat count" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-primary-foreground/85 mb-5", children: "Enter your date of birth at whatismyage.me and see your personal heartbeat total \u2014 calculated to this exact second." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_react_router_dom4.Link,
          {
            to: "/",
            className: "inline-block bg-background text-primary font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity",
            children: "Calculate mine \u2192"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/blog", className: "text-primary hover:underline", children: "\u2190 All posts" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("footer", { className: "py-6 text-center text-xs text-muted-foreground/60 space-x-3 border-t border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/", className: "hover:text-foreground transition-colors", children: "whatismyage.me" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/blog", className: "hover:text-foreground transition-colors", children: "Blog" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom4.Link, { to: "/privacy", className: "hover:text-foreground transition-colors", children: "Privacy" })
    ] })
  ] });
};
var HeartbeatsLifetime_default = HeartbeatsLifetime;

// src/pages/blog/FullMoonsLifetime.tsx
var import_react_router_dom6 = require("react-router-dom");

// src/components/blog/ArticleLayout.tsx
var import_react_router_dom5 = require("react-router-dom");
var import_jsx_runtime13 = require("react/jsx-runtime");
var ArticleHeader = () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("header", { className: "border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "max-w-3xl mx-auto px-5 py-4 flex items-center justify-between gap-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react_router_dom5.Link, { to: "/", className: "font-display text-lg text-foreground", children: [
    "What Is My ",
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-primary", children: "Age" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react_router_dom5.Link,
    {
      to: "/",
      className: "text-xs sm:text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap",
      children: "Calculate my age"
    }
  )
] }) });
var ArticleFooter = () => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("footer", { className: "py-6 text-center text-xs text-muted-foreground/60 space-x-3 border-t border-border", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_router_dom5.Link, { to: "/", className: "hover:text-foreground transition-colors", children: "whatismyage.me" }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BlogMenu_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { "aria-hidden": true, children: "\xB7" }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_router_dom5.Link, { to: "/privacy", className: "hover:text-foreground transition-colors", children: "Privacy" })
] });
var ArticleShell = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "min-h-screen flex flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ArticleHeader, {}),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("main", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("article", { className: "max-w-2xl mx-auto px-5 py-12", children }) }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ArticleFooter, {})
] });
var Lead = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "italic text-foreground/80 border-l-4 border-primary pl-4 mb-8 text-lg leading-relaxed", children });
var Paragraph = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-foreground/90 leading-relaxed mb-5 text-[17px]", children });
var H2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border", children });
var H3 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "font-display text-xl text-foreground mt-7 mb-2", children });
var StatBox = ({ number, label }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-card border-l-4 border-primary rounded-r-xl py-5 px-6 my-7", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-3xl sm:text-4xl font-bold text-primary", children: number }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-xs text-muted-foreground mt-1", children: label })
] });
var Note = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bg-secondary/60 rounded-xl px-5 py-4 my-6 text-foreground/90 leading-relaxed", children });
var Quote = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("blockquote", { className: "border-l-4 border-primary bg-secondary/50 rounded-r-xl px-5 py-4 my-7 italic text-foreground/80 leading-relaxed", children });
var FormulaBox = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-card border border-border rounded-xl p-5 my-6", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "font-semibold text-foreground mb-2", children: title }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-sm text-muted-foreground leading-relaxed", children })
] });
var CtaBox = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-primary text-primary-foreground rounded-2xl p-7 text-center my-10", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "font-display text-2xl mb-2", children: title }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-primary-foreground/85 mb-5", children }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react_router_dom5.Link,
    {
      to: "/",
      className: "inline-block bg-background text-primary font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity",
      children: "Calculate mine \u2192"
    }
  )
] });
var RelatedPosts = ({ posts: posts2 }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { className: "bg-card border border-border rounded-xl p-5 my-8", "aria-labelledby": "related-posts", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { id: "related-posts", className: "font-semibold text-foreground mb-4", children: "More from whatismyage.me" }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "space-y-3", children: posts2.map((post) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react_router_dom5.Link, { to: post.href, className: "flex items-start gap-3 group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[10px] uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full px-2 py-1 mt-0.5 shrink-0", children: post.tag }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-sm text-foreground leading-snug group-hover:text-primary transition-colors", children: post.title })
  ] }, post.href)) })
] });
var BackToBlog = () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_router_dom5.Link, { to: "/blog", className: "text-primary hover:underline", children: "\u2190 All posts" }) });

// src/components/blog/articleMeta.ts
var import_react9 = require("react");
var setMeta2 = (selector, attr, value) => {
  let el = document.querySelector(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      el.rel = "canonical";
    } else {
      el = document.createElement("meta");
      const match = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (match) el.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};
var useArticleMeta = ({ title, description, canonical, headline }) => {
  (0, import_react9.useEffect)(() => {
    document.title = title;
    setMeta2('meta[name="description"]', "content", description);
    setMeta2('link[rel="canonical"]', "href", canonical);
    setMeta2('meta[property="og:type"]', "content", "article");
    setMeta2('meta[property="og:site_name"]', "content", "What Is My Age");
    setMeta2('meta[property="og:title"]', "content", title);
    setMeta2('meta[property="og:description"]', "content", description);
    setMeta2('meta[property="og:url"]', "content", canonical);
    setMeta2('meta[property="og:image"]', "content", "https://whatismyage.me/og-image.png");
    setMeta2('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta2('meta[name="twitter:title"]', "content", title);
    setMeta2('meta[name="twitter:description"]', "content", description);
    setMeta2('meta[name="twitter:image"]', "content", "https://whatismyage.me/og-image.png");
    const existing = document.getElementById("article-jsonld");
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "article-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      description,
      url: canonical,
      image: "https://whatismyage.me/og-image.png",
      datePublished: "2026-04-20",
      dateModified: "2026-04-20",
      author: { "@type": "Organization", name: "whatismyage.me", url: "https://whatismyage.me" },
      publisher: { "@type": "Organization", name: "What Is My Age", url: "https://whatismyage.me" },
      mainEntityOfPage: canonical
    });
    document.head.appendChild(ld);
    return () => {
      setMeta2('link[rel="canonical"]', "href", "https://whatismyage.me/");
      document.getElementById("article-jsonld")?.remove();
    };
  }, [canonical, description, headline, title]);
};

// src/pages/blog/FullMoonsLifetime.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var meta = {
  title: "How Many Full Moons in a Lifetime? | whatismyage.me",
  description: "There are roughly 13 full moons per year. Over an average lifetime you will see around 1,000. Discover the lunar cycle, blue moons, and your personal full moon count.",
  canonical: "https://whatismyage.me/blog/how-many-full-moons-in-a-lifetime",
  headline: "How Many Full Moons Will You See in Your Lifetime?"
};
var moonCounts = [
  ["Age 20", "247"],
  ["Age 30", "371"],
  ["Age 38", "470"],
  ["Age 50", "618"],
  ["Age 70", "866"],
  ["Age 80", "989"]
];
var related = [
  { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
  { tag: "Philosophy", title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained", href: "/blog/what-is-a-life-clock" },
  { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" },
  { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" }
];
var FullMoonsLifetime = () => {
  useArticleMeta(meta);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(BackToBlog, {}),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: "How Many Full Moons Will You See in Your Lifetime?" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Lead, { children: "The full moon has guided human civilisations for thousands of years. Furthermore, it remains one of the most reliable astronomical events anyone can witness with the naked eye. But how many will you actually see?" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "The answer is smaller than most people expect. Moreover, once you know your personal full moon count, each lunar event starts to feel considerably more worth stepping outside for." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(StatBox, { number: "~1,000", label: "Full moons in an average 80-year human lifetime (approximately 12.37 per year)" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H2, { children: "How Many Full Moons Per Year \u2014 and How the Lifetime Count Works" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Paragraph, { children: [
      "A single ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "synodic month" }),
      " \u2014 the time between one full moon and the next \u2014 lasts exactly ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "29.53 days" }),
      ". Consequently, the year contains approximately 12.37 full moons, not the tidy 12 most people assume."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "Therefore, in most calendar years there are 12 full moons. However, some years contain 13. Additionally, a year can occasionally hold 14 full moon events depending on how the lunar cycle aligns with the calendar. The calculation is precise and consistent:" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 my-7", children: moonCounts.map(([age, count]) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xs text-muted-foreground mb-1", children: age }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-2xl font-bold text-primary", children: count }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1", children: "full moons" })
    ] }, age)) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "A 38-year-old, for instance, has already witnessed approximately 470 full moons. Meanwhile, they have roughly 519 remaining \u2014 assuming an 80-year lifespan. Similarly, a 20-year-old still has over 750 full moons ahead of them." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H2, { children: "What Is a Blue Moon? Understanding Full Moon Frequency" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Paragraph, { children: [
      "A ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "Blue Moon" }),
      " is the term used for the second full moon in a single calendar month. Because the synodic month is shorter than most calendar months, this overlap occurs approximately every ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "2.5 to 2.7 years" }),
      '. Consequently, the phrase "once in a blue moon" accurately describes a genuinely infrequent \u2014 though far from rare \u2014 event.'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "Furthermore, some astronomers use an older definition: a Blue Moon is the third full moon in a season that contains four, rather than the usual three. Both definitions remain in use. As a result, the term is occasionally a source of friendly debate among astronomy enthusiasts." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H3, { children: "Full moon names across cultures" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "Each full moon of the year carries traditional names from various cultures. For instance, January's full moon is often called the Wolf Moon. Moreover, the full moon nearest the autumn equinox is known as the Harvest Moon, celebrated across agricultural traditions worldwide. Additionally, Native American traditions named full moons after seasonal events \u2014 the Flower Moon, the Snow Moon, the Corn Moon \u2014 creating a practical lunar calendar for tracking time and nature." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H2, { children: "Why the Full Moon Has Shaped Human History and Culture" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "Before artificial light, the full moon was practically essential. It was the only reliable light source bright enough to travel, harvest, or gather safely after sunset. Therefore, virtually every ancient civilisation built its calendar, festivals, and religious ceremonies around lunar phases." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Paragraph, { children: [
      "The Hindu calendar, the Islamic calendar, the Hebrew calendar, and the traditional Chinese calendar are all ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "lunisolar" }),
      " \u2014 meaning they track months by the moon rather than the sun. Consequently, major festivals including Diwali, Eid al-Fitr, Holi, Rosh Hashanah, and Easter are all calculated from the moon's position. In fact, the moon has been humanity's primary timekeeper for far longer than any solar calendar."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Quote, { children: '"The moon is a friend for the lonesome to talk to." \u2014 Carl Sandburg' }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H2, { children: "Does the Full Moon Affect the Human Body?" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Paragraph, { children: [
      "The relationship between the ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "moon and human body" }),
      ' is one of the most persistent questions in folk medicine and science alike. The idea that full moons affect human behaviour \u2014 the so-called "lunar effect" \u2014 has been studied extensively. However, controlled research has consistently failed to find a statistically significant link between full moon timing and hospital admissions, birth rates, or psychological episodes.'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Paragraph, { children: [
      "Nevertheless, the moon exerts a measurable gravitational pull on Earth's oceans, driving the ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: "tide cycle" }),
      ". Some researchers suggest subtle effects on biological systems are theoretically plausible, even if not yet demonstrated conclusively. As a result, the debate continues with genuine scientific interest on both sides."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H3, { children: "The moon phase when you were born" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "If you were born within a day or two of a full moon, your first night on Earth was illuminated. Conversely, if you arrived during a new moon, the night sky would have been unusually dark and star-filled. Furthermore, knowing your birth moon phase is one of the most evocative personal facts you can discover \u2014 and it requires nothing more than your date of birth." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(H2, { children: "How Many Full Moons Remain in Your Lifetime?" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Paragraph, { children: "This is the question that quietly changes things. If you are 38 years old and live to 80, approximately 519 full moons remain. That is 519 chances to step outside on a clear night and look up. Moreover, these are not special occasions requiring travel or equipment. They happen automatically, every 29.53 days, whether you notice them or not." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Paragraph, { children: [
      "Subsequently, knowing your number tends to make the noticing more likely. For more perspective on translating age into meaningful figures, read about ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom6.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "how many heartbeats you have had in your lifetime" }),
      ". Additionally, see ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom6.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "what time it is on your personal life clock" }),
      " right now."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CtaBox, { title: "How many full moons have you lived through?", children: "Enter your date of birth at whatismyage.me for your exact count \u2014 plus heartbeats, days alive, and your shareable life card." }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RelatedPosts, { posts: related }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(BackToBlog, {})
  ] });
};
var FullMoonsLifetime_default = FullMoonsLifetime;

// src/pages/blog/GenerationGuide.tsx
var import_react_router_dom7 = require("react-router-dom");
var import_jsx_runtime15 = require("react/jsx-runtime");
var meta2 = {
  title: "What Generation Am I? Complete Guide | whatismyage.me",
  description: "Find out which generation you belong to \u2014 Gen Z, Millennial, Gen X, Boomer \u2014 with birth year ranges, defining traits, and what makes each generation unique.",
  canonical: "https://whatismyage.me/blog/what-generation-am-i",
  headline: "What Generation Am I? The Complete Birth Year Guide"
};
var generations = [
  ["Generation Alpha", "Born 2013\u2013present \xB7 Under 12 in 2025", "The first generation born entirely into a world of smartphones and AI", "Gen Alpha is still forming. Furthermore, they are the children of older Millennials and younger Gen X parents. As a result, they are growing up with unprecedented access to technology from infancy. Additionally, they are the first generation for whom AI assistants are simply a normal part of childhood."],
  ["Generation Z (Gen Z)", "Born 1997\u20132012 \xB7 Ages 13\u201328 in 2025", "Digital natives who have never known a world without the internet", "Gen Z grew up with smartphones from childhood. Consequently, social media was their primary social arena from adolescence. Moreover, they are the most ethnically diverse generation in recorded history. Additionally, they came of age during climate anxiety, the COVID-19 pandemic, and significant political instability \u2014 events that have shaped a notably pragmatic and financially cautious worldview."],
  ["Millennials (Generation Y)", "Born 1981\u20131996 \xB7 Ages 29\u201344 in 2025", "The last generation to know life before the internet \u2014 and the first to live entirely online", "Millennials occupy a unique cultural position. They remember childhood before smartphones. However, they built their entire adult lives around digital technology. Furthermore, they entered the workforce during or immediately after the 2008 global financial crisis. Consequently, their relationship with homeownership, job security, and financial institutions was permanently altered. They are, additionally, the most formally educated generation in history."],
  ["Generation X", "Born 1965\u20131980 \xB7 Ages 45\u201360 in 2025", "The overlooked middle child \u2014 independent, self-reliant, sceptical of institutions", "Gen X is demographically smaller than the Boomers before them and Millennials after \u2014 which is partly why they are so frequently overlooked in generational discourse. Moreover, they grew up as latchkey kids, often home alone after school, which cultivated fierce self-reliance. Furthermore, they were the first generation to adopt the internet as adults, giving them a genuinely bicultural relationship with analogue and digital life."],
  ["Baby Boomers", "Born 1946\u20131964 \xB7 Ages 61\u201379 in 2025", "Born into post-war optimism, came of age during the greatest cultural revolution of the 20th century", 'The Baby Boom refers to the dramatic spike in births following World War II. Subsequently, Boomers grew up during unprecedented Western economic expansion \u2014 an environment that shaped deep expectations of upward mobility and homeownership. Additionally, they came of age during the civil rights movement, the moon landings, and Woodstock. The dismissive "OK Boomer" label obscures the genuine complexity of a generation that produced both fierce progressives and committed conservatives.'],
  ["Silent Generation", "Born 1928\u20131945 \xB7 Ages 80\u201397 in 2025", "Shaped by the Great Depression and World War II \u2014 resilient, cautious, quietly determined", "The Silent Generation grew up during extraordinary hardship. Moreover, they are the last generation to have lived a significant portion of their lives entirely without television. They are also, notably, the generation that produced many of the civil rights movement's most influential leaders \u2014 including Martin Luther King Jr. and John Lewis."]
];
var related2 = [
  { tag: "Philosophy", title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained", href: "/blog/what-is-a-life-clock" },
  { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
  { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
  { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
];
var GenerationGuide = () => {
  useArticleMeta(meta2);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BackToBlog, {}),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: "What Generation Am I? The Complete Birth Year Guide" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Lead, { children: "You have probably been called a Millennial or a Boomer in an argument online. However, do you actually know which generation you belong to \u2014 where the boundaries sit and what genuinely defines each one?" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Paragraph, { children: "Generational labels are sociological shorthand. Moreover, they are imperfect tools \u2014 broad brushes applied to enormously diverse groups of people. Nevertheless, they capture something real: the shared historical events, economic conditions, and technologies that shape people born within the same window of time." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(H2, { children: "What Generation Am I by Birth Year \u2014 The Complete Breakdown" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "space-y-4 my-7", children: generations.map(([name, years, tagline, body]) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "bg-card border border-border rounded-xl p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-xl font-bold text-primary mb-1", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-xs text-muted-foreground mb-2", children: years }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-sm italic text-foreground/75 mb-3", children: [
        '"',
        tagline,
        '"'
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[15px] text-foreground/90 leading-relaxed", children: body })
    ] }, name)) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(H2, { children: "Am I a Millennial or Gen Z? The Zillennial Micro-Generation Explained" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Paragraph, { children: [
      "If you were born between approximately 1993 and 1998, you may feel that neither Millennial nor Gen Z quite fits your experience. This borderline cohort is increasingly referred to as ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Zillennials" }),
      ". Specifically, they were old enough to experience childhood without a smartphone, yet young enough to have grown up with social media during their formative teenage years."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Paragraph, { children: "Furthermore, Zillennials tend to share Millennial nostalgia for early internet culture alongside Gen Z fluency with modern platforms. As a result, many find that the Zillennial label captures their dual digital identity more accurately than either adjacent generation." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(H3, { children: "Other notable micro-generations" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Paragraph, { children: [
      "Similarly, people born between 1965 and 1969 are sometimes called ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Generation Jones" }),
      " \u2014 named for the experience of being promised Boomer idealism but coming of age just as that optimism faded. Additionally, those born after 2025 are beginning to be labelled ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Generation Beta" }),
      ", though the cultural contours of that cohort remain entirely undefined."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(H2, { children: "Why Generational Labels Are Useful \u2014 and Where They Fail" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Paragraph, { children: "Generational labels work best as shorthand for shared economic contexts. For instance, a Millennial who grew up in rural Maharashtra and one who grew up in Manhattan both navigated the same post-2008 labour market. They adopted the same social media platforms. Moreover, they confronted the same global pandemic at the same life stage. The label captures those macro-level convergences even when individual experiences diverge dramatically." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Quote, { children: '"Generations are not defined by birth years alone \u2014 they are defined by the events that marked their coming of age."' }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Paragraph, { children: "Conversely, labels fail when applied as stereotypes. Not every Boomer owns property. Not every Millennial is financially struggling. Furthermore, generational identity intersects with class, geography, and culture in ways that simple birth-year brackets cannot capture." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(H2, { children: "Generational Identity in India \u2014 A Different Historical Lens" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Paragraph, { children: "Western generational frameworks do not map cleanly onto the Indian experience. For instance, India's economic liberalisation of 1991 was a more significant cultural rupture for many Indians than any global event in the standard Western generational timeline. Indians born before 1985 grew up in a largely socialist, licence-raj economy. Consequently, consumer choice, private television, and global brands arrived as sudden, transformative forces rather than gradual background shifts." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Paragraph, { children: "Additionally, the mobile internet revolution arrived in India later but accelerated faster \u2014 Jio's 2016 launch compressed a decade of digital adoption into two years. As a result, Indian Millennials and early Gen Z experienced a uniquely compressed version of the digital transition. Therefore, generational identity in India is arguably better defined by economic inflection points than by the cultural touchstones of the Western framework." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Paragraph, { children: [
      "To discover your generation alongside other personal life stats \u2014 ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_router_dom7.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "heartbeat count" }),
      ", ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_router_dom7.Link, { to: "/blog/how-many-full-moons-in-a-lifetime", className: "text-primary underline", children: "full moons lived" }),
      ", and ",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_router_dom7.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "life clock time" }),
      " \u2014 use our calculator at whatismyage.me."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CtaBox, { title: "Discover your generation \u2014 and much more", children: "Enter your date of birth to see your generational identity, heartbeat count, full moons, and personalised life card." }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RelatedPosts, { posts: related2 }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BackToBlog, {})
  ] });
};
var GenerationGuide_default = GenerationGuide;

// src/pages/blog/AgeInDays.tsx
var import_react_router_dom8 = require("react-router-dom");
var import_jsx_runtime16 = require("react/jsx-runtime");
var meta3 = {
  title: "How to Calculate Your Exact Age in Days | whatismyage.me",
  description: "Learn how to calculate your exact age in days, account for leap years correctly, and what milestone day counts mean \u2014 or find your number instantly.",
  canonical: "https://whatismyage.me/blog/how-to-calculate-age-in-days",
  headline: "How to Calculate Your Exact Age in Days"
};
var steps = [
  "Write down your full date of birth \u2014 day, month, and year precisely.",
  "Multiply your completed years by 365 to get a base figure.",
  "Count every leap year between your birth year and today. Add one day for each.",
  "Count the days from 1 January of the current year to today's date.",
  "Subtract the days that passed before your birthday in your birth year.",
  "Add all figures together for your total days alive."
];
var related3 = [
  { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
  { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
  { tag: "Philosophy", title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained", href: "/blog/what-is-a-life-clock" },
  { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" }
];
var AgeInDays = () => {
  useArticleMeta(meta3);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(BackToBlog, {}),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: "How to Calculate Your Exact Age in Days" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Lead, { children: "Most people know their age in years. However, your age in days is a fundamentally different kind of number \u2014 precise, personal, and surprisingly difficult to calculate correctly because of leap years." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "If you were born on 15 March 1988 and today is 20 April 2026, your age in years is 38. However, your exact age in days is 13,915 \u2014 not 13,870 (which is simply 38 \xD7 365). The difference comes entirely from leap years. Moreover, most online calculators get this wrong when accounting for partial years." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(StatBox, { number: "13,915", label: "Exact days alive for someone born 15 March 1988, as of 20 April 2026 \u2014 accounting for all leap years" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H2, { children: "Step-by-Step: How to Calculate Age in Days from Date of Birth" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "The manual method requires several sequential steps. Furthermore, each step builds on the previous, so an error early on compounds throughout the calculation." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "space-y-4 my-7", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-1", children: index + 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: step })
    ] }, step)) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(FormulaBox, { title: "Quick estimate formula for days alive", children: [
      "Days alive \u2248 (completed years \xD7 365) + leap years lived + days since last birthday",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
      "Example: (38 \xD7 365) + 10 leap days + 36 days = ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-foreground", children: "~13,916" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H2, { children: "Why Leap Year Calculation Makes Age in Days Difficult" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "A solar year is not exactly 365 days. In fact, it is ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "365.2422 days" }),
      ". Consequently, without any correction, our calendar would drift by approximately 6 hours per year. Over a century, that drift would shift seasons by 25 days \u2014 January would arrive in what we currently call early December."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "The leap year system corrects for this. Therefore, every year divisible by 4 gains an extra day \u2014 except century years, which must additionally be divisible by 400. As a result, the year 2000 was a leap year, but 1900 was not. Between 1988 and 2026, there are precisely ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "10 leap years" }),
      ": 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, and 2024."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Quote, { children: "If you were born on 29 February \u2014 a leap day \u2014 your calendar birthday appears only every four years. Nevertheless, you still age one day every day regardless." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H3, { children: "Why most manual calculations get the wrong answer" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "The most common error is treating every year as exactly 365 days. Furthermore, many people forget that the birth year itself may be a leap year, adding an additional complication. Similarly, calculating the days in the current partial year requires knowing whether February has 28 or 29 days. Consequently, even careful manual calculation frequently produces a result that is several days off." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H2, { children: "Milestone Days Alive Worth Knowing" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "Certain day counts carry particular cultural and personal significance. Moreover, knowing them in advance gives you something to mark and celebrate that most people around you will never notice." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "Your ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "5,000th day" }),
      " alive falls at approximately age 13 years and 8 months \u2014 deep in secondary school for most people. Furthermore, your ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "10,000th day" }),
      " arrives at roughly age 27 years and 5 months \u2014 a milestone many people find surprisingly meaningful when they encounter it."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "Additionally, your ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "15,000th day" }),
      " falls at approximately age 41, and your ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "20,000th day" }),
      " at around age 54. In fact, some people use these 5,000-day intervals as personal review points \u2014 occasions to reflect on the past five thousand days and set intentions for the next."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H3, { children: "The 10,000-day milestone" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "The 10,000-day birthday has become particularly popular online. Moreover, it falls in the late twenties for most people \u2014 a natural inflection point between early adulthood and the thirties. Consequently, it is often framed as a prompt to take stock of what has been accomplished and what remains undone. Furthermore, the number is large enough to feel substantial but small enough to make the remaining thousands feel consequential." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H2, { children: "From Days to Seconds, Minutes, and Heartbeats" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "Once you know your exact age in days, every other unit of time follows directly. Specifically, multiply by 24 for hours, by 1,440 for minutes, and by 86,400 for seconds. As a result, a 38-year-old has lived approximately ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "1.2 billion seconds" }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "Interestingly, that figure is closely comparable to their ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom8.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "total heartbeat count of 1.43 billion" }),
      ". Therefore, your heart has beaten slightly more times than the number of seconds you have been alive \u2014 a genuinely surprising relationship between two seemingly unrelated body clocks."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Paragraph, { children: [
      "Similarly, converting days to ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom8.Link, { to: "/blog/how-many-full-moons-in-a-lifetime", className: "text-primary underline", children: "full moons" }),
      " provides another satisfying unit: divide your total days by 29.53. Furthermore, you can find ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom8.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "what time it currently is on your life clock" }),
      " \u2014 your age expressed as a moment in a 24-hour day."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(H2, { children: "Why Your Age in Days Matters Beyond Curiosity" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "There are practical contexts where day-precise age calculations genuinely matter. Specifically, paediatricians track newborn development in days during the critical first weeks of life. Moreover, some legal systems and financial contracts specify eligibility in calendar days rather than years. Additionally, certain insurance products and pension calculations use day-level precision." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Paragraph, { children: "For most people, however, the appeal is simpler. Your age in years changes once annually \u2014 a sudden jump that arrives and disappears. Conversely, your age in days increments quietly every morning at midnight. It is a continuous, honest measure of time lived. As a result, it makes time feel real in a way that years, somehow, do not." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CtaBox, { title: "Find your exact age in days instantly", children: "Enter your date of birth at whatismyage.me \u2014 get your precise day count, heartbeats, full moons, and shareable life card." }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RelatedPosts, { posts: related3 }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(BackToBlog, {})
  ] });
};
var AgeInDays_default = AgeInDays;

// src/pages/blog/LifeClock.tsx
var import_react_router_dom9 = require("react-router-dom");
var import_jsx_runtime17 = require("react/jsx-runtime");
var meta4 = {
  title: "What Is a Life Clock? Your Age as a 24-Hour Day | whatismyage.me",
  description: "If your life were a 24-hour day, what time is it right now? The life clock converts your age into a clock time \u2014 a powerful way to understand your time and what remains.",
  canonical: "https://whatismyage.me/blog/what-is-a-life-clock",
  headline: "What Is a Life Clock? Your Age as a 24-Hour Day Explained"
};
var clock = [
  ["12:00 AM \u2013 3:00 AM", "Ages 0\u201310 \xB7 deep night", "Childhood. The world is entirely new and endlessly large."],
  ["3:00 AM \u2013 6:00 AM", "Ages 10\u201320 \xB7 pre-dawn", "Adolescence. The world is stirring. Identity is forming."],
  ["6:00 AM \u2013 9:00 AM", "Ages 20\u201330 \xB7 early morning", "The day is beginning in earnest. Everything feels possible."],
  ["9:00 AM \u2013 12:00 PM", "Ages 30\u201340 \xB7 mid-morning", "Building momentum. Hitting your stride. Making things real."],
  ["12:00 PM \u2013 3:00 PM", "Ages 40\u201350 \xB7 midday", "The peak of the day. Full capacity. Experience and energy aligned."],
  ["3:00 PM \u2013 6:00 PM", "Ages 50\u201360 \xB7 golden afternoon", "Experienced, purposeful, unhurried. The light is exceptional."],
  ["6:00 PM \u2013 9:00 PM", "Ages 60\u201370 \xB7 evening", "Reflection. Depth. The most beautiful hour of the day for many."],
  ["9:00 PM \u2013 12:00 AM", "Ages 70\u201380+ \xB7 night", "The day's work nearly done. Stars fully visible. Quiet satisfaction."]
];
var related4 = [
  { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
  { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
  { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" },
  { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
];
var LifeClock = () => {
  useArticleMeta(meta4);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BackToBlog, {}),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: "What Is a Life Clock? Your Age as a 24-Hour Day Explained" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Lead, { children: "Imagine your entire life \u2014 from birth to its natural end \u2014 compressed into a single 24-hour day. Midnight is birth. The following midnight is the end. Consequently, the question becomes simple and quietly profound: what time is it for you right now?" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Paragraph, { children: "This is the life clock. Moreover, it is one of the most powerful and disorienting ways to understand exactly where you are in your own story. Furthermore, it replaces the abstract weight of years with something every human understands instantly: a time of day." }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-foreground rounded-2xl p-7 my-7 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-5xl font-bold text-primary leading-none", children: "11:23 AM" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-xs text-background/70 mt-3", children: "Life clock time for a 38-year-old assuming an 80-year lifespan \u2014 late morning, long afternoon ahead" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H2, { children: "How to Calculate Your Life Clock Time from Your Age" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Paragraph, { children: "The calculation is elegantly simple. Specifically, divide your current age by your assumed lifespan to produce a decimal fraction. Subsequently, multiply that fraction by 24 to convert it into hours. Finally, convert the decimal remainder to minutes." }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "For a 38-year-old assuming 80 years: 38 \xF7 80 = 0.475. Multiply by 24 = 11.4 hours. The 0.4 remainder converts to 24 minutes. Therefore, life clock time: ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "11:24 AM" }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(FormulaBox, { title: "Life clock formula", children: [
      "Life clock time = (current age \xF7 assumed lifespan) \xD7 24 hours",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
      "Example: (38 \xF7 80) \xD7 24 = 11.4 hours = ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { className: "text-foreground", children: "11:24 AM" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
      "At lifespan 90: (38 \xF7 90) \xD7 24 = 10:08 AM \xA0|\xA0 At lifespan 70: (38 \xF7 70) \xD7 24 = 13:01 PM"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "Notably, adjusting the assumed lifespan changes everything. Moreover, this makes the life clock a useful tool for examining your assumptions about ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "time left to live" }),
      " \u2014 not with morbidity, but with clarity. Additionally, the calculation is worth revisiting at different assumed lifespans to see how dramatically the time changes."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H2, { children: "What Every Hour of the Life Clock Represents" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "grid sm:grid-cols-2 gap-3 my-7", children: clock.map(([time, age, text]) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "font-bold text-primary", children: time }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-xs text-muted-foreground my-1", children: age }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-sm italic text-foreground/75 leading-relaxed", children: text })
    ] }, time)) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H2, { children: "Why the Life Clock Changes How You Think About Age and Time" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Paragraph, { children: "The life clock works precisely because it strips away social expectations. Saying you are 38 carries a specific cultural weight \u2014 milestones hit or missed, comparisons to peers, a sense of being on or off some imagined schedule. Conversely, saying it is 11:23 AM in your life carries none of that baggage." }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Paragraph, { children: "Furthermore, we all understand intuitively that 11 AM is not late. In fact, it is mid-morning. The day is clearly in full swing, and there is a long afternoon, evening, and night still ahead. As a result, the same information \u2014 being 38 years old \u2014 registers entirely differently when expressed as a time of day rather than a number of years." }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Quote, { children: '"The shortness of life is not a problem to be solved. It is a fact to be lived with \u2014 and lived well." \u2014 Oliver Burkeman, Four Thousand Weeks' }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H2, { children: "The Life Clock in Stoic Philosophy and Modern Thought" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Paragraph, { children: "The metaphor of life as a single day is ancient. Specifically, ancient Greek philosophers spoke of the morning, noon, and evening of a human life. Furthermore, Sophocles opened his masterwork Oedipus Rex with the riddle of a creature who walks on four legs in the morning, two at noon, and three in the evening \u2014 a riddle whose answer is a human being." }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "Moreover, the Stoics used the shortness of life as a central philosophical prompt. Seneca's ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("em", { children: "Letters" }),
      " return repeatedly to this theme: time is the only resource that cannot be recovered once spent. Therefore, the question is not how much time you have, but what you do with it. Consequently, the life clock functions not as a countdown but as a compass \u2014 a directional tool rather than a threat."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H3, { children: "Oliver Burkeman and the four thousand weeks framework" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "In his widely read book ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("em", { children: "Four Thousand Weeks" }),
      ", philosopher Oliver Burkeman makes a similar observation. Specifically, he argues that a human life of 80 years contains approximately 4,000 weeks \u2014 a number small enough to hold in your mind, large enough to matter. Furthermore, he suggests that acknowledging finitude is not depressing but liberating. As a result, accepting that you cannot do everything frees you to choose what actually matters. The life clock embodies exactly this insight."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H2, { children: "Life Clock Time Versus Life Expectancy Calculators" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "A conventional ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "life expectancy calculator" }),
      " estimates how many years you are likely to live based on health data, geography, and lifestyle factors. However, the life clock works differently. It does not predict. Instead, it reframes. Moreover, it takes whatever lifespan you choose \u2014 80, 90, 100 \u2014 and shows you where in that arc you currently stand."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "Additionally, the life clock is not about ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "time left to live" }),
      " in a morbid sense. Rather, it is about understanding the shape of a life in progress. Similarly, it is about recognising that 11 AM is not late \u2014 and that the afternoon, whenever it arrives, still contains enormous possibility."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(H2, { children: "How Your Life Clock Connects to Your Other Age Stats" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Paragraph, { children: [
      "The life clock is one of several powerful ways to reframe what your age actually means. Furthermore, your ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom9.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "heartbeat total" }),
      " shows the biological machinery running behind those years. Additionally, your ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom9.Link, { to: "/blog/how-many-full-moons-in-a-lifetime", className: "text-primary underline", children: "full moon count" }),
      " provides a poetic, astronomical measure of time. Moreover, your ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom9.Link, { to: "/blog/how-to-calculate-age-in-days", className: "text-primary underline", children: "exact age in days" }),
      " gives you the raw, unvarnished total. Together, these numbers paint a portrait of a life that a single number in years can never fully convey."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CtaBox, { title: "What time is it on your life clock?", children: "Enter your date of birth at whatismyage.me to find your exact life clock time \u2014 plus heartbeats, full moons, days alive, and your shareable life card." }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(RelatedPosts, { posts: related4 }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BackToBlog, {})
  ] });
};
var LifeClock_default = LifeClock;

// src/pages/blog/BirthWeekday.tsx
var import_react_router_dom10 = require("react-router-dom");
var import_jsx_runtime18 = require("react/jsx-runtime");
var CANONICAL2 = "https://whatismyage.me/blog/what-day-of-the-week-was-i-born";
var TITLE2 = "What Day of the Week Were You Born? | whatismyage.me";
var DESC2 = "Find out what day of the week you were born \u2014 and what it means. Discover the Doomsday algorithm, birth day personality theories, and weekday statistics.";
var HEADLINE = "What Day of the Week Were You Born? And Why It Matters";
var StatCard2 = ({ n, l }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4 text-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-2xl font-bold text-primary", children: n }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mt-1", children: l })
] });
var BirthWeekday = () => {
  useArticleMeta({ title: TITLE2, description: DESC2, canonical: CANONICAL2, headline: HEADLINE });
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_router_dom10.Link, { to: "/blog", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "\u2190 All posts" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: HEADLINE }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Lead, { children: "Most people know their birth date. However, far fewer know what day of the week they arrived on. Furthermore, the method for calculating it reveals something genuinely fascinating about how our calendar works." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Your birth weekday is more than a piece of trivia. Moreover, it connects to a rich tradition of perpetual calendars, mathematical algorithms, and cultural folklore stretching back centuries. Additionally, once you learn the calculation method, you will be able to work out the weekday of any date in history \u2014 without a computer." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      StatBox,
      {
        number: "1 in 7",
        label: "Probability of being born on any given weekday \u2014 births are nearly equally distributed across all seven days"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { children: "How to Calculate What Day of the Week You Were Born" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Paragraph, { children: [
      "The most famous method for calculating weekdays from any date is the ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("strong", { children: "Doomsday algorithm" }),
      ", developed by British mathematician John Conway in 1973. Moreover, Conway could famously perform this calculation entirely in his head in under two seconds for any date in history."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "The Doomsday algorithm works by identifying anchor dates \u2014 called doomsdays \u2014 that always fall on the same weekday in any given year. Consequently, once you know the doomsday for a particular year, you can calculate any date in that year by counting forward or backward from the nearest anchor." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FormulaBox, { title: "Simpler method: Zeller's formula (approximate)", children: "For most people, the easiest approach is: take your birth year, divide by 4, add the result to the year, then apply a table of month values. However, this involves several steps. As a result, most people simply use an online day-of-week calculator \u2014 or whatismyage.me, which shows your birth weekday instantly." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { children: "What Day of the Week Sees the Most Births?" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Birth statistics reveal a notable pattern. Specifically, fewer babies are born on weekends than on weekdays. Furthermore, Tuesday and Wednesday consistently show the highest birth rates in most countries \u2014 a direct result of planned caesarean sections and induced labours being scheduled on working days." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "grid grid-cols-2 gap-3 my-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(StatCard2, { n: "Tuesday", l: "Most common birth day" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(StatCard2, { n: "Sunday", l: "Least common birth day" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(StatCard2, { n: "Saturday", l: "Second least common" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(StatCard2, { n: "Wednesday", l: "Second most common" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Nevertheless, if you were born before the widespread adoption of elective caesarean sections \u2014 roughly before 1980 \u2014 your birth day was considerably more random. Consequently, older generations show a much flatter distribution across all seven days." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { children: "The Folklore of Birth Weekdays \u2014 Monday's Child and Beyond" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Paragraph, { children: [
      "The most famous expression of birth-day personality theory is the English nursery rhyme",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("em", { children: "Monday's Child" }),
      ", which dates to at least the 1830s. Moreover, it assigns a distinct character to each day of the week:"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Note, { children: "Monday's child is fair of face. Tuesday's child is full of grace. Wednesday's child is full of woe. Thursday's child has far to go. Friday's child is loving and giving. Saturday's child works hard for a living. And the child born on the Sabbath Day is bonny and blithe and good and gay." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Of course, no scientific evidence supports these personality assignments. Nevertheless, the rhyme persists because it captures something humans instinctively want to believe \u2014 that the circumstances of birth carry meaning. Furthermore, similar traditions exist across cultures, from the Thai system of birth-day colours to Japanese associations between weekdays and character traits." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H3, { children: "Thai birth day colours" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "In Thailand, each day of the week has a traditional associated colour derived from Hindu astrology. Specifically, Monday is yellow, Tuesday is pink, Wednesday is green, Thursday is orange, Friday is blue, Saturday is purple, and Sunday is red. Moreover, King Bhumibol Adulyadej of Thailand was born on a Monday and was frequently depicted wearing yellow \u2014 a tradition his subjects adopted as a mark of respect. As a result, yellow became associated with royalty in modern Thai culture." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { children: "Famous People and Their Birth Weekdays" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: `Every day of the week has produced remarkable individuals. For instance, Barack Obama was born on a Friday. Similarly, Mahatma Gandhi was born on a Saturday \u2014 the day the rhyme assigns to those who "work hard for a living." Furthermore, Albert Einstein was born on a Friday, as was Nikola Tesla. Notably, many of history's most celebrated scientists seem to cluster around the middle of the week.` }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "However, birth weekday appears to have no measurable effect on life outcomes. Consequently, the associations remain firmly in the realm of cultural interest rather than predictive science. The real value of knowing your birth weekday is purely personal \u2014 it connects you to the specific moment in time when you entered the world." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { children: "What the Gregorian Calendar Tells Us About Birth Dates" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Paragraph, { children: [
      "The ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("strong", { children: "Gregorian calendar" }),
      " was introduced in October 1582 by Pope Gregory XIII as a correction to the Julian calendar. Furthermore, it is the calendar system used in virtually every country today. Additionally, the Gregorian calendar's leap year rule \u2014 adding a day every four years with exceptions at century marks \u2014 is what makes weekday calculation across centuries complicated."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Specifically, the calendar repeats its weekday pattern every 400 years. Therefore, the year 2000 had the same weekday structure as 1600 and will repeat again in 2400. As a result, the Doomsday algorithm exploits this 400-year cycle to perform rapid mental calculations for any date in any year." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H3, { children: "What about dates before 1582?" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Calculating the weekday for dates before the Gregorian calendar requires knowing whether the Julian calendar was in use. Moreover, the Julian and Gregorian calendars drift by one day every 128 years \u2014 meaning a date listed as 15 March 1482 in historical records falls on a different weekday than a Gregorian 15 March 1482 would. Consequently, historians typically specify which calendar system they are using when referencing pre-1582 dates." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { children: "Your Birth Weekday \u2014 One More Thread in the Tapestry" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Paragraph, { children: "Your birth weekday is a small but vivid detail. Moreover, it situates your arrival in a specific moment of the week \u2014 the ordinary rhythm of human life. In fact, knowing that you were born on a Tuesday morning or a Friday evening makes the abstract date on your birth certificate feel considerably more real and personal." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Paragraph, { children: [
      "Additionally, it pairs naturally with the other numbers that define your time on Earth. Your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_router_dom10.Link, { to: "/blog/how-to-calculate-age-in-days", className: "text-primary underline", children: "exact age in days" }),
      ", your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_router_dom10.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "lifetime heartbeat count" }),
      ", and your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_router_dom10.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "life clock time" }),
      " ",
      "all tell different parts of the same story. Furthermore, they are all available at whatismyage.me from a single date of birth."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CtaBox, { title: "Find out what day of the week you were born", children: "Enter your date of birth at whatismyage.me \u2014 your birth weekday, age in days, heartbeats, and life clock time all calculated instantly." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      RelatedPosts,
      {
        posts: [
          { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
          { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
          { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(BackToBlog, {})
  ] });
};
var BirthWeekday_default = BirthWeekday;

// src/pages/blog/SecondsOld.tsx
var import_react_router_dom11 = require("react-router-dom");
var import_jsx_runtime19 = require("react/jsx-runtime");
var CANONICAL3 = "https://whatismyage.me/blog/how-many-seconds-old-am-i";
var TITLE3 = "How Many Seconds Old Are You Right Now? | whatismyage.me";
var DESC3 = "Find out how many seconds old you are \u2014 and what that number reveals about time, the billion-second milestone, and how seconds compare to heartbeats.";
var HEADLINE2 = "How Many Seconds Old Are You Right Now?";
var StatCard3 = ({ n, l }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4 text-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-2xl font-bold text-primary", children: n }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mt-1", children: l })
] });
var SecondsOld = () => {
  useArticleMeta({ title: TITLE3, description: DESC3, canonical: CANONICAL3, headline: HEADLINE2 });
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_router_dom11.Link, { to: "/blog", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "\u2190 All posts" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: HEADLINE2 }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Lead, { children: "Your age in years is a round, comfortable number. However, your age in seconds is something else entirely \u2014 a figure so large it barely fits in your head. Furthermore, what it reveals about time is genuinely startling." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Paragraph, { children: [
      "A 38-year-old has lived approximately ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "1.2 billion seconds" }),
      ". Not thousand. Not million. Billion. Moreover, that number is ticking upward at this exact moment \u2014 one count per second, relentlessly, without pause. As a result, seconds are arguably the most honest unit of age we have. They never round down."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      StatBox,
      {
        number: "1,201,996,800",
        label: "Approximate seconds lived by someone born 15 March 1988, as of 20 April 2026"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H2, { children: "How to Calculate Your Age in Seconds from Your Date of Birth" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "The calculation builds from your age in days \u2014 which is itself the starting point for all time-based age conversions. Furthermore, once you have your exact days alive, the remaining steps are straightforward multiplication:" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grid grid-cols-2 gap-3 my-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StatCard3, { n: "\xD7 24", l: "Days \u2192 hours" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StatCard3, { n: "\xD7 60", l: "Hours \u2192 minutes" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StatCard3, { n: "\xD7 60", l: "Minutes \u2192 seconds" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StatCard3, { n: "\xD7 86,400", l: "Days \u2192 seconds direct" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "Therefore, your age in seconds equals your total days alive multiplied by 86,400. For a 38-year-old with 13,915 days alive: 13,915 \xD7 86,400 = approximately 1.20 billion seconds. However, this figure changes every single second. Consequently, any number you calculate is outdated before the ink dries." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(FormulaBox, { title: "Age in seconds \u2014 quick reference by age", children: [
      "Age 20 \u2192 ~631 million seconds",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
      "Age 30 \u2192 ~946 million seconds",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
      "Age 38 \u2192 ~1.20 billion seconds",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
      "Age 50 \u2192 ~1.58 billion seconds",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
      "Age 80 \u2192 ~2.52 billion seconds"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H2, { children: "When Do You Turn 1 Billion Seconds Old?" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Paragraph, { children: [
      "This is the calculation that stops most people cold. Specifically, your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "1 billion second birthday" }),
      " falls at approximately",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "31 years and 251 days" }),
      " \u2014 just shy of age 32. Moreover, it is a milestone that passes quietly for most people, entirely unnoticed."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "The billion-second mark has become something of a cultural phenomenon online. Furthermore, people celebrate it with small parties, social media posts, and gifts. Additionally, it makes an excellent occasion because it falls in adulthood \u2014 old enough to appreciate it, young enough to be meaningfully celebrated." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Note, { children: "Your 1 billion second birthday falls at age 31 years, 8 months, and approximately 17 days. Your 2 billion second birthday falls at age 63 years and 3 months \u2014 a milestone that only roughly 60% of people will reach." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H3, { children: "Other remarkable second milestones" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "Your 500 million second milestone arrives at approximately age 15 years and 10 months \u2014 squarely in adolescence. Conversely, your 1.5 billion second mark falls at around age 47 and a half. Moreover, reaching 2 billion seconds places you in your early 60s \u2014 a genuine achievement worth acknowledging." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H2, { children: "How Does Age in Seconds Compare to Your Heartbeat Count?" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "This comparison is one of the most surprising in all of personal numerology. Specifically, a 38-year-old has lived approximately 1.20 billion seconds. Meanwhile, their heart has beaten approximately 1.43 billion times during the same period. As a result, the heart has beaten slightly more times than the number of seconds elapsed \u2014 roughly 1.2 beats per second on average, which maps almost perfectly onto a resting heart rate of 72 beats per minute." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Paragraph, { children: [
      "Furthermore, this relationship is not coincidental. It emerges directly from the fact that the average resting heart rate of 72 BPM is itself derived from a second-based measurement. Consequently, the two figures will always remain in this approximate 1.2:1 ratio throughout a human life. For more on the heartbeat count, see our full guide on",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_router_dom11.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "how many heartbeats a human has in a lifetime" }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H2, { children: "What 1.2 Billion Seconds Feels Like \u2014 The Psychology of Large Numbers" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: 'Human intuition is poorly equipped to grasp very large numbers. Moreover, research in cognitive psychology consistently shows that people treat numbers above a few thousand as effectively equivalent \u2014 all "big." Consequently, the difference between 1 million and 1 billion feels small emotionally even though it represents a factor of one thousand.' }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "Therefore, one useful technique is to translate the number into something concrete. For instance, 1.2 billion seconds is enough time to watch every film ever made \u2014 multiple times. Additionally, it is more than enough time to read every book in a large public library. Furthermore, it is longer than the entire history of the Roman Empire from founding to fall, measured in seconds." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H3, { children: "The difference between a million and a billion seconds" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Paragraph, { children: [
      "One million seconds is approximately ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "11.6 days" }),
      ". One billion seconds is approximately ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "31.7 years" }),
      '. Consequently, a billion is not "a really big million" \u2014 it is a qualitatively different scale of time. Similarly, this is why phrases like "a billion dollar company" and "a million dollar house" describe entirely different magnitudes of wealth, even though the words sound similar.'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H2, { children: "Age in Minutes and Hours \u2014 the Middle Ground" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Paragraph, { children: [
      "Between years and seconds lie two intermediate units that also produce striking numbers. Specifically, a 38-year-old has lived approximately ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "20 million minutes" }),
      ". Moreover, they have lived approximately ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "333,000 hours" }),
      ". However, 333,000 hours sounds considerably less impressive than 1.2 billion seconds \u2014 which is precisely why seconds are the most psychologically impactful unit."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "Additionally, age in minutes carries its own milestone logic. Your 10 million minute birthday arrives at approximately age 19 years and 1 month. Subsequently, your 20 million minute milestone falls in your late 30s. These numbers work well as social conversation pieces precisely because they are genuinely surprising to most people." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(H2, { children: "Why Measuring Age in Seconds Changes How You Think About Time" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Paragraph, { children: "When you know your age in seconds, time stops being abstract. Moreover, every second genuinely matters in a way that years obscure. Specifically, the gap between 1,200,000,000 seconds and 1,200,000,001 is the same as the gap between any two consecutive breaths. Furthermore, both are equally real and equally irreversible." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Paragraph, { children: [
      "This is, ultimately, the same insight that",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_router_dom11.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "the life clock metaphor" }),
      " ",
      "delivers from a different direction. Similarly,",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_router_dom11.Link, { to: "/blog/how-to-calculate-age-in-days", className: "text-primary underline", children: "knowing your age in days" }),
      " ",
      "creates the same effect at a different scale. As a result, each of these measures of time tells the same fundamental truth: every unit counts, and none comes back."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CtaBox, { title: "How many seconds old are you right now?", children: "Enter your date of birth at whatismyage.me \u2014 your age in seconds, heartbeats, full moons, days alive, all calculated instantly." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      RelatedPosts,
      {
        posts: [
          { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
          { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
          { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(BackToBlog, {})
  ] });
};
var SecondsOld_default = SecondsOld;

// src/pages/blog/BirthdayTwins.tsx
var import_react_router_dom12 = require("react-router-dom");
var import_jsx_runtime20 = require("react/jsx-runtime");
var CANONICAL4 = "https://whatismyage.me/blog/birthday-twins-famous-people-born-on-your-birthday";
var TITLE4 = "Birthday Twins: Famous People Born on Your Birthday | whatismyage.me";
var DESC4 = "Discover who shares your birthday \u2014 the science of birthday coincidences, famous birthday twins, and what it actually means to share a birth date with a celebrity.";
var HEADLINE3 = "Birthday Twins: Famous People Born on Your Birthday";
var StatCard4 = ({ n, l }) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4 text-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "text-2xl font-bold text-primary", children: n }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mt-1", children: l })
] });
var BirthdayTwins = () => {
  useArticleMeta({ title: TITLE4, description: DESC4, canonical: CANONICAL4, headline: HEADLINE3 });
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom12.Link, { to: "/blog", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "\u2190 All posts" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: HEADLINE3 }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Lead, { children: "Somewhere in the world, several thousand people share your exact birth date. Furthermore, among the billions who have ever lived, dozens of famous figures arrived on the same day of the same month as you \u2014 just in different years. This is the phenomenon of birthday twins." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "Moreover, the idea that you share a calendar date with a celebrity, historical figure, or cultural icon is one of those personal facts that tends to stick. Additionally, it creates an instant, irrational sense of connection \u2014 a feeling that the cosmos, however accidentally, placed you in the same register of time as someone remarkable." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { children: "What Is a Birthday Twin? Definition and Variations" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Paragraph, { children: [
      "A ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "birthday twin" }),
      " \u2014 also called a birthday double or calendar twin \u2014 is someone who shares your birth month and day, regardless of year. Consequently, you might share a birthday with a person born decades before or after you. Furthermore, the more precise variant \u2014 sharing both date ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("em", { children: "and" }),
      " year \u2014 is sometimes called a ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "time twin" }),
      ". This is considerably rarer, as it narrows the field dramatically."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "Additionally, sharing birth date and year does not mean sharing the same natal chart in astrology. Specifically, the houses of an astrological chart depend on time and place of birth \u2014 not just date. Therefore, two people born on the same day in the same year but different cities will have notably different charts, even if their sun signs are identical." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { children: "The Probability of Sharing a Birthday With a Famous Person" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Paragraph, { children: [
      "The ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "birthday paradox" }),
      " is one of the most counterintuitive results in probability theory. Specifically, in a group of just 23 people, there is a 50% chance that two people share a birthday. Moreover, in a group of 70, the probability rises above 99.9%."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "grid grid-cols-2 gap-3 my-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(StatCard4, { n: "23", l: "People needed for 50% chance of shared birthday" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(StatCard4, { n: "70", l: "People needed for 99.9% chance" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(StatCard4, { n: "~22 million", l: "People alive today sharing your birth date" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(StatCard4, { n: "365", l: "Days in a year \u2014 your birthday is 1 of them" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "Furthermore, given that several billion humans have lived and died across recorded history, the probability of any single calendar date containing at least one famous person is essentially 100%. Consequently, finding your famous birthday twins is not a matter of luck. It is simply a matter of looking." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H3, { children: "Why does the birthday paradox feel so surprising?" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: 'The paradox arises because humans intuitively compare each new person to themselves, rather than to each other. Specifically, we think: "What are the chances this person shares MY birthday?" \u2014 which is 1 in 365. However, in a group of 23, the comparison is between every possible pair \u2014 and there are 253 possible pairs among 23 people. As a result, the cumulative probability quickly approaches and then passes 50%.' }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { children: "Famous Birthday Twins \u2014 Remarkable Examples Across History" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "Some birth dates have an almost uncanny concentration of remarkable people. For instance, 14 March \u2014 Pi Day \u2014 is the birth date of both Albert Einstein and Stephen Hawking. Moreover, both were theoretical physicists who fundamentally changed our understanding of the universe. Additionally, astronomer Giovanni Schiaparelli was also born on 14 March. As a result, 3/14 has become something of a sacred date in scientific culture." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "Similarly, 15 March shares a remarkable range of birthday twins: Stephen Curry, Sushmita Sen, Aamir Khan, Eva Longoria, and musician will.i.am all share this date across different birth years. Furthermore, 15 March also corresponds to the Ides of March \u2014 the date of Julius Caesar's assassination in 44 BC \u2014 giving it considerable historical weight regardless of anyone's birth year." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Quote, { children: `"Coincidence is God's way of remaining anonymous." \u2014 Albert Einstein (born 14 March 1879)` }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { children: "Does Sharing a Birthday Mean Anything? The Science and the Feeling" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "From a scientific standpoint, sharing a birth date with a famous person has no causal significance whatsoever. Nevertheless, psychologically it matters considerably. Moreover, research in social psychology consistently shows that perceived similarity \u2014 even trivial similarity \u2014 increases liking and a sense of connection between people." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Paragraph, { children: [
      "This is known as the ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "similarity-attraction effect" }),
      ". Specifically, people feel warmer toward strangers who share minor characteristics with them \u2014 favourite colours, hometowns, birth dates. Consequently, learning that you share a birthday with Stephen Curry genuinely makes most basketball fans feel a small, irrational glow. Furthermore, this effect is not shallow or silly \u2014 it is a fundamental feature of human social cognition."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H3, { children: "Astrological significance of birthday twins" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Paragraph, { children: [
      "In ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "Vedic astrology" }),
      " and Western astrology alike, sharing a birth date is considered meaningful \u2014 though the degree of significance depends heavily on whether the time and place of birth also match. Specifically, in Vedic astrology, the ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("em", { children: "kundali" }),
      " (birth chart) depends on precise birth time and location. Therefore, two people born on the same date but different times may have significantly different charts and predicted life paths."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Paragraph, { children: [
      "Conversely, people born on the same date and year in the same city \u2014 sometimes called",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "cosmic twins" }),
      " or ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "astro twins" }),
      " \u2014 are considered to have near-identical charts. Furthermore, studies of astro twins have shown that despite similar charts, their life outcomes often diverge dramatically \u2014 a finding that astrologers attribute to free will, family environment, and the infinite variety of individual choice."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { children: "How to Find Your Famous Birthday Twins" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "The most reliable approach is to use a dedicated birthday database. Additionally, databases like Wikipedia's list of births by date, or sites such as birthdaytwins.com, organise famous birthdays by day and month. Moreover, these resources cover historical figures, scientists, artists, athletes, musicians, and political leaders \u2014 giving a genuinely wide perspective on who shares your date." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paragraph, { children: "Furthermore, the most meaningful birthday twins tend to be those in your field of interest or admiration. Specifically, a musician discovering they share a birthday with Miles Davis or Ravi Shankar will find this considerably more resonant than learning they share one with an obscure 18th-century politician. As a result, the most rewarding use of birthday twin information is personal and selective rather than exhaustive." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { children: "Birthday Twins at whatismyage.me" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Paragraph, { children: [
      "When you enter your date of birth at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom12.Link, { to: "/", className: "text-primary underline", children: "whatismyage.me" }),
      ", the site automatically identifies famous birthday twins who share your date \u2014 including notable figures from India and globally. Moreover, the selection prioritises the most culturally significant names to maximise that sense of connection. Additionally, your birthday twins appear alongside your heartbeat count,",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom12.Link, { to: "/blog/how-many-full-moons-in-a-lifetime", className: "text-primary underline", children: "full moon total" }),
      ",",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom12.Link, { to: "/blog/what-generation-am-i", className: "text-primary underline", children: "generational identity" }),
      ", and life clock time \u2014 creating a complete personal portrait from a single date of birth."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CtaBox, { title: "Discover your famous birthday twins", children: "Enter your date of birth at whatismyage.me \u2014 find who shares your birthday alongside your heartbeats, full moons, and personalised life card." }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      RelatedPosts,
      {
        posts: [
          { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
          { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
          { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(BackToBlog, {})
  ] });
};
var BirthdayTwins_default = BirthdayTwins;

// src/pages/blog/ZodiacByBirthDate.tsx
var import_react_router_dom13 = require("react-router-dom");
var import_jsx_runtime21 = require("react/jsx-runtime");
var CANONICAL5 = "https://whatismyage.me/blog/how-to-find-your-zodiac-sign-by-birth-date";
var TITLE5 = "How to Find Your Zodiac Sign by Birth Date | whatismyage.me";
var DESC5 = "Find your zodiac sign by birth date \u2014 covering Western, Vedic, and Chinese astrology. Discover what your sun sign, moon sign, and rising sign actually mean.";
var HEADLINE4 = "How to Find Your Zodiac Sign by Birth Date";
var ZODIAC = [
  ["Aries", "21 March \u2013 19 April", "The first sign. Bold, pioneering, competitive. Ruled by Mars."],
  ["Taurus", "20 April \u2013 20 May", "Grounded, sensual, persistent. Ruled by Venus."],
  ["Gemini", "21 May \u2013 20 June", "Curious, adaptable, communicative. Ruled by Mercury."],
  ["Cancer", "21 June \u2013 22 July", "Intuitive, nurturing, deeply emotional. Ruled by the Moon."],
  ["Leo", "23 July \u2013 22 August", "Confident, creative, magnetic. Ruled by the Sun."],
  ["Virgo", "23 August \u2013 22 September", "Analytical, meticulous, service-oriented. Ruled by Mercury."],
  ["Libra", "23 September \u2013 22 October", "Balanced, diplomatic, aesthetic. Ruled by Venus."],
  ["Scorpio", "23 October \u2013 21 November", "Intense, perceptive, transformative. Ruled by Pluto and Mars."],
  ["Sagittarius", "22 November \u2013 21 December", "Philosophical, adventurous, honest. Ruled by Jupiter."],
  ["Capricorn", "22 December \u2013 19 January", "Disciplined, ambitious, patient. Ruled by Saturn."],
  ["Aquarius", "20 January \u2013 18 February", "Innovative, humanitarian, independent. Ruled by Uranus."],
  ["Pisces", "19 February \u2013 20 March", "Imaginative, empathetic, spiritual. Ruled by Neptune."]
];
var ZodiacByBirthDate = () => {
  useArticleMeta({ title: TITLE5, description: DESC5, canonical: CANONICAL5, headline: HEADLINE4 });
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_router_dom13.Link, { to: "/blog", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "\u2190 All posts" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: HEADLINE4 }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Lead, { children: "Your zodiac sign is one of the first things people want to know about you \u2014 and one of the first things you discover when you enter your birth date anywhere. However, most people only know their Western sun sign. Furthermore, there are two other major astrological systems that assign entirely different signs to the same birth date." }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Paragraph, { children: "Additionally, even within Western astrology, your sun sign is only one of three primary placements. Consequently, understanding what your birth date actually tells astrologers requires knowing all three systems \u2014 and which parts of each actually carry meaning." }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H2, { children: "Western Zodiac Sign Dates \u2014 The Complete List by Birth Date" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Paragraph, { children: "Western astrology divides the year into 12 signs based on the sun's position at the moment of birth. Moreover, the dates shift slightly year to year based on the solar calendar. However, the following dates are standard reference points:" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 my-7", children: ZODIAC.map(([name, dates, desc]) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "text-base font-bold text-primary", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "text-xs text-muted-foreground mb-2", children: dates }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm text-foreground/90 leading-relaxed", children: desc })
    ] }, name)) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H2, { children: "What Is a Cusp Sign? Understanding Zodiac Borderlines" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Paragraph, { children: `If you were born within two to three days of a sign boundary, you may have heard you are "on the cusp." For instance, someone born on 22 April might feel caught between Aries and Taurus. However, most mainstream astrologers do not recognise cusp signs as a formal category. Specifically, your sun sign is determined by the exact date and time of the sun's transition \u2014 and you are either fully in one sign or the other.` }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "Nevertheless, cusp-born individuals often find traits of both adjacent signs resonate with them. Moreover, this is partly because your ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "moon sign" }),
      " and ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "rising sign" }),
      " ",
      'add substantial complexity to any birth chart \u2014 meaning the "blended" feeling often comes from those placements rather than any literal cusp effect.'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H2, { children: "Sun Sign, Moon Sign, and Rising Sign \u2014 What's the Difference?" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "Your ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "sun sign" }),
      ` \u2014 the one based purely on birth date \u2014 represents your core identity and conscious self. Additionally, it is the sign most people mean when they say "I'm a Scorpio" or "she's a Leo." However, it is only one of three fundamental placements in a Western birth chart.`
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "Furthermore, your ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "moon sign" }),
      " \u2014 determined by the moon's position at your birth \u2014 governs your emotional inner world, instincts, and subconscious patterns. Consequently, two people with the same sun sign but different moon signs will behave very differently under stress or in intimate relationships. Additionally, calculating your moon sign requires knowing not just your birth date but your birth time, since the moon changes sign every 2.5 days."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "Moreover, your ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "rising sign" }),
      " (or ascendant) \u2014 determined by which zodiac sign was on the eastern horizon at your exact moment and place of birth \u2014 governs your outward personality and first impressions. As a result, many astrologers argue that the rising sign is the most externally visible of the three. Specifically, it shapes how strangers perceive you before they know you well."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H3, { children: "How to find your moon sign and rising sign" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "Calculating moon sign requires your birth date and an approximate birth time. Meanwhile, calculating your rising sign requires both birth time and birth location \u2014 specifically the latitude and longitude of your birthplace. Consequently, a complete birth chart \u2014 sometimes called a ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "natal chart" }),
      " or ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("em", { children: "kundali" }),
      " in Vedic astrology \u2014 requires all three data points. Furthermore, free natal chart calculators are widely available online and produce detailed charts in seconds."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H2, { children: "Vedic Astrology \u2014 A Different Zodiac for the Same Birth Date" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "Western astrology and ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "Vedic astrology" }),
      " (also called Jyotish) use different reference systems. Specifically, Western astrology uses the tropical zodiac \u2014 tied to the seasons and the solstices. Conversely, Vedic astrology uses the sidereal zodiac \u2014 tied to the actual position of the stars. As a result, the two systems currently differ by approximately 23 degrees, meaning most people's Vedic sun sign is one sign earlier than their Western sign."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "For example, someone born on 15 March is a Pisces in Western astrology. However, in Vedic astrology they are likely an Aquarius. Furthermore, Vedic astrology places considerably more emphasis on the moon sign (",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("em", { children: "Rashi" }),
      ') than the sun sign \u2014 meaning the first question a Vedic astrologer asks is "what is your moon sign?" rather than "what is your sun sign?"'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H2, { children: "Chinese Zodiac \u2014 Your Sign by Birth Year" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "The ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "Chinese zodiac" }),
      " system operates on a 12-year cycle rather than a monthly one. Consequently, your Chinese zodiac sign is determined primarily by your birth year rather than your birth date. Moreover, the Chinese zodiac year begins at Chinese New Year \u2014 which falls in late January or early February \u2014 rather than 1 January. Therefore, people born in January or early February need to check whether their birth fell before or after Chinese New Year in their year."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Paragraph, { children: "The 12 Chinese zodiac animals, in cycle order, are: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig. Furthermore, each animal is associated with five elements \u2014 Wood, Fire, Earth, Metal, Water \u2014 on a 60-year cycle. As a result, a complete Chinese zodiac designation includes both the animal and the element (for instance, Wood Dragon or Fire Horse)." }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(H2, { children: "Your Zodiac Sign at whatismyage.me" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Paragraph, { children: [
      "When you enter your date of birth at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_router_dom13.Link, { to: "/", className: "text-primary underline", children: "whatismyage.me" }),
      ", your Western zodiac sign appears automatically as part of your personal life snapshot. Moreover, it sits alongside your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_router_dom13.Link, { to: "/blog/what-generation-am-i", className: "text-primary underline", children: "generational identity" }),
      ", your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_router_dom13.Link, { to: "/blog/how-many-full-moons-in-a-lifetime", className: "text-primary underline", children: "full moon count" }),
      ", and your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react_router_dom13.Link,
        {
          to: "/blog/birthday-twins-famous-people-born-on-your-birthday",
          className: "text-primary underline",
          children: "famous birthday twins"
        }
      ),
      " ",
      "\u2014 creating a rich, multi-dimensional picture of what your birth date says about you."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CtaBox, { title: "Find your zodiac sign and full life portrait", children: "Enter your date of birth at whatismyage.me \u2014 zodiac sign, generation, heartbeats, full moons, and your shareable life card, all in one place." }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      RelatedPosts,
      {
        posts: [
          { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
          { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
          { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BackToBlog, {})
  ] });
};
var ZodiacByBirthDate_default = ZodiacByBirthDate;

// src/pages/blog/BirthdayCountdown.tsx
var import_react_router_dom14 = require("react-router-dom");
var import_jsx_runtime22 = require("react/jsx-runtime");
var CANONICAL6 = "https://whatismyage.me/blog/what-does-days-to-birthday-mean";
var TITLE6 = "Days Until Your Birthday: The Countdown Explained | whatismyage.me";
var DESC6 = "Find out exactly how many days until your next birthday \u2014 how the countdown is calculated, what to do with the number, and why birthdays matter more than we admit.";
var HEADLINE5 = "Days to Your Next Birthday: How the Countdown Works";
var Milestone = ({ label, children }) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex gap-4 items-start mb-4 pb-4 border-b border-border last:border-b-0", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap mt-1 shrink-0", children: label }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-foreground/90 leading-relaxed text-[16px] m-0", children })
] });
var BirthdayCountdown = () => {
  useArticleMeta({ title: TITLE6, description: DESC6, canonical: CANONICAL6, headline: HEADLINE5 });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(ArticleShell, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_router_dom14.Link, { to: "/blog", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "\u2190 All posts" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4", children: HEADLINE5 }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Lead, { children: "Your next birthday is already approaching. Moreover, knowing exactly how many days away it is changes your relationship to time in a subtle but real way. Furthermore, the calculation itself is more interesting than it first appears." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "Most people check days to birthday out of idle curiosity. However, the number that comes back carries a specific weight \u2014 one that is entirely different depending on whether you are 6 or 66. Additionally, it sits at the intersection of anticipation, reflection, and the simple human pleasure of counting down to something." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H2, { children: "How to Calculate the Exact Days to Your Next Birthday" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "The calculation starts by identifying the next occurrence of your birth date. Specifically, this means finding whether your birthday has already occurred in the current calendar year. Consequently, if it has, you count forward to the same date in the following year. Conversely, if it has not yet occurred this year, you count forward to that date in the current year." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(FormulaBox, { title: "Days to next birthday \u2014 the logic", children: [
      "If today is 20 April and your birthday is 15 March:",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "\u2192 Birthday already passed this year \u2192 next birthday = 15 March next year",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "\u2192 Days remaining = days left in April + May + June + ... + February + 15 days in March",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "If today is 20 April and your birthday is 25 December:",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "\u2192 Birthday not yet occurred \u2192 count days from today to 25 December this year",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "\u2192 = 10 days in April + 31+30+31+31+28+30+25 = 249 days"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "Furthermore, this calculation must account for whether the upcoming year is a leap year. Moreover, if your birthday is on 29 February, additional logic applies \u2014 specifically, the next occurrence may be 4 years away rather than 1. As a result, a leap-day birthday requires its own special handling in any reliable birthday countdown calculator." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H2, { children: "Why the Days-to-Birthday Number Feels Different at Every Age" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "The same countdown of 100 days feels very different depending on how old you are. Specifically, to a 7-year-old, 100 days to their birthday represents roughly a seventh of their entire life. Consequently, the wait feels genuinely enormous. Conversely, to a 50-year-old, 100 days is a familiar fraction of the year \u2014 significant but not overwhelming." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "Furthermore, research in developmental psychology suggests that the experience of time accelerates as we age. Moreover, this is partly because each new year represents a smaller fraction of total life experience. As a result, adults consistently underestimate elapsed time while children consistently overestimate it \u2014 a divergence that becomes more pronounced with each decade." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H3, { children: "The weeks framing \u2014 a useful alternative" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: 'Some people find that converting days to weeks makes the countdown feel more manageable. Specifically, 331 days to birthday becomes 47 weeks \u2014 a number that fits neatly into a weekly planning mindset. Additionally, stating it as "under a year" versus "about 11 months" activates different psychological framings, both of which are more intuitive for many adults than raw day counts.' }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H2, { children: "Birthday Countdown Milestones Worth Tracking" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "The days-to-birthday number produces its own set of meaningful milestones on the way to the date itself. Furthermore, tracking these sub-milestones creates multiple smaller moments of anticipation rather than one distant event." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "my-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Milestone, { label: "100 days", children: "A comfortable landmark \u2014 close enough to feel real, far enough to still plan. Moreover, 100 days is a traditional unit of progress measurement in politics and management." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Milestone, { label: "50 days", children: "The halfway point to the hundred. Additionally, it coincides with about seven weeks \u2014 a working timeframe that most people can visualise clearly." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Milestone, { label: "30 days", children: "One month out. Consequently, this is typically when birthday planning becomes genuinely practical \u2014 booking venues, sending invitations, making arrangements." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Milestone, { label: "7 days", children: "One week. Furthermore, this is when anticipation shifts from background awareness to active presence in daily thought." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Milestone, { label: "1 day", children: "Tomorrow. The night before a birthday carries a quality entirely its own \u2014 quiet, reflective, and charged with the awareness that tomorrow the count resets." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H2, { children: "What to Do With 331 Days Until Your Birthday" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: "This is the number many people see at whatismyage.me \u2014 a large count that represents the gap between a recently passed birthday and the next one. Moreover, 331 days is a substantial fraction of the year. Furthermore, framed constructively, it is the amount of time available before the next natural moment of reflection and renewal." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: 'Consequently, some people use their birthday countdown as a planning horizon. Specifically, asking "what do I want to have accomplished or changed by my next birthday?" is a more emotionally resonant version of the New Year resolution \u2014 because it is tied to a personally meaningful date rather than an arbitrary calendar marker. Additionally, the birthday has the advantage of being uniquely yours, rather than shared with the entire planet.' }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H3, { children: "Birthday goal-setting \u2014 a psychological advantage" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Paragraph, { children: 'Research in goal-setting psychology suggests that personal temporal landmarks \u2014 birthdays, anniversaries, the start of the school year \u2014 create what researchers call "fresh start effects." Moreover, these landmarks make people more likely to pursue goals because they represent a psychological break from past failures and a sense of new beginning. Consequently, your birthday is not just a day worth celebrating. It is, furthermore, one of the most psychologically potent days of the year for setting intentions and beginning change.' }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(H2, { children: "The Birthday Countdown at whatismyage.me" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Paragraph, { children: [
      "At",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_router_dom14.Link, { to: "/", className: "text-primary underline", children: "whatismyage.me" }),
      ", the days to birthday tile uses the phrasing ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: '"Turns [age] in"' }),
      ' rather than just "days to birthday." Specifically, this framing makes the number more personal and meaningful \u2014 it names the age you are approaching rather than abstractly counting days. Furthermore, seeing "Turns 39 in 331 days" creates a qualitatively different response than "331 days to birthday" \u2014 one that combines the countdown with anticipation of the next age milestone.'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Paragraph, { children: [
      "Moreover, the birthday countdown sits alongside your total",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_router_dom14.Link, { to: "/blog/how-to-calculate-age-in-days", className: "text-primary underline", children: "days alive" }),
      ", your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_router_dom14.Link, { to: "/blog/how-many-heartbeats-in-a-lifetime", className: "text-primary underline", children: "heartbeat count" }),
      ", your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_router_dom14.Link, { to: "/blog/what-generation-am-i", className: "text-primary underline", children: "generational identity" }),
      ", and your",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_router_dom14.Link, { to: "/blog/what-is-a-life-clock", className: "text-primary underline", children: "life clock time" }),
      ". As a result, the countdown is not an isolated number. It is one thread in a complete portrait of a life in progress."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CtaBox, { title: "How many days until your next birthday?", children: "Enter your date of birth at whatismyage.me \u2014 birthday countdown, days alive, heartbeats, full moons, and your shareable life card." }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      RelatedPosts,
      {
        posts: [
          { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
          { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
          { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BackToBlog, {})
  ] });
};
var BirthdayCountdown_default = BirthdayCountdown;

// src/pages/NotFound.tsx
var import_react_router_dom15 = require("react-router-dom");
var import_react10 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var NotFound = () => {
  const location = (0, import_react_router_dom15.useLocation)();
  (0, import_react10.useEffect)(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" })
  ] }) });
};
var NotFound_default = NotFound;

// src/entry-server.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var ServerApp = ({ url }) => {
  const queryClient = new import_react_query.QueryClient();
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_query.QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_server2.StaticRouter, { location: url, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react_router_dom16.Routes, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Index_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/privacy", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Privacy_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Blog_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/how-many-heartbeats-in-a-lifetime", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(HeartbeatsLifetime_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/how-many-full-moons-in-a-lifetime", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FullMoonsLifetime_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/what-generation-am-i", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(GenerationGuide_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/how-to-calculate-age-in-days", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AgeInDays_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/what-is-a-life-clock", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(LifeClock_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/what-day-of-the-week-was-i-born", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(BirthWeekday_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/how-many-seconds-old-am-i", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(SecondsOld_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/birthday-twins-famous-people-born-on-your-birthday", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(BirthdayTwins_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/how-to-find-your-zodiac-sign-by-birth-date", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ZodiacByBirthDate_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "/blog/what-does-days-to-birthday-mean", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(BirthdayCountdown_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom16.Route, { path: "*", element: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NotFound_default, {}) })
  ] }) }) }) });
};
function render(url) {
  return (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ServerApp, { url }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render
});
