import { useActiveSection } from '@/context/ActiveSectionContext';
import AboutMe from '@/components/sections/AboutMe';
import AcademicMatter from '@/components/sections/AcademicMatter';
import BeyondClassroom from '@/components/sections/BeyondClassroom';
import Inspirations from '@/components/sections/Inspirations';
import abstractShapeSvg from '@/assets/images/abstract-shape.svg';

export default function MainContent() {
  const { activeSection } = useActiveSection();

  return (
    <main className="flex-1 overflow-y-auto relative">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-32 w-64 h-64 opacity-10 rotate-12 z-0 pointer-events-none">
        <img src={abstractShapeSvg} alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 -left-32 w-64 h-64 opacity-10 -rotate-12 z-0 pointer-events-none">
        <img src={abstractShapeSvg} alt="" className="w-full h-full" />
      </div>
      
      {/* Content container */}
      <div className="p-6 md:p-8 max-w-5xl mx-auto relative z-10">
        <div className="relative z-10">
          {activeSection === 'about' && <AboutMe />}
          {activeSection === 'academic' && <AcademicMatter />}
          {activeSection === 'beyond' && <BeyondClassroom />}
          {activeSection === 'inspirations' && <Inspirations />}
        </div>
        
        {/* Page decoration line */}
        <div className="absolute top-0 left-4 bottom-0 border-l-2 border-dashed border-primary/20 z-0"></div>
      </div>
    </main>
  );
}