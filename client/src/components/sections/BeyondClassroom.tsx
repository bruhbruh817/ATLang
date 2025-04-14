import WritingSample from "@/components/writing/WritingSample";
import { beyondClassroomSample } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import beyondBgSvg from "@/assets/images/beyond-bg.svg";
import { BookOpen, Edit, FileText } from "lucide-react";
import photoPlaceholder1 from "@/assets/images/photo-placeholder-1.svg";
import photoPlaceholder2 from "@/assets/images/photo-placeholder-2.svg";
import photoPlaceholder3 from "@/assets/images/photo-placeholder-3.svg";
import photoPlaceholder4 from "@/assets/images/photo-placeholder-4.svg";
import galleryPlaceholder from "@/assets/images/gallery-placeholder.svg";

export default function BeyondClassroom() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="hero-text mb-4">Beyond the Classroom</h1>
            <p className="hero-subtext">
              Writing that extends beyond academic requirements, showcasing personal growth and exploration
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="image-frame w-full max-w-md h-52 relative border-2 border-blue-800 rounded-lg overflow-hidden">
              <img 
                src={beyondBgSvg} 
                alt="Beyond classroom writing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Row */}
      <div className="mb-12 reveal-element">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder2} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Intro Card */}
      <Card className="content-card mb-12 reveal-element bg-black border-2 border-blue-800">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">About This Section</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-3">
                  <p className="text-blue-100 text-lg mb-4">
                    This section showcases writing I've done outside of formal class assignments. These pieces demonstrate 
                    how I've applied the skills developed in AP Language and Composition to other contexts, including college 
                    applications, creative writing, and personal projects.
                  </p>
                  <p className="text-blue-100 text-lg">
                    While these works weren't created for a grade, they represent important aspects of my identity as a writer 
                    and show how writing has become an essential tool for self-expression and communication in my life beyond 
                    academic requirements.
                  </p>
                </div>
                
                <div className="md:col-span-1">
                  <div className="h-full overflow-hidden border-2 border-blue-800 rounded-lg">
                    <img 
                      src={photoPlaceholder4} 
                      alt="Add photo here" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-black p-6 rounded-xl border-2 border-blue-900 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 text-center">Why It Matters</h3>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-blue-800">
                  <img 
                    src={photoPlaceholder1} 
                    alt="Add photo here" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-blue-100 italic mb-6">
                  "The writing we do for ourselves often reveals more about our authentic voice and interests than assigned work."
                </p>
                <div className="w-20 h-1 bg-blue-700 mx-auto mb-6 rounded-full"></div>
                <p className="text-center text-blue-100">
                  These personal projects show how I've integrated rhetorical strategies and writing techniques into my everyday communication.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Image Row - Mid section */}
      <div className="reveal-element mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Writing Sample */}
      <div className="reveal-element mb-12">
        <WritingSample sample={beyondClassroomSample} />
      </div>
      
      {/* Other Writing Projects with Photos */}
      <Card className="shadow-lg overflow-hidden border-2 border-blue-800 bg-black reveal-element mb-12">
        <div className="bg-blue-900/20 border-b-2 border-blue-800 px-6 py-5">
          <h3 className="text-2xl font-semibold text-blue-300">Other Beyond-the-Classroom Writing</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black rounded-xl overflow-hidden shadow-sm border-2 border-blue-900 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-blue-900">
                <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4 border-2 border-blue-800">
                  <BookOpen className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-blue-300">School Newspaper Articles</h4>
                <p className="text-blue-100">
                  As features editor for the Westlake Chronicle, I've written several articles exploring student life, 
                  including an in-depth piece on mental health resources that received regional recognition.
                </p>
              </div>
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden shadow-sm border-2 border-blue-900 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-blue-900">
                <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4 border-2 border-blue-800">
                  <Edit className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-blue-300">Creative Writing Collection</h4>
                <p className="text-blue-100">
                  A series of short stories exploring themes of identity and belonging, developed through the 
                  school's creative writing club.
                </p>
              </div>
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden shadow-sm border-2 border-blue-900 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-blue-900">
                <img src={photoPlaceholder2} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4 border-2 border-blue-800">
                  <FileText className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-blue-300">Community Blog</h4>
                <p className="text-blue-100">
                  Regular contributions to a local environmental action group's blog, focusing on youth perspectives 
                  on sustainability and climate action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Full width gallery image */}
      <div className="reveal-element mb-12">
        <div className="w-full aspect-[21/9] overflow-hidden border-2 border-blue-800 rounded-lg">
          <img src={galleryPlaceholder} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-3 bg-black rounded-full shadow-md text-sm border-2 border-blue-900 text-blue-200">
          Full versions of these additional works are available upon request
        </div>
      </div>
    </div>
  );
}