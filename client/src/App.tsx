import { Switch, Route, RouteComponentProps } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import AboutMe from "@/components/sections/AboutMe";
import AcademicMatter from "@/components/sections/AcademicMatter";
import BeyondClassroom from "@/components/sections/BeyondClassroom";
import Inspirations from "@/components/sections/Inspirations";
import Sidebar from "@/components/layout/Sidebar";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

// Simple Portfolio Layout with direct component rendering
function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black border-blue-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative bg-black text-blue-100">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
        
        {/* Content container */}
        <div className="p-6 md:p-8 max-w-5xl mx-auto relative z-10">
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Page decoration line */}
          <div className="absolute top-0 left-4 bottom-0 border-l-2 border-dashed border-blue-900/30 z-0"></div>
        </div>
      </main>
    </div>
  );
}

function AcademicWithParams({ params }: RouteComponentProps<{assignmentId: string}>) {
  return (
    <PortfolioLayout>
      <AcademicMatter assignmentId={params.assignmentId} />
    </PortfolioLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        {() => (
          <PortfolioLayout>
            <AboutMe />
          </PortfolioLayout>
        )}
      </Route>
      <Route path="/about">
        {() => (
          <PortfolioLayout>
            <AboutMe />
          </PortfolioLayout>
        )}
      </Route>
      <Route path="/academic">
        {() => (
          <PortfolioLayout>
            <AcademicMatter />
          </PortfolioLayout>
        )}
      </Route>
      <Route path="/beyond">
        {() => (
          <PortfolioLayout>
            <BeyondClassroom />
          </PortfolioLayout>
        )}
      </Route>
      <Route path="/inspirations">
        {() => (
          <PortfolioLayout>
            <Inspirations />
          </PortfolioLayout>
        )}
      </Route>
      <Route path="/academic/:assignmentId" component={AcademicWithParams} />
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
