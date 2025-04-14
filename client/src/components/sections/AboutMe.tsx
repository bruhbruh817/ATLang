import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/images/profile-placeholder.svg";
import photoPlaceholder1 from "@/assets/images/photo-placeholder-1.svg";
import photoPlaceholder2 from "@/assets/images/photo-placeholder-2.svg";
import photoPlaceholder3 from "@/assets/images/photo-placeholder-3.svg";
import galleryPlaceholder from "@/assets/images/gallery-placeholder.svg";

export default function AboutMe() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h1>
            <p className="text-lg text-blue-200">
              My journey as a writer and student exploring language, ideas, and expression
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="w-60 h-60 md:w-72 md:h-72 relative border-2 border-blue-800 rounded-lg overflow-hidden">
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
      
      {/* Main content */}
      <Card className="bg-black border-2 border-blue-800">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">Hello, I'm [Student Name]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-100 mb-4">
                I'm a senior at Westlake High School with a passion for writing that spans academic analysis, 
                creative expression, and everything in between. This portfolio showcases selected pieces from my 
                AP Language and Composition class, along with writing from beyond the classroom.
              </p>
              
              <p className="text-blue-100 mb-4">
                My writing journey began in early childhood, when I filled countless notebooks with stories. 
                As I've grown as a student and writer, I've developed a special interest in using rhetoric to 
                explore complex social issues and personal experiences.
              </p>
              
              <p className="text-blue-100">
                Through this AP Language and Composition course, I've developed a deeper understanding of how 
                rhetorical choices shape communication. I've learned to pay closer attention to audience, purpose, 
                and context—skills that have transformed not just my academic writing but my ability to communicate 
                effectively in all areas of life.
              </p>
            </div>
            
            <div>
              <div className="overflow-hidden border-2 border-blue-800 rounded-lg mb-6">
                <img 
                  src={photoPlaceholder2} 
                  alt="Student photo" 
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">My Writing Philosophy</h3>
              <p className="text-blue-100">
                I believe that effective writing serves as a bridge between minds—allowing us to share experiences 
                and perspectives across time and space. Whether analyzing literature, constructing arguments, or 
                reflecting on personal experiences, I approach writing as an opportunity to discover what I think 
                by seeing what I say.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Growth areas */}
      <Card className="bg-black border-2 border-blue-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Key Growth Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-black rounded-lg border-2 border-blue-900">
              <h4 className="font-medium mb-1 text-blue-400">Writing Process</h4>
              <p className="text-blue-100">Developing a more intentional approach that embraces revision</p>
            </div>
            
            <div className="p-4 bg-black rounded-lg border-2 border-blue-900">
              <h4 className="font-medium mb-1 text-blue-400">Argumentation</h4>
              <p className="text-blue-100">Constructing compelling arguments with relevant evidence</p>
            </div>
            
            <div className="p-4 bg-black rounded-lg border-2 border-blue-900">
              <h4 className="font-medium mb-1 text-blue-400">Adaptability</h4>
              <p className="text-blue-100">Adjusting tone and style for different audiences and purposes</p>
            </div>
            
            <div className="p-4 bg-black rounded-lg border-2 border-blue-900">
              <h4 className="font-medium mb-1 text-blue-400">Analysis</h4>
              <p className="text-blue-100">Examining rhetorical strategies in texts from various periods</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Photo gallery */}
      <Card className="bg-black border-2 border-blue-800">
        <div className="p-6 bg-blue-900/20 border-b-2 border-blue-800">
          <h3 className="text-2xl font-semibold text-blue-300 text-center">My Photo Gallery</h3>
        </div>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
              <img src={photoPlaceholder1} alt="Gallery image" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
              <img src={photoPlaceholder3} alt="Gallery image" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden border-2 border-blue-900 rounded-lg">
              <img src={photoPlaceholder1} alt="Gallery image" className="w-full h-full object-cover" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center mt-8">
        <div className="inline-block p-3 bg-black rounded-full shadow-md text-sm border-2 border-blue-900 text-blue-200">
          This portfolio showcases selected work from August 2024 to April 2025
        </div>
      </div>
    </div>
  );
}