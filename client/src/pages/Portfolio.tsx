import Sidebar from "@/components/layout/Sidebar";
import { useEffect } from "react";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { Section } from "@/context/ActiveSectionContext";
import AboutMe from "@/components/sections/AboutMe";
import AcademicMatter from "@/components/sections/AcademicMatter";
import BeyondClassroom from "@/components/sections/BeyondClassroom";
import Inspirations from "@/components/sections/Inspirations";

interface PortfolioProps {
  initialSection?: Section;
  assignmentId?: string;
}

export default function Portfolio({ initialSection, assignmentId }: PortfolioProps) {
  const { setActiveSection, setActiveAssignment } = useActiveSection();
  
  // Set initial section and assignment if provided
  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
    
    if (assignmentId) {
      setActiveAssignment(assignmentId);
    }
  }, [initialSection, assignmentId, setActiveSection, setActiveAssignment]);
  
  // Add scroll reveal effect for elements
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Render the appropriate component based on initialSection
  const renderSection = () => {
    switch (initialSection) {
      case 'about':
        return <AboutMe />;
      case 'academic':
        return <AcademicMatter assignmentId={assignmentId} />;
      case 'beyond':
        return <BeyondClassroom />;
      case 'inspirations':
        return <Inspirations />;
      default:
        return <AboutMe />;
    }
  };

  const { activeSection, activeAssignment } = useActiveSection();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black border-blue-900">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        activeAssignment={activeAssignment}
        onAssignmentChange={setActiveAssignment}
      />
      <main className="flex-1 overflow-y-auto relative bg-black text-blue-100">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
        
        {/* Content container */}
        <div className="p-6 md:p-8 max-w-5xl mx-auto relative z-10">
          <div className="relative z-10">
            {renderSection()}
          </div>
          
          {/* Page decoration line */}
          <div className="absolute top-0 left-4 bottom-0 border-l-2 border-dashed border-blue-900/30 z-0"></div>
        </div>
      </main>
    </div>
  );
}
