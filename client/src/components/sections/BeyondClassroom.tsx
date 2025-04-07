import WritingSample from "@/components/writing/WritingSample";
import { beyondClassroomSample } from "@/data/portfolio-data";

export default function BeyondClassroom() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Beyond the Classroom</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Writing that extends beyond academic requirements
        </p>
      </div>
      
      <div className="bg-muted/30 p-5 rounded-lg my-6">
        <h2 className="text-xl font-semibold mb-3">About This Section</h2>
        <p className="text-muted-foreground mb-3">
          This section showcases writing I've done outside of formal class assignments. These pieces demonstrate 
          how I've applied the skills developed in AP Language and Composition to other contexts, including college 
          applications, creative writing, and personal projects.
        </p>
        <p className="text-muted-foreground">
          While these works weren't created for a grade, they represent important aspects of my identity as a writer 
          and show how writing has become an essential tool for self-expression and communication in my life beyond 
          academic requirements.
        </p>
      </div>
      
      <WritingSample sample={beyondClassroomSample} />
      
      <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-primary">Other Beyond-the-Classroom Writing</h3>
        <ul className="space-y-3 ml-6 list-disc">
          <li className="text-muted-foreground">
            <span className="font-medium text-foreground">School Newspaper Articles</span>
            <p className="mt-1">
              As features editor for the Westlake Chronicle, I've written several articles exploring student life, 
              including an in-depth piece on mental health resources that received regional recognition.
            </p>
          </li>
          <li className="text-muted-foreground">
            <span className="font-medium text-foreground">Creative Writing Collection</span>
            <p className="mt-1">
              A series of short stories exploring themes of identity and belonging, developed through the 
              school's creative writing club.
            </p>
          </li>
          <li className="text-muted-foreground">
            <span className="font-medium text-foreground">Community Blog</span>
            <p className="mt-1">
              Regular contributions to a local environmental action group's blog, focusing on youth perspectives 
              on sustainability and climate action.
            </p>
          </li>
        </ul>
      </div>
      
      <div className="text-sm text-muted-foreground text-center mt-6">
        Full versions of these additional works are available upon request
      </div>
    </div>
  );
}