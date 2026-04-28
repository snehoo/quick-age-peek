import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Privacy from "./pages/Privacy.tsx";
import Blog from "./pages/Blog.tsx";
import HeartbeatsLifetime from "./pages/blog/HeartbeatsLifetime.tsx";
import FullMoonsLifetime from "./pages/blog/FullMoonsLifetime.tsx";
import GenerationGuide from "./pages/blog/GenerationGuide.tsx";
import AgeInDays from "./pages/blog/AgeInDays.tsx";
import LifeClock from "./pages/blog/LifeClock.tsx";
import BirthWeekday from "./pages/blog/BirthWeekday.tsx";
import SecondsOld from "./pages/blog/SecondsOld.tsx";
import BirthdayTwins from "./pages/blog/BirthdayTwins.tsx";
import ZodiacByBirthDate from "./pages/blog/ZodiacByBirthDate.tsx";
import BirthdayCountdown from "./pages/blog/BirthdayCountdown.tsx";
import CalculatorNetVsCalculatorSoup from "./pages/blog/CalculatorNetVsCalculatorSoup.tsx";
import CalculatorSoupVsOmniCalculator from "./pages/blog/CalculatorSoupVsOmniCalculator.tsx";
import MyAgeCalculatorVsCalculatorNet from "./pages/blog/MyAgeCalculatorVsCalculatorNet.tsx";
import OmniCalculatorVsCalculatorNet from "./pages/blog/OmniCalculatorVsCalculatorNet.tsx";
import ZohoVsTallyGstCalculator from "./pages/blog/ZohoVsTallyGstCalculator.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/how-many-heartbeats-in-a-lifetime"
            element={<HeartbeatsLifetime />}
          />
          <Route
            path="/blog/how-many-full-moons-in-a-lifetime"
            element={<FullMoonsLifetime />}
          />
          <Route path="/blog/what-generation-am-i" element={<GenerationGuide />} />
          <Route path="/blog/how-to-calculate-age-in-days" element={<AgeInDays />} />
          <Route path="/blog/what-is-a-life-clock" element={<LifeClock />} />
          <Route path="/blog/what-day-of-the-week-was-i-born" element={<BirthWeekday />} />
          <Route path="/blog/how-many-seconds-old-am-i" element={<SecondsOld />} />
          <Route
            path="/blog/birthday-twins-famous-people-born-on-your-birthday"
            element={<BirthdayTwins />}
          />
          <Route
            path="/blog/how-to-find-your-zodiac-sign-by-birth-date"
            element={<ZodiacByBirthDate />}
          />
          <Route path="/blog/what-does-days-to-birthday-mean" element={<BirthdayCountdown />} />
          <Route path="/blog/calculator-net-vs-calculatorsoup-age-calculator" element={<CalculatorNetVsCalculatorSoup />} />
          <Route path="/blog/calculatorsoup-vs-omnicalculator" element={<CalculatorSoupVsOmniCalculator />} />
          <Route path="/blog/myagecalculator-vs-calculator-net" element={<MyAgeCalculatorVsCalculatorNet />} />
          <Route path="/blog/omnicalculator-vs-calculator-net" element={<OmniCalculatorVsCalculatorNet />} />
          <Route path="/blog/zoho-gst-calculator-vs-tally-gst-calculator" element={<ZohoVsTallyGstCalculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
