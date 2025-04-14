import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Section } from "@/context/ActiveSectionContext";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import Sidebar from "@/components/layout/Sidebar";
import AboutMe from "@/components/sections/AboutMe";
import AcademicMatter from "@/components/sections/AcademicMatter";
import BeyondClassroom from "@/components/sections/BeyondClassroom";
import Inspirations from "@/components/sections/Inspirations";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [activeAssignment, setActiveAssignment] = useState<string | null>(null);
  
  // Simple function to handle section changes
  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    if (section !== "academic") {
      setActiveAssignment(null);
    }
  };
  
  // Render the appropriate content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "academic":
        return <AcademicMatter assignmentId={activeAssignment || undefined} />;
      case "beyond":
        return <BeyondClassroom />;
      case "inspirations":
        return <Inspirations />;
      default:
        return <AboutMe />;
    }
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <ActiveSectionProvider>
        <div className="flex flex-col md:flex-row min-h-screen bg-black border-blue-900">
          {/* Custom Sidebar with direct state updates */}
          <div className="md:w-72 md:min-h-screen border-r-2 border-blue-900">
            <Sidebar 
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
              activeAssignment={activeAssignment}
              onAssignmentChange={setActiveAssignment}
            />
          </div>
          
          {/* Main content area */}
          <main className="flex-1 overflow-y-auto relative bg-black text-blue-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
            
            {/* Content container */}
            <div className="p-6 md:p-8 max-w-5xl mx-auto relative z-10">
              <div className="relative z-10">
                {renderContent()}
              </div>
              
              {/* Page decoration line */}
              <div className="absolute top-0 left-4 bottom-0 border-l-2 border-dashed border-blue-900/30 z-0"></div>
            </div>
          </main>
        </div>
        <Toaster />
      </ActiveSectionProvider>
    </QueryClientProvider>
  );
}

export default App;
