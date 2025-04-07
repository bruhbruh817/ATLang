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
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar - hidden on mobile unless toggled */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:relative md:block md:w-64 md:min-h-screen md:bg-muted/50 md:border-r transition-transform duration-300 ease-in-out shadow-lg md:shadow-none ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="space-y-2 mb-8 mt-12 md:mt-6">
            <h1 className="text-3xl font-bold text-primary">Writer's Portfolio</h1>
            <p className="text-muted-foreground">AP Language & Composition</p>
          </div>
          
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className="w-full justify-start text-lg"
                onClick={() => {
                  setActiveSection(item.id as any);
                  if (mobileMenuOpen) setMobileMenuOpen(false);
                }}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 text-sm text-muted-foreground">
            <p>Portfolio Defense</p>
            <p>April 14-15, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}