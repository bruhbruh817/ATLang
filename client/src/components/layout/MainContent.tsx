import { useActiveSection } from '@/context/ActiveSectionContext';
import AboutMe from '@/components/sections/AboutMe';
import AcademicMatter from '@/components/sections/AcademicMatter';
import BeyondClassroom from '@/components/sections/BeyondClassroom';
import Inspirations from '@/components/sections/Inspirations';

export default function MainContent() {
  const { activeSection } = useActiveSection();

  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'academic' && <AcademicMatter />}
        {activeSection === 'beyond' && <BeyondClassroom />}
        {activeSection === 'inspirations' && <Inspirations />}
      </div>
    </main>
  );
}