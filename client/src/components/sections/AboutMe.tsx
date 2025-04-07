import { Card, CardContent } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-xl text-muted-foreground mt-2">
          My journey as a writer and student
        </p>
      </div>
      
      <Card className="shadow-md overflow-hidden">
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Hello, I'm [Student Name]</h2>
            <p className="text-muted-foreground mb-4">
              I'm a senior at Westlake High School with a passion for writing that spans academic analysis, 
              creative expression, and everything in between. This portfolio showcases selected pieces from my 
              AP Language and Composition class, along with writing from beyond the classroom.
            </p>
            
            <p className="text-muted-foreground mb-4">
              My writing journey began in early childhood, when I filled countless notebooks with stories. 
              As I've grown as a student and writer, I've developed a special interest in using rhetoric to 
              explore complex social issues and personal experiences. The pieces collected here represent 
              significant moments in my evolution as a writer during my junior and senior years.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">My Writing Philosophy</h3>
            <p className="text-muted-foreground mb-4">
              I believe that effective writing serves as a bridge between minds—allowing us to share experiences 
              and perspectives across time and space. Whether analyzing literature, constructing arguments, or 
              reflecting on personal experiences, I approach writing as an opportunity to discover what I think 
              by seeing what I say.
            </p>
            
            <p className="text-muted-foreground">
              Through this AP Language and Composition course, I've developed a deeper understanding of how 
              rhetorical choices shape communication. I've learned to pay closer attention to audience, purpose, 
              and context—skills that have transformed not just my academic writing but my ability to communicate 
              effectively in all areas of life.
            </p>
          </div>
          
          <div className="p-5 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Key Growth Areas</h3>
            <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
              <li>Developing a more intentional writing process that embraces revision</li>
              <li>Constructing compelling arguments supported by relevant evidence</li>
              <li>Adapting tone and style for different audiences and purposes</li>
              <li>Analyzing rhetorical strategies in texts from various time periods</li>
              <li>Incorporating feedback to strengthen my writing</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-sm text-muted-foreground text-center mt-6">
        This portfolio showcases selected work from August 2024 to April 2025
      </div>
    </div>
  );
}