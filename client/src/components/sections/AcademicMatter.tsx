import { useState, useEffect } from "react";
import WritingSample from "@/components/writing/WritingSample";
import { academicSamples } from "@/data/portfolio-data";
import academicBgSvg from "@/assets/images/academic-bg.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BookOpen, PenTool, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function AcademicMatter() {
  const [activeTab, setActiveTab] = useState(academicSamples[0].id);
  const [showTabs, setShowTabs] = useState(false);
  const { activeSection } = useActiveSection();
  
  // Show tabs by default when this section becomes active
  useEffect(() => {
    if (activeSection === 'academic') {
      setShowTabs(true);
    }
  }, [activeSection]);

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
      
      {/* Dropdown for Assignment Selection */}
      <div className="reveal-element mb-6">
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowTabs(!showTabs)}>
            <h2 className="text-2xl font-bold text-blue-100">
              My 3 Academic Writing Assignments
              <span className="text-sm bg-blue-800 ml-3 px-3 py-1 rounded-full text-blue-50">Click to view</span>
            </h2>
            <Button variant="ghost" size="icon" className="text-blue-200">
              {showTabs ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </Button>
          </div>
          
          {showTabs && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {academicSamples.map((sample, index) => (
                <div 
                  key={sample.id}
                  className={`bg-slate-900/80 border ${activeTab === sample.id ? 'border-blue-500' : 'border-blue-900'} rounded-lg p-4 cursor-pointer transition-all hover:border-blue-600`}
                  onClick={() => setActiveTab(sample.id)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-800/30 rounded-full mr-3 text-blue-300">
                      {index === 0 ? <FileText className="w-5 h-5" /> : index === 1 ? <PenTool className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className={`font-medium ${activeTab === sample.id ? 'text-blue-300' : 'text-blue-100'}`}>{sample.title}</h3>
                      <p className="text-xs text-blue-400/70">{sample.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Intro Card */}
      <Card className="content-card mb-12 reveal-element">
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
              <div className="bg-slate-900/80 p-6 rounded-xl border border-blue-900 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 art-gradient-text">Key Skills Demonstrated</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">1</span>
                    <span>Rhetorical analysis of complex texts across various time periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">2</span>
                    <span>Development of well-structured arguments with supporting evidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">3</span>
                    <span>Adaptation of writing style for different rhetorical situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">4</span>
                    <span>Critical engagement with contemporary social and cultural issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Current Selected Assignment */}
      <Card className="reveal-element mb-8 content-card">
        <CardContent className="p-6">
          {academicSamples.map((sample) => {
            if (sample.id !== activeTab) return null;
            
            return (
              <div key={sample.id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold mb-4 art-gradient-text">{sample.title}</h2>
                  <span className="text-sm bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full">{sample.status}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-slate-900/80 rounded-lg p-5 border border-blue-900">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">Assignment</h3>
                    <p>{sample.prefatory.explanation}</p>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-5 border border-blue-900">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">My Approach</h3>
                    <p>{sample.prefatory.approach}</p>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-5 border border-blue-900">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">Strengths & Weaknesses</h3>
                    <p>{sample.prefatory.strengthsWeaknesses}</p>
                  </div>
                </div>
                
                <div className="bg-slate-900/90 rounded-lg p-6 border border-blue-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-blue-100">{sample.preview.title}</h3>
                    <span className="text-sm bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full">{sample.date}</span>
                  </div>
                  
                  <div className="space-y-4">
                    {sample.preview.content.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-100">Available Versions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {sample.versions.map((version, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-lg border ${
                          version === sample.activeVersion 
                            ? 'bg-blue-900/30 border-blue-700/50 text-blue-100' 
                            : 'bg-slate-900/90 border-blue-900/30 hover:border-blue-800'
                        } transition-colors cursor-pointer`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{version}</span>
                          {version === sample.activeVersion && (
                            <span className="text-xs bg-blue-800/50 px-2 py-0.5 rounded text-blue-200">Current</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
      
      {/* Footer Note */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-3 bg-slate-900/80 rounded-full shadow-md text-sm text-blue-200 border border-blue-900/50">
          The full portfolio contains additional academic writing samples not shown here
        </div>
      </div>
    </div>
  );
}