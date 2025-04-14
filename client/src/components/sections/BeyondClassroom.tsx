import WritingSample from "@/components/writing/WritingSample";
import { beyondClassroomSample } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import beyondBgSvg from "@/assets/images/beyond-bg.svg";
import { BookOpen, Edit, FileText } from "lucide-react";

export default function BeyondClassroom() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="hero-text mb-4">Beyond the Classroom</h1>
            <p className="hero-subtext">
              Writing that extends beyond academic requirements, showcasing personal growth and exploration
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="image-frame w-full max-w-md h-52 relative">
              <img 
                src={beyondBgSvg} 
                alt="Beyond classroom writing" 
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <p className="text-lg mb-4">
                This section showcases writing I've done outside of formal class assignments. These pieces demonstrate 
                how I've applied the skills developed in AP Language and Composition to other contexts, including college 
                applications, creative writing, and personal projects.
              </p>
              <p className="text-lg">
                While these works weren't created for a grade, they represent important aspects of my identity as a writer 
                and show how writing has become an essential tool for self-expression and communication in my life beyond 
                academic requirements.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white/70 p-6 rounded-xl border border-primary/10 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4 text-primary text-center">Why It Matters</h3>
                <p className="text-center italic mb-6">
                  "The writing we do for ourselves often reveals more about our authentic voice and interests than assigned work."
                </p>
                <div className="w-20 h-1 bg-primary/20 mx-auto mb-6 rounded-full"></div>
                <p className="text-center">
                  These personal projects show how I've integrated rhetorical strategies and writing techniques into my everyday communication.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Writing Sample */}
      <div className="reveal-element mb-12">
        <WritingSample sample={beyondClassroomSample} />
      </div>
      
      {/* Other Writing Projects */}
      <Card className="shadow-lg overflow-hidden border border-primary/10 bg-white reveal-element">
        <div className="bg-primary/5 border-b border-primary/10 px-6 py-5">
          <h3 className="text-2xl font-semibold text-primary">Other Beyond-the-Classroom Writing</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/5 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">School Newspaper Articles</h4>
              <p className="text-gray-700">
                As features editor for the Westlake Chronicle, I've written several articles exploring student life, 
                including an in-depth piece on mental health resources that received regional recognition.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/5 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Edit className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Creative Writing Collection</h4>
              <p className="text-gray-700">
                A series of short stories exploring themes of identity and belonging, developed through the 
                school's creative writing club.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/5 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Community Blog</h4>
              <p className="text-gray-700">
                Regular contributions to a local environmental action group's blog, focusing on youth perspectives 
                on sustainability and climate action.
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Footer Note */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-3 bg-white rounded-full shadow-md text-sm text-muted-foreground">
          Full versions of these additional works are available upon request
        </div>
      </div>
    </div>
  );
}