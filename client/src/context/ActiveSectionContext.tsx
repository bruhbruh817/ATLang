import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type Section = "about" | "academic" | "beyond" | "inspirations";

interface ActiveSectionContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  activeAssignment: string | null;
  setActiveAssignment: (assignment: string | null) => void;
}

// Create context with default values
const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "about",
  setActiveSection: () => {},
  activeAssignment: null,
  setActiveAssignment: () => {}
});

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [activeAssignment, setActiveAssignment] = useState<string | null>(null);
  
  // Sync the assignment with AcademicMatter component
  useEffect(() => {
    if (activeAssignment) {
      // If we have an assignment, ensure we're in the academic section
      setActiveSection("academic");
    }
  }, [activeAssignment]);
  
  const value = { 
    activeSection, 
    setActiveSection,
    activeAssignment,
    setActiveAssignment
  };
  
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}