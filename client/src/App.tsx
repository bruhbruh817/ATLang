import { Switch, Route, RouteComponentProps } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/Portfolio";
import { Section } from "@/context/ActiveSectionContext";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

// Wrapper components to handle props for routes
const AboutSection = (_: RouteComponentProps) => <Portfolio initialSection="about" />;
const AcademicSection = (_: RouteComponentProps) => <Portfolio initialSection="academic" />;
const BeyondSection = (_: RouteComponentProps) => <Portfolio initialSection="beyond" />;
const InspirationsSection = (_: RouteComponentProps) => <Portfolio initialSection="inspirations" />;
const AcademicWithAssignment = ({params}: RouteComponentProps<{assignmentId: string}>) => 
  <Portfolio initialSection="academic" assignmentId={params.assignmentId} />;

function Router() {
  return (
    <Switch>
      <Route path="/" component={AboutSection} />
      <Route path="/about" component={AboutSection} />
      <Route path="/academic" component={AcademicSection} />
      <Route path="/beyond" component={BeyondSection} />
      <Route path="/inspirations" component={InspirationsSection} />
      <Route path="/academic/:assignmentId" component={AcademicWithAssignment} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ActiveSectionProvider>
        <Router />
        <Toaster />
      </ActiveSectionProvider>
    </QueryClientProvider>
  );
}

export default App;
