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
          

        </p>
        <p className="text-muted-foreground">
         

        </p>
      </div>
      
      <WritingSample sample={beyondClassroomSample} />
      
      <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-primary">Other Beyond-the-Classroom Writing</h3>
        <ul className="space-y-3 ml-6 list-disc">
          <li className="text-muted-foreground">
            <span className="font-medium text-foreground">School Newspaper Articles</span>
            <p className="mt-1">
              

            </p>
          </li>
          <li className="text-muted-foreground">
            <span className="font-medium text-foreground">Creative Writing Collection</span>
            <p className="mt-1">
             

            </p>
          </li>
          <li className="text-muted-foreground">
            <span className="font-medium text-foreground">Community Blog</span>
            <p className="mt-1">
              
              
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