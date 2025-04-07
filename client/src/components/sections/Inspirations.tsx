import InspirationCard from "@/components/writing/InspirationCard";
import { inspirationCategories } from "@/data/portfolio-data";

export default function Inspirations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Inspirations</h1>
        <p className="text-xl text-muted-foreground mt-2">
          The influences that shape my writing
        </p>
      </div>
      
      <div className="bg-muted/30 p-5 rounded-lg my-6">
        <h2 className="text-xl font-semibold mb-3">About This Section</h2>
        <p className="text-muted-foreground mb-3">
          This section explores the authors, teachers, and experiences that have shaped my development as a writer. 
          Understanding these influences provides context for my writing choices and stylistic preferences.
        </p>
        <p className="text-muted-foreground">
          By recognizing these inspirations, I've become more conscious of how I can intentionally incorporate 
          techniques and approaches from writers I admire while developing my own distinctive voice.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {inspirationCategories.map((category) => (
          <InspirationCard key={category.id} category={category} />
        ))}
      </div>
      
      <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4">Reflection on Influences</h3>
        <p className="text-muted-foreground mb-3">
          The diverse influences listed above have collectively shaped my approach to writing in several ways. From 
          Joan Didion, I've learned the power of precision and emotional restraint. James Baldwin has taught me how 
          to weave personal experience with social commentary. Tim O'Brien's work showed me how to blur the 
          boundaries between memoir and fiction in service of emotional truth.
        </p>
        <p className="text-muted-foreground mb-3">
          My teachers have been equally influential. Ms. Rivera's focus on rigorous revision transformed my writing 
          process, while Mr. Chen's emphasis on anticipating counterarguments has strengthened my persuasive writing. 
          These mentors have given me specific techniques that I now apply consciously in my work.
        </p>
        <p className="text-muted-foreground">
          As I continue to develop as a writer, I expect this constellation of influences to grow and evolve, 
          reflecting my changing interests and expanding reading. I look forward to discovering new writers and 
          approaches that will further shape my voice.
        </p>
      </div>
      
      <div className="text-sm text-muted-foreground text-center mt-6">
        "Good writers borrow, great writers steal." — T.S. Eliot (allegedly)
      </div>
    </div>
  );
}