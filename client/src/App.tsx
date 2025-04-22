import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/Portfolio";
import DescriptiveNarrativePage from "@/pages/descriptive-narrative"; // <- add this import
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ActiveSectionProvider>
        <Switch>
          {/* Standard Portfolio Routes */}
          <Route path="/" component={() => <Portfolio initialSection="about" />} />
          <Route path="/about" component={() => <Portfolio initialSection="about" />} />
          <Route path="/academic" component={() => <Portfolio initialSection="academic" />} />
          <Route path="/beyond" component={() => <Portfolio initialSection="beyond" />} />
          <Route path="/inspirations" component={() => <Portfolio initialSection="inspirations" />} />

          {/* Assignment-specific page (full-page layout) */}
          <Route path="/academic/descriptive-narrative" component={DescriptiveNarrativePage} />

          {/* Fallback for other assignments */}
          <Route 
            path="/academic/:assignmentId" 
            component={({ params }) => (
              <Portfolio 
                initialSection="academic" 
                assignmentId={params.assignmentId} 
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </ActiveSectionProvider>
    </QueryClientProvider>
  );
}

export default App;
