import WritingSample from "@/components/writing/WritingSample";
import { academicSamples } from "@/data/portfolio-data";

export default function AcademicMatter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Academic Matter</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Selected works from AP Language & Composition
        </p>
      </div>
      
      <div className="bg-muted/30 p-5 rounded-lg my-6">
        <h2 className="text-xl font-semibold mb-3">About This Section</h2>
        <p className="text-muted-foreground mb-3">
          
        </p>
        <p className="text-muted-foreground">
          
          
        </p>
      </div>
      
      {academicSamples.map((sample) => (
        <WritingSample key={sample.id} sample={sample} />
      ))}
      
      <div className="text-sm text-muted-foreground text-center mt-6">
        The full portfolio contains additional academic writing samples not shown here
      </div>
    </div>
  );
}