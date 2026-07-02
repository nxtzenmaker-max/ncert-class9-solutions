import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Subject from "@/pages/Subject";
import ChapterPage from "@/pages/ChapterPage";
import Loader from "@/components/Loader";
import RoxWidget from "@/components/RoxWidget";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/subject/:id" component={Subject} />
      <Route path="/chapter/:id" component={ChapterPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Loader />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        <RoxWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
