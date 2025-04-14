import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useActiveSection } from '@/context/ActiveSectionContext';
import { BookOpen, User, PenTool, Lightbulb, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'academic', label: 'Academic Matter', icon: BookOpen },
    { id: 'beyond', label: 'Beyond the Classroom', icon: PenTool },
    { id: 'inspirations', label: 'Inspirations', icon: Lightbulb },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
          className="shadow-md bg-slate-800 text-blue-100 border-blue-900"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar - hidden on mobile unless toggled */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:relative md:block md:w-72 md:min-h-screen transition-transform duration-300 ease-in-out shadow-lg border-r border-blue-900/50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-8 bg-slate-900/90 relative overflow-hidden text-blue-100">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-900/20 to-blue-800/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="space-y-2 mb-10 mt-6 md:mt-8 relative">
            <div className="border-b-2 border-blue-800/50 pb-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold art-gradient-text">Writer's Portfolio</h1>
              <p className="text-blue-300/80 mt-1">AP Language & Composition</p>
            </div>
          </div>
          
          <nav className="space-y-3 relative z-10">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start text-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-blue-900/50 text-blue-100 shadow-md border border-blue-700/30' 
                    : 'text-blue-200 hover:bg-blue-900/30'
                }`}
                onClick={() => {
                  setActiveSection(item.id as any);
                  if (mobileMenuOpen) setMobileMenuOpen(false);
                }}
              >
                <item.icon className={`mr-3 h-5 w-5 ${activeSection === item.id ? 'text-blue-400' : 'text-blue-400/70'}`} />
                {item.label}
              </Button>
            ))}
          </nav>
          
          <div className="mt-auto pt-8 text-sm text-blue-400/80 border-t border-blue-900/30 relative z-10">
            <p className="font-medium">Portfolio Defense</p>
            <p>April 14-15, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}