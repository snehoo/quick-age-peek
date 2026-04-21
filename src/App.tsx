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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
