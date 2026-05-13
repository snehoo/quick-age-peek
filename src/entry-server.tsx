import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Routes } from "react-router-dom";
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
import GigaCalculatorVsOmniCalculator from "./pages/blog/GigaCalculatorVsOmniCalculator.tsx";
import AgeCalculatorStatistics from "./pages/blog/AgeCalculatorStatistics.tsx";
import AgeGroupsOnlineStatistics from "./pages/blog/AgeGroupsOnlineStatistics.tsx";
import BodyOverTimeStatistics from "./pages/blog/BodyOverTimeStatistics.tsx";
import AgeBirthdaysGloballyStatistics from "./pages/blog/AgeBirthdaysGloballyStatistics.tsx";
import MeasureTimeAndLifeStatistics from "./pages/blog/MeasureTimeAndLifeStatistics.tsx";
import BornIn1985 from "./pages/blog/BornIn1985.tsx";
import BornIn1986 from "./pages/blog/BornIn1986.tsx";
import BornIn1987 from "./pages/blog/BornIn1987.tsx";
import BornIn1988 from "./pages/blog/BornIn1988.tsx";
import BornIn1989 from "./pages/blog/BornIn1989.tsx";
import BornIn1995 from "./pages/blog/BornIn1995.tsx";
import BornIn1996 from "./pages/blog/BornIn1996.tsx";
import BornIn1997 from "./pages/blog/BornIn1997.tsx";
import BornIn1998 from "./pages/blog/BornIn1998.tsx";
import BornIn1999 from "./pages/blog/BornIn1999.tsx";
import BornIn2000 from "./pages/blog/BornIn2000.tsx";
import BornIn2001 from "./pages/blog/BornIn2001.tsx";
import BornIn2002 from "./pages/blog/BornIn2002.tsx";
import BornIn1990 from "./pages/blog/BornIn1990.tsx";
import BornIn1991 from "./pages/blog/BornIn1991.tsx";
import BornIn1992 from "./pages/blog/BornIn1992.tsx";
import BornIn1993 from "./pages/blog/BornIn1993.tsx";
import BornIn1994 from "./pages/blog/BornIn1994.tsx";
import HoursOld from "./pages/blog/HoursOld.tsx";
import MinutesOld from "./pages/blog/MinutesOld.tsx";
import MonthsOld from "./pages/blog/MonthsOld.tsx";
import WeeksOld from "./pages/blog/WeeksOld.tsx";
import HowOldGuide from "./pages/blog/HowOldGuide.tsx";
import HowOldWillIBeIn2030 from "./pages/blog/HowOldWillIBeIn2030.tsx";
import HowOldWillIBeIn2040 from "./pages/blog/HowOldWillIBeIn2040.tsx";
import HowOldWillIBeIn2050 from "./pages/blog/HowOldWillIBeIn2050.tsx";
import WhatDayWillIBe10000DaysOld from "./pages/blog/WhatDayWillIBe10000DaysOld.tsx";
import WhenWillIBe1BillionSecondsOld from "./pages/blog/WhenWillIBe1BillionSecondsOld.tsx";
import HowOldAmI from "./pages/blog/HowOldAmI.tsx";
import AgeCalculator from "./pages/blog/AgeCalculator.tsx";
import AgeInDaysCalculator from "./pages/blog/AgeInDaysCalculator.tsx";
import NotFound from "./pages/NotFound.tsx";

// Server-only App without BrowserRouter (uses StaticRouter instead).
const ServerApp = ({ url }: { url: string }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
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
            <Route path="/blog/gigacalculator-vs-omnicalculator" element={<GigaCalculatorVsOmniCalculator />} />
            <Route path="/blog/age-calculator-statistics" element={<AgeCalculatorStatistics />} />
            <Route path="/blog/how-different-age-groups-behave-online-statistics" element={<AgeGroupsOnlineStatistics />} />
            <Route path="/blog/what-happens-inside-your-body-over-time-statistics" element={<BodyOverTimeStatistics />} />
            <Route path="/blog/how-age-and-birthdays-distribute-globally-statistics" element={<AgeBirthdaysGloballyStatistics />} />
            <Route path="/blog/how-people-measure-time-and-life-statistics" element={<MeasureTimeAndLifeStatistics />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1985" element={<BornIn1985 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1986" element={<BornIn1986 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1987" element={<BornIn1987 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1988" element={<BornIn1988 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1989" element={<BornIn1989 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1995" element={<BornIn1995 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1996" element={<BornIn1996 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1997" element={<BornIn1997 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1998" element={<BornIn1998 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1999" element={<BornIn1999 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-2000" element={<BornIn2000 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-2001" element={<BornIn2001 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-2002" element={<BornIn2002 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1990" element={<BornIn1990 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1991" element={<BornIn1991 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1992" element={<BornIn1992 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1993" element={<BornIn1993 />} />
            <Route path="/blog/how-old-am-i-if-i-was-born-in-1994" element={<BornIn1994 />} />
            <Route path="/blog/how-many-hours-old-am-i" element={<HoursOld />} />
            <Route path="/blog/how-many-minutes-old-am-i" element={<MinutesOld />} />
            <Route path="/blog/how-many-months-old-am-i" element={<MonthsOld />} />
            <Route path="/blog/how-many-weeks-old-am-i" element={<WeeksOld />} />
            <Route path="/blog/how-old-am-i-complete-guide" element={<HowOldGuide />} />
            <Route path="/blog/how-old-will-i-be-in-2030" element={<HowOldWillIBeIn2030 />} />
            <Route path="/blog/how-old-will-i-be-in-2040" element={<HowOldWillIBeIn2040 />} />
            <Route path="/blog/how-old-will-i-be-in-2050" element={<HowOldWillIBeIn2050 />} />
            <Route path="/blog/what-day-will-i-be-10000-days-old" element={<WhatDayWillIBe10000DaysOld />} />
            <Route path="/blog/when-will-i-be-1-billion-seconds-old" element={<WhenWillIBe1BillionSecondsOld />} />
            <Route path="/blog/how-old-am-i" element={<HowOldAmI />} />
            <Route path="/blog/age-calculator" element={<AgeCalculator />} />
            <Route path="/blog/age-in-days-calculator" element={<AgeInDaysCalculator />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export function render(url: string) {
  return renderToString(<ServerApp url={url} />);
}
