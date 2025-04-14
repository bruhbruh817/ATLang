import { useActiveSection } from '@/context/ActiveSectionContext';
import AboutMe from '@/components/sections/AboutMe';
import AcademicMatter from '@/components/sections/AcademicMatter';
import BeyondClassroom from '@/components/sections/BeyondClassroom';
import Inspirations from '@/components/sections/Inspirations';

export default function MainContent() {
  const { activeSection } = useActiveSection();

  return (
    <main className="flex-1 overflow-y-auto relative bg-black text-blue-100">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent z-0 pointer-events-none"></div>
      
      {/* Content container */}
      <div className="p-6 md:p-8 max-w-5xl mx-auto relative z-10">
        <div className="relative z-10">
          {activeSection === 'about' && <AboutMe />}
          {activeSection === 'academic' && <AcademicMatter />}
          {activeSection === 'beyond' && <BeyondClassroom />}
          {activeSection === 'inspirations' && <Inspirations />}
        </div>
        
        {/* Page decoration line */}
        <div className="absolute top-0 left-4 bottom-0 border-l-2 border-dashed border-blue-900/30 z-0"></div>
      </div>
    </main>
  );
}