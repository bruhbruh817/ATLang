import { useState } from "react";
import WritingSample from "@/components/writing/WritingSample";
import { academicSamples } from "@/data/portfolio-data";
import academicBgSvg from "@/assets/images/academic-bg.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BookOpen, PenTool } from "lucide-react";

export default function AcademicMatter() {
  const [activeTab, setActiveTab] = useState(academicSamples[0].id);

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element bg-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Intro Card */}
      <Card className="content-card bg-slate-900/40 mb-12 reveal-element border-slate-700">
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
              <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Key Skills Demonstrated</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/20 text-primary font-medium">1</span>
                    <span>Rhetorical analysis of complex texts across various time periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/20 text-primary font-medium">2</span>
                    <span>Development of well-structured arguments with supporting evidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/20 text-primary font-medium">3</span>
                    <span>Adaptation of writing style for different rhetorical situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/20 text-primary font-medium">4</span>
                    <span>Critical engagement with contemporary social and cultural issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Writing Samples Selection Tabs */}
      <Card className="border-slate-700 bg-slate-900/40 reveal-element mb-8">
        <CardContent className="p-6">
          <Tabs defaultValue={academicSamples[0].id} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">My Writing Samples</h2>
              <p className="text-gray-400 mb-6">Select a writing sample to view its details, prefatory notes, and drafts.</p>
              
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 bg-slate-800/60">
                <TabsTrigger 
                  value={academicSamples[0].id}
                  className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{academicSamples[0].title}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value={academicSamples[1].id}
                  className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <PenTool className="w-4 h-4 mr-2" />
                  <span>{academicSamples[1].title}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value={academicSamples[2].id}
                  className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>{academicSamples[2].title}</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="mt-6 border-t border-slate-700 pt-6">
              {academicSamples.map((sample) => (
                <TabsContent 
                  key={sample.id} 
                  value={sample.id}
                  className="space-y-6 mt-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-slate-800/60 rounded-lg p-5 border border-slate-700">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Assignment</h3>
                      <p>{sample.prefatory.explanation}</p>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-5 border border-slate-700">
                      <h3 className="text-lg font-semibold mb-2 text-primary">My Approach</h3>
                      <p>{sample.prefatory.approach}</p>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-5 border border-slate-700">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Strengths & Weaknesses</h3>
                      <p>{sample.prefatory.strengthsWeaknesses}</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{sample.preview.title}</h3>
                      <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">{sample.date}</span>
                    </div>
                    
                    <div className="space-y-4">
                      {sample.preview.content.map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Available Versions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {sample.versions.map((version, idx) => (
                        <div 
                          key={idx} 
                          className={`p-4 rounded-lg border ${
                            version === sample.activeVersion 
                              ? 'bg-primary/20 border-primary/30 text-white' 
                              : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
                          } transition-colors cursor-pointer`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{version}</span>
                            {version === sample.activeVersion && (
                              <span className="text-xs bg-primary/30 px-2 py-0.5 rounded">Current</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Footer Note */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-3 bg-slate-800/80 rounded-full shadow-md text-sm text-slate-300 border border-slate-700">
          The full portfolio contains additional academic writing samples not shown here
        </div>
      </div>
    </div>
  );
}