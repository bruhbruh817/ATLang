import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import { useEffect } from "react";

export default function Portfolio() {
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
    <div className="flex flex-col md:flex-row min-h-screen bg-white backdrop-blur-sm">
      <Sidebar />
      <MainContent />
    </div>
  );
}
