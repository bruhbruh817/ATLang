import { useState, useEffect } from "react";
import { academicSamples } from "@/data/portfolio-data";
import academicBgSvg from "@/assets/images/academic-bg.svg";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, PenTool } from "lucide-react";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function AcademicMatter() {
  const [activeTab, setActiveTab] = useState(academicSamples[0].id);
  const { activeAssignment } = useActiveSection();
  
  // Use the activeAssignment from context if available
  useEffect(() => {
    if (activeAssignment && academicSamples.some(sample => sample.id === activeAssignment)) {
      setActiveTab(activeAssignment);
    }
  }, [activeAssignment]);
  
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="hero-text mb-4">Academic Matter</h1>
            <p className="hero-subtext">
              Selected works from AP Language & Composition showcasing analytical thinking and rhetorical skills
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="image-frame w-full max-w-md h-48 relative">
              <img 
                src={academicBgSvg} 
                alt="Academic writing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Intro Card */}
      <Card className="content-card mb-12 reveal-element bg-black border-2 border-blue-800">
        <CardContent className="p-8">
          <h2 className="section-heading">About This Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <p className="text-lg mb-4">
                This section presents selected essays from my AP Language and Composition coursework. 
                Each piece includes prefatory notes explaining the assignment, my approach, and my assessment of 
                the work's strengths and weaknesses. Multiple drafts are provided to demonstrate my writing process 
                and growth.
              </p>
              <p className="text-lg">
                These selections showcase my ability to analyze rhetoric, construct arguments, and engage with complex texts. 
                They represent significant milestones in my development as a critical reader and writer.
              </p>
            </div>
            
            <div className="md:col-span-4">
              <div className="bg-black p-6 rounded-xl border-2 border-blue-900 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 art-gradient-text">Key Skills Demonstrated</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-900 text-blue-100 font-medium">1</span>
                    <span>Rhetorical analysis of complex texts across various time periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-900 text-blue-100 font-medium">2</span>
                    <span>Development of well-structured arguments with supporting evidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-900 text-blue-100 font-medium">3</span>
                    <span>Adaptation of writing style for different rhetorical situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-900 text-blue-100 font-medium">4</span>
                    <span>Critical engagement with contemporary social and cultural issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Assignment Selection Guide - Mobile Only */}
      <div className="md:hidden bg-black border-2 border-blue-900 rounded-lg p-4 mb-6 text-center">
        <p className="text-blue-300">Use the sidebar menu to select a specific assignment</p>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {academicSamples.map((sample, index) => (
            <div 
              key={sample.id}
              className={`p-2 rounded-lg cursor-pointer text-center ${
                activeTab === sample.id 
                ? 'bg-blue-900 text-blue-100 border-2 border-blue-700' 
                : 'bg-black text-blue-300 border-2 border-blue-800'
              }`}
              onClick={() => setActiveTab(sample.id)}
            >
              <div className="flex flex-col items-center">
                {index === 0 ? <FileText className="w-5 h-5 mb-1" /> : 
                 index === 1 ? <PenTool className="w-5 h-5 mb-1" /> : 
                 <BookOpen className="w-5 h-5 mb-1" />}
                <span className="text-xs line-clamp-1">{sample.title.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Current Selected Assignment */}
      {academicSamples.map((sample) => {
        if (sample.id !== activeTab) return null;
        
        return (
          <Card key={sample.id} className="content-card mb-8 bg-black border-2 border-blue-800">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold mb-4 text-blue-300">{sample.title}</h2>
                  <span className="text-sm bg-blue-900 text-blue-100 px-3 py-1 rounded-full">{sample.status}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-black rounded-lg p-5 border-2 border-blue-900">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">Assignment</h3>
                    <p className="text-blue-100">{sample.prefatory.explanation}</p>
                  </div>
                  <div className="bg-black rounded-lg p-5 border-2 border-blue-900">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">My Approach</h3>
                    <p className="text-blue-100">{sample.prefatory.approach}</p>
                  </div>
                  <div className="bg-black rounded-lg p-5 border-2 border-blue-900">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">Strengths & Weaknesses</h3>
                    <p className="text-blue-100">{sample.prefatory.strengthsWeaknesses}</p>
                  </div>
                </div>
                
                <div className="bg-black rounded-lg p-6 border-2 border-blue-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-blue-300">{sample.preview.title}</h3>
                    <span className="text-sm bg-blue-900 text-blue-100 px-3 py-1 rounded-full">{sample.date}</span>
                  </div>
                  
                  <div className="space-y-4">
                    {sample.preview.content.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed text-blue-100">{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-300">Available Versions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {sample.versions.map((version, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-lg ${
                          version === sample.activeVersion 
                            ? 'bg-blue-900 border-2 border-blue-500 text-blue-100' 
                            : 'bg-black border-2 border-blue-800 text-blue-200'
                        } transition-colors cursor-pointer`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{version}</span>
                          {version === sample.activeVersion && (
                            <span className="text-xs bg-blue-800 px-2 py-0.5 rounded text-blue-100">Current</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
      
      {/* Footer Note */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-3 bg-black rounded-full shadow-md text-sm text-blue-200 border-2 border-blue-900">
          The full portfolio contains additional academic writing samples not shown here
        </div>
      </div>
    </div>
  );
}