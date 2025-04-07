import { createContext, useState, useContext, ReactNode } from 'react';

type Section = "about" | "academic" | "beyond" | "inspirations";

interface ActiveSectionContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("about");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
}