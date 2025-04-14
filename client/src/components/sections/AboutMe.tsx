import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/images/profile-placeholder.svg";
import abstractShapeSvg from "@/assets/images/abstract-shape.svg";

export default function AboutMe() {
  return (
    <div className="space-y-8">
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="content-card animated-bg h-full">
            <CardContent className="p-8 space-y-6">
              <div className="reveal-element">
                <h2 className="section-heading">Hello, I'm [Student Name]</h2>
                <p className="text-lg mb-4">
                  I'm a senior at Westlake High School with a passion for writing that spans academic analysis, 
                  creative expression, and everything in between. This portfolio showcases selected pieces from my 
                  AP Language and Composition class, along with writing from beyond the classroom.
                </p>
                
                <p className="text-lg mb-4">
                  My writing journey began in early childhood, when I filled countless notebooks with stories. 
                  As I've grown as a student and writer, I've developed a special interest in using rhetoric to 
                  explore complex social issues and personal experiences. The pieces collected here represent 
                  significant moments in my evolution as a writer during my junior and senior years.
                </p>
              </div>
              
              <div className="reveal-element pt-4">
                <h3 className="text-2xl font-semibold mb-3 relative inline-block">
                  My Writing Philosophy
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40"></span>
                </h3>
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
      
      <div className="text-center mt-12 reveal-element">
        <div className="inline-block p-3 bg-white rounded-full shadow-md text-sm text-muted-foreground">
          This portfolio showcases selected work from August 2024 to April 2025
        </div>
      </div>
    </div>
  );
}