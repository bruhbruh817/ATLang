import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useActiveSection } from '@/context/ActiveSectionContext';
import { ChevronDown, ChevronUp, BookOpen, User, PenTool, Lightbulb, Menu, X, FileText } from 'lucide-react';
import { academicSamples } from '@/data/portfolio-data';

export default function Sidebar() {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const { activeAssignment, setActiveAssignment } = useActiveSection();

  // Auto-expand academic dropdown when in academic section
  useEffect(() => {
    if (activeSection === 'academic') {
      setAcademicDropdownOpen(true);
    }
  }, [activeSection]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAcademicDropdown = () => {
    setAcademicDropdownOpen(!academicDropdownOpen);
    
    // When opening academic section, set it active
    if (!academicDropdownOpen) {
      setActiveSection('academic');
    }
  };

  const handleAssignmentClick = (assignmentId: string) => {
    setActiveSection('academic');
    setActiveAssignment(assignmentId);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="shadow-md bg-black text-blue-100 border-2 border-blue-900"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar - hidden on mobile unless toggled */}
      <div 
        className={`fixed inset-0 bg-black backdrop-blur-sm z-40 md:relative md:block md:w-72 md:min-h-screen transition-transform duration-300 ease-in-out shadow-lg border-r-2 border-blue-900 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-6 bg-black relative overflow-hidden text-blue-100">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-900/20 to-blue-800/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="space-y-2 mb-8 mt-6 md:mt-8 relative">
            <div className="border-b-2 border-blue-800 pb-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold art-gradient-text">Writer's Portfolio</h1>
              <p className="text-blue-300 mt-1">AP Language & Composition</p>
            </div>
          </div>
          
          <nav className="space-y-3 relative z-10">
            {/* About Me Button */}
            <Button
              variant={activeSection === 'about' ? "default" : "ghost"}
              className={`w-full justify-start text-lg transition-all duration-300 ${
                activeSection === 'about' 
                  ? 'bg-blue-900 text-blue-100 shadow-md border-2 border-blue-700' 
                  : 'text-blue-200 hover:bg-blue-900/30 border-2 border-transparent'
              }`}
              onClick={() => {
                setActiveSection('about');
                setActiveAssignment(null);
                if (mobileMenuOpen) setMobileMenuOpen(false);
              }}
            >
              <User className={`mr-3 h-5 w-5 ${activeSection === 'about' ? 'text-blue-400' : 'text-blue-400/70'}`} />
              About Me
            </Button>
            
            {/* Academic Matter Button with Dropdown */}
            <div className="space-y-1">
              <div 
                className={`flex items-center justify-between w-full p-2 rounded-md text-lg cursor-pointer transition-all duration-300 ${
                  activeSection === 'academic' 
                    ? 'bg-blue-900 text-blue-100 shadow-md border-2 border-blue-700' 
                    : 'text-blue-200 hover:bg-blue-900/30 border-2 border-transparent'
                }`}
                onClick={toggleAcademicDropdown}
              >
                <div className="flex items-center">
                  <BookOpen className={`mr-3 h-5 w-5 ${activeSection === 'academic' ? 'text-blue-400' : 'text-blue-400/70'}`} />
                  <span>Academic Matter</span>
                </div>
                {academicDropdownOpen ? 
                  <ChevronUp className="h-5 w-5 text-blue-400" /> : 
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                }
              </div>
              
              {/* Dropdown Content */}
              {academicDropdownOpen && (
                <div className="ml-6 pl-3 border-l-2 border-blue-800 space-y-2">
                  {academicSamples.map((sample) => (
                    <Button
                      key={sample.id}
                      variant="ghost"
                      className={`w-full justify-start text-md py-2 ${
                        activeAssignment === sample.id
                          ? 'bg-blue-900/50 text-blue-100 border-2 border-blue-700'
                          : 'text-blue-300 hover:bg-blue-900/30 border-2 border-transparent'
                      }`}
                      onClick={() => handleAssignmentClick(sample.id)}
                    >
                      <FileText className="mr-2 h-4 w-4 text-blue-400/80" />
                      {sample.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Beyond the Classroom Button */}
            <Button
              variant={activeSection === 'beyond' ? "default" : "ghost"}
              className={`w-full justify-start text-lg transition-all duration-300 ${
                activeSection === 'beyond' 
                  ? 'bg-blue-900 text-blue-100 shadow-md border-2 border-blue-700' 
                  : 'text-blue-200 hover:bg-blue-900/30 border-2 border-transparent'
              }`}
              onClick={() => {
                setActiveSection('beyond');
                setActiveAssignment(null);
                if (mobileMenuOpen) setMobileMenuOpen(false);
              }}
            >
              <PenTool className={`mr-3 h-5 w-5 ${activeSection === 'beyond' ? 'text-blue-400' : 'text-blue-400/70'}`} />
              Beyond the Classroom
            </Button>
            
            {/* Inspirations Button */}
            <Button
              variant={activeSection === 'inspirations' ? "default" : "ghost"}
              className={`w-full justify-start text-lg transition-all duration-300 ${
                activeSection === 'inspirations' 
                  ? 'bg-blue-900 text-blue-100 shadow-md border-2 border-blue-700' 
                  : 'text-blue-200 hover:bg-blue-900/30 border-2 border-transparent'
              }`}
              onClick={() => {
                setActiveSection('inspirations');
                setActiveAssignment(null);
                if (mobileMenuOpen) setMobileMenuOpen(false);
              }}
            >
              <Lightbulb className={`mr-3 h-5 w-5 ${activeSection === 'inspirations' ? 'text-blue-400' : 'text-blue-400/70'}`} />
              Inspirations
            </Button>
          </nav>
          
          <div className="mt-auto pt-8 text-sm text-blue-400/80 border-t-2 border-blue-900 relative z-10">
            <p className="font-medium">Portfolio Defense</p>
            <p>April 14-15, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}