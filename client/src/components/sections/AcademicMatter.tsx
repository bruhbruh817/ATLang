import WritingSample from "@/components/writing/WritingSample";
import { academicSamples } from "@/data/portfolio-data";
import academicBgSvg from "@/assets/images/academic-bg.svg";
import { Card, CardContent } from "@/components/ui/card";

export default function AcademicMatter() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
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
      <Card className="content-card animated-bg mb-12 reveal-element">
        <CardContent className="p-8">
          <h2 className="section-heading">About This Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
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
            
            <div className="bg-white/70 p-6 rounded-xl border border-primary/10 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Skills Demonstrated</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/10 text-primary font-medium">1</span>
                  <span>Rhetorical analysis of complex texts across various time periods</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/10 text-primary font-medium">2</span>
                  <span>Development of well-structured arguments with supporting evidence</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/10 text-primary font-medium">3</span>
                  <span>Adaptation of writing style for different rhetorical situations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-primary/10 text-primary font-medium">4</span>
                  <span>Critical engagement with contemporary social and cultural issues</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Writing Samples */}
      <div className="space-y-12">
        {academicSamples.map((sample, index) => (
          <div key={sample.id} className="reveal-element">
            <WritingSample sample={sample} />
          </div>
        ))}
      </div>
      
      {/* Footer Note */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-3 bg-white rounded-full shadow-md text-sm text-muted-foreground">
          The full portfolio contains additional academic writing samples not shown here
        </div>
      </div>
    </div>
  );
}