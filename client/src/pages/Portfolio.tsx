import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import { useEffect } from "react";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { Section } from "@/context/ActiveSectionContext";

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

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black border-blue-900">
      <Sidebar />
      <MainContent />
    </div>
  );
}
