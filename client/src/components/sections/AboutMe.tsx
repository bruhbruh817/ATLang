import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/images/profile-placeholder.svg";
import abstractShapeSvg from "@/assets/images/abstract-shape.svg";
import photoPlaceholder1 from "@/assets/images/photo-placeholder-1.svg";
import photoPlaceholder2 from "@/assets/images/photo-placeholder-2.svg";
import photoPlaceholder3 from "@/assets/images/photo-placeholder-3.svg";
import photoPlaceholder4 from "@/assets/images/photo-placeholder-4.svg";
import galleryPlaceholder from "@/assets/images/gallery-placeholder.svg";

export default function AboutMe() {
  return (
    <div className="space-y-12">
      {/* Hero section with image */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="hero-text mb-4">About Me</h1>
            <p className="hero-subtext">
              My journey as a writer and student exploring language, ideas, and expression
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="image-frame w-60 h-60 md:w-72 md:h-72 relative">
              <img 
                src={profilePlaceholder} 
                alt="Student profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Section */}
      <div className="mb-12 reveal-element">
        <h2 className="text-3xl font-bold mb-8 text-center relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-primary/40 after:rounded-full">
          My Journey in Pictures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Main content and info section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="content-card animated-bg h-full">
            <CardContent className="p-8 space-y-6">
              <div className="reveal-element">
                <h2 className="section-heading">Hello, I'm [Student Name]</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                  <div className="md:col-span-3">
                    <p className="text-lg mb-4">
                      I'm a senior at Westlake High School with a passion for writing that spans academic analysis, 
                      creative expression, and everything in between. This portfolio showcases selected pieces from my 
                      AP Language and Composition class, along with writing from beyond the classroom.
                    </p>
                    
                    <p className="text-lg mb-4">
                      My writing journey began in early childhood, when I filled countless notebooks with stories. 
                      As I've grown as a student and writer, I've developed a special interest in using rhetoric to 
                      explore complex social issues and personal experiences.
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
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
              
              <div className="reveal-element pt-4">
                <h3 className="text-2xl font-semibold mb-3 relative inline-block">
                  My Writing Philosophy
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 order-2 md:order-1">
                    <div className="image-frame h-full overflow-hidden">
                      <img 
                        src={photoPlaceholder3} 
                        alt="Add photo here" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 order-1 md:order-2">
                    <p className="text-lg mb-4">
                      I believe that effective writing serves as a bridge between minds—allowing us to share experiences 
                      and perspectives across time and space. Whether analyzing literature, constructing arguments, or 
                      reflecting on personal experiences, I approach writing as an opportunity to discover what I think 
                      by seeing what I say.
                    </p>
                    
                    <p className="text-lg">
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
          <Card className="content-card h-full">
            <CardContent className="p-8 space-y-6">
              <div className="reveal-element">
                <h3 className="text-2xl font-semibold mb-4 relative inline-block">
                  Key Growth Areas
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40"></span>
                </h3>
                
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-primary/10">
                    <h4 className="font-medium mb-1 text-primary">Writing Process</h4>
                    <p>Developing a more intentional approach that embraces revision</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-primary/10">
                    <h4 className="font-medium mb-1 text-primary">Argumentation</h4>
                    <p>Constructing compelling arguments with relevant evidence</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-primary/10">
                    <h4 className="font-medium mb-1 text-primary">Adaptability</h4>
                    <p>Adjusting tone and style for different audiences and purposes</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-primary/10">
                    <h4 className="font-medium mb-1 text-primary">Analysis</h4>
                    <p>Examining rhetorical strategies in texts from various periods</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Full width gallery */}
      <div className="reveal-element my-16">
        <Card className="overflow-hidden border border-primary/10 shadow-lg">
          <div className="p-6 bg-primary/5 border-b border-primary/10">
            <h3 className="text-2xl font-semibold text-center">My Photo Gallery</h3>
          </div>
          <CardContent className="p-8">
            <div className="image-frame w-full overflow-hidden rounded-lg">
              <img 
                src={galleryPlaceholder} 
                alt="Photo gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="image-frame aspect-square overflow-hidden">
                <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="image-frame aspect-square overflow-hidden">
                <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="image-frame aspect-square overflow-hidden">
                <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="image-frame aspect-square overflow-hidden">
                <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-12 reveal-element">
        <div className="inline-block p-3 bg-white rounded-full shadow-md text-sm text-muted-foreground">
          This portfolio showcases selected work from August 2024 to April 2025
        </div>
      </div>
    </div>
  );
}