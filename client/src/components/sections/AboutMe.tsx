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
            <h2 className="text-2xl font-semibold mb-3">Hello, I'm Sadi Bulut</h2>
            <p className="text-muted-foreground mb-4">
              Hello!, I am Sadi a rising senior and an avid writer, I a originally from the great country of turkey where we indeed do not eat turkeys, My English jounrey started 
              at the prime age of 5, I was a young child who didn't know a single word of english, One day i got an ipad as a birthday present, I started watching youtube videos and
              discivered my love for gaming and the western world, I quickly thaught myself english and asking my parents every week to visit either england and preferabliy the US,
              At the age of 9 my dream finally came true and i went to New York cit with my aunt, I went to summer school there for 2 months. Up to that popint in mylife it was truly the most 
              fun i had ever had 

            </p>
            
            <p className="text-muted-foreground mb-4">
             


            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">My Writing Philosophy</h3>
            <p className="text-muted-foreground mb-4">
              


            </p>
            
            <p className="text-muted-foreground">
              

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