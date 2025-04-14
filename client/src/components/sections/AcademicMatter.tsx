import WritingSample from "@/components/writing/WritingSample";
import { academicSamples } from "@/data/portfolio-data";
import academicBgSvg from "@/assets/images/academic-bg.svg";
import { Card, CardContent } from "@/components/ui/card";
import photoPlaceholder1 from "@/assets/images/photo-placeholder-1.svg";
import photoPlaceholder2 from "@/assets/images/photo-placeholder-2.svg";
import photoPlaceholder3 from "@/assets/images/photo-placeholder-3.svg";
import photoPlaceholder4 from "@/assets/images/photo-placeholder-4.svg";
import assignmentPlaceholder from "@/assets/images/assignment-placeholder.svg";
import galleryPlaceholder from "@/assets/images/gallery-placeholder.svg";

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
      
      {/* Photo Gallery Row */}
      <div className="mb-12 reveal-element">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img src={assignmentPlaceholder} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img src={assignmentPlaceholder} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Intro Card */}
      <Card className="content-card animated-bg mb-12 reveal-element">
        <CardContent className="p-8">
          <h2 className="section-heading">About This Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-3">
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
                
                <div className="md:col-span-1">
                  <div className="image-frame h-full overflow-hidden">
                    <img 
                      src={photoPlaceholder2} 
                      alt="Add photo here" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white/70 p-6 rounded-xl border border-primary/10 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Key Skills Demonstrated</h3>
                <div className="flex justify-center mb-6">
                  <div className="image-frame w-28 h-28 overflow-hidden rounded-full">
                    <img 
                      src={photoPlaceholder4} 
                      alt="Add photo here" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
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
          </div>
        </CardContent>
      </Card>
      
      {/* Image Row - Mid section */}
      <div className="reveal-element mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="image-frame aspect-video overflow-hidden">
            <img src={assignmentPlaceholder} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="image-frame aspect-video overflow-hidden">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Writing Samples */}
      <div className="space-y-16">
        {academicSamples.map((sample, index) => (
          <div key={sample.id}>
            <div className="reveal-element">
              <WritingSample sample={sample} />
            </div>
            
            {/* Add images between writing samples */}
            {index < academicSamples.length - 1 && (
              <div className="my-12 reveal-element">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="image-frame aspect-square overflow-hidden">
                    <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="image-frame aspect-square overflow-hidden">
                    <img src={assignmentPlaceholder} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="image-frame aspect-square overflow-hidden">
                    <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="image-frame aspect-square overflow-hidden">
                    <img src={photoPlaceholder4} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Full width gallery image */}
      <div className="reveal-element my-16">
        <Card className="overflow-hidden border border-primary/10 shadow-lg">
          <div className="p-6 bg-primary/5 border-b border-primary/10">
            <h3 className="text-2xl font-semibold text-center">Assignment Gallery</h3>
          </div>
          <CardContent className="p-8">
            <div className="image-frame w-full overflow-hidden rounded-lg">
              <img 
                src={galleryPlaceholder} 
                alt="Assignment gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </CardContent>
        </Card>
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