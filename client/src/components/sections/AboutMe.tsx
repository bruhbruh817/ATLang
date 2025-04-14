import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/images/profile-placeholder.svg";
import photoPlaceholder1 from "@/assets/images/photo-placeholder-1.svg";
import photoPlaceholder2 from "@/assets/images/photo-placeholder-2.svg";
import photoPlaceholder3 from "@/assets/images/photo-placeholder-3.svg";
import galleryPlaceholder from "@/assets/images/gallery-placeholder.svg";

export default function AboutMe() {
  return (
    <div className="space-y-12">
      {/* Hero section with image */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="hero-text mb-4">About Me</h1>
            <p className="hero-subtext">
              My journey as a writer and student exploring language, ideas, and expression
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="image-frame w-60 h-60 md:w-72 md:h-72 relative border-2 border-blue-800 rounded-lg overflow-hidden">
              <img 
                src={profilePlaceholder} 
                alt="Student profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Section */}
      <div className="mb-12 reveal-element">
        <h2 className="text-3xl font-bold mb-8 text-blue-200 text-center relative inline-block">
          My Journey in Pictures
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-700 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="aspect-[4/3] overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Main content and info section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="content-card h-full bg-black border-2 border-blue-800">
            <CardContent className="p-8 space-y-6">
              <div className="reveal-element">
                <h2 className="text-2xl font-bold mb-6 text-blue-300">Hello, I'm [Student Name]</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                  <div className="md:col-span-3">
                    <p className="text-blue-100 text-lg mb-4">
                      I'm a senior at Westlake High School with a passion for writing that spans academic analysis, 
                      creative expression, and everything in between. This portfolio showcases selected pieces from my 
                      AP Language and Composition class, along with writing from beyond the classroom.
                    </p>
                    
                    <p className="text-blue-100 text-lg mb-4">
                      My writing journey began in early childhood, when I filled countless notebooks with stories. 
                      As I've grown as a student and writer, I've developed a special interest in using rhetoric to 
                      explore complex social issues and personal experiences.
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="h-full overflow-hidden border-2 border-blue-800 rounded-lg">
                      <img 
                        src={photoPlaceholder2} 
                        alt="Add photo here" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="reveal-element pt-4">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300 relative inline-block">
                  My Writing Philosophy
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-700"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 order-2 md:order-1">
                    <div className="h-full overflow-hidden border-2 border-blue-800 rounded-lg">
                      <img 
                        src={photoPlaceholder3} 
                        alt="Add photo here" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 order-1 md:order-2">
                    <p className="text-blue-100 text-lg mb-4">
                      I believe that effective writing serves as a bridge between minds—allowing us to share experiences 
                      and perspectives across time and space. Whether analyzing literature, constructing arguments, or 
                      reflecting on personal experiences, I approach writing as an opportunity to discover what I think 
                      by seeing what I say.
                    </p>
                    
                    <p className="text-blue-100 text-lg">
                      Through this AP Language and Composition course, I've developed a deeper understanding of how 
                      rhetorical choices shape communication. I've learned to pay closer attention to audience, purpose, 
                      and context—skills that have transformed not just my academic writing but my ability to communicate 
                      effectively in all areas of life.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-1">
          <Card className="content-card h-full bg-black border-2 border-blue-800">
            <CardContent className="p-8 space-y-6">
              <div className="reveal-element">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300 relative inline-block">
                  Key Growth Areas
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-700"></span>
                </h3>
                
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-black rounded-lg shadow-sm border-2 border-blue-900">
                    <h4 className="font-medium mb-1 text-blue-400">Writing Process</h4>
                    <p className="text-blue-100">Developing a more intentional approach that embraces revision</p>
                  </div>
                  
                  <div className="p-4 bg-black rounded-lg shadow-sm border-2 border-blue-900">
                    <h4 className="font-medium mb-1 text-blue-400">Argumentation</h4>
                    <p className="text-blue-100">Constructing compelling arguments with relevant evidence</p>
                  </div>
                  
                  <div className="p-4 bg-black rounded-lg shadow-sm border-2 border-blue-900">
                    <h4 className="font-medium mb-1 text-blue-400">Adaptability</h4>
                    <p className="text-blue-100">Adjusting tone and style for different audiences and purposes</p>
                  </div>
                  
                  <div className="p-4 bg-black rounded-lg shadow-sm border-2 border-blue-900">
                    <h4 className="font-medium mb-1 text-blue-400">Analysis</h4>
                    <p className="text-blue-100">Examining rhetorical strategies in texts from various periods</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Full width gallery */}
      <div className="reveal-element my-16">
        <Card className="overflow-hidden bg-black border-2 border-blue-800 shadow-lg">
          <div className="p-6 bg-blue-900/20 border-b-2 border-blue-800">
            <h3 className="text-2xl font-semibold text-blue-300 text-center">My Photo Gallery</h3>
          </div>
          <CardContent className="p-8">
            <div className="w-full overflow-hidden rounded-lg border-2 border-blue-900">
              <img 
                src={galleryPlaceholder} 
                alt="Photo gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
                <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
                <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
                <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
                <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-12 reveal-element">
        <div className="inline-block p-3 bg-black rounded-full shadow-md text-sm border-2 border-blue-900 text-blue-200">
          This portfolio showcases selected work from August 2024 to April 2025
        </div>
      </div>
    </div>
  );
}