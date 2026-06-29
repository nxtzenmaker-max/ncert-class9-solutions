import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Subject from "@/pages/Subject";
import ChapterPage from "@/pages/ChapterPage";
import Loader from "@/components/Loader";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Loader />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/subject/:id" component={Subject} />
          <Route path="/chapter/:id" component={ChapterPage} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
