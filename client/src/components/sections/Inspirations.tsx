import InspirationCard from "@/components/writing/InspirationCard";
import { inspirationCategories } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import inspirationsBgSvg from "@/assets/images/inspirations-bg.svg";
import { Quote } from "lucide-react";
import photoPlaceholder1 from "@/assets/images/photo-placeholder-1.svg";
import photoPlaceholder2 from "@/assets/images/photo-placeholder-2.svg";
import photoPlaceholder3 from "@/assets/images/photo-placeholder-3.svg";
import photoPlaceholder4 from "@/assets/images/photo-placeholder-4.svg";
import galleryPlaceholder from "@/assets/images/gallery-placeholder.svg";

export default function Inspirations() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="hero-section mb-12 rounded-xl overflow-hidden reveal-element">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-1/2 z-10">
            <h1 className="hero-text mb-4">Inspirations</h1>
            <p className="hero-subtext">
              The influences that shape my writing journey and creative perspective
            </p>
          </div>
          
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end">
            <div className="image-frame w-full max-w-md h-52 relative border-2 border-blue-800 rounded-lg overflow-hidden">
              <img 
                src={inspirationsBgSvg} 
                alt="Creative inspirations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Row */}
      <div className="mb-12 reveal-element">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder2} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder4} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Intro Card */}
      <Card className="content-card mb-12 reveal-element bg-black border-2 border-blue-800">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">Influences That Shape My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <div className="md:col-span-3">
                  <p className="text-blue-100 text-lg mb-4">
                    This section explores the authors, teachers, and experiences that have shaped my development as a writer. 
                    Understanding these influences provides context for my writing choices and stylistic preferences.
                  </p>
                  <p className="text-blue-100 text-lg">
                    By recognizing these inspirations, I've become more conscious of how I can intentionally incorporate 
                    techniques and approaches from writers I admire while developing my own distinctive voice.
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
            
            <div className="md:col-span-5 md:border-l-2 border-blue-800 md:pl-8 flex items-center">
              <div className="bg-black p-6 rounded-xl border-2 border-blue-900 shadow-sm w-full">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4 mx-auto border-2 border-blue-800">
                  <Quote className="w-6 h-6 text-blue-300" />
                </div>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-blue-800">
                  <img 
                    src={photoPlaceholder1} 
                    alt="Add photo here" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center italic text-blue-100 mb-4">
                  "We are shaped and fashioned by what we love."
                </p>
                <p className="text-center text-sm text-blue-300">— Johann Wolfgang von Goethe</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Image Row - Mid section */}
      <div className="reveal-element mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-[4/3] overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder4} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="lg:block hidden aspect-[4/3] overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Inspiration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 reveal-element">
        {inspirationCategories.map((category) => (
          <InspirationCard key={category.id} category={category} />
        ))}
      </div>
      
      {/* Full width gallery image */}
      <div className="reveal-element mb-12">
        <div className="w-full aspect-[21/9] overflow-hidden border-2 border-blue-800 rounded-lg">
          <img src={galleryPlaceholder} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
      
      {/* Reflection */}
      <Card className="shadow-lg overflow-hidden bg-black border-2 border-blue-800 reveal-element mb-12">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5"
            style={{
              backgroundImage: `url(${inspirationsBgSvg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="bg-blue-900/20 border-b-2 border-blue-800 px-6 py-5">
            <h3 className="text-2xl font-semibold text-blue-300">Reflection on Influences</h3>
          </div>
          
          <div className="p-6 md:p-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <div className="md:col-span-3">
                <div className="space-y-4">
                  <p className="text-blue-100 leading-relaxed">
                    The diverse influences listed above have collectively shaped my approach to writing in several ways. From 
                    Joan Didion, I've learned the power of precision and emotional restraint. James Baldwin has taught me how 
                    to weave personal experience with social commentary. Tim O'Brien's work showed me how to blur the 
                    boundaries between memoir and fiction in service of emotional truth.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    My teachers have been equally influential. Ms. Rivera's focus on rigorous revision transformed my writing 
                    process, while Mr. Chen's emphasis on anticipating counterarguments has strengthened my persuasive writing. 
                    These mentors have given me specific techniques that I now apply consciously in my work.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="h-full overflow-hidden border-2 border-blue-800 rounded-lg">
                  <img 
                    src={photoPlaceholder3} 
                    alt="Add photo here" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-blue-100 leading-relaxed">
              As I continue to develop as a writer, I expect this constellation of influences to grow and evolve, 
              reflecting my changing interests and expanding reading. I look forward to discovering new writers and 
              approaches that will further shape my voice.
            </p>
          </div>
        </div>
      </Card>
      
      {/* Image grid before quote */}
      <div className="reveal-element mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder1} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder2} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder3} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden border-2 border-blue-800 rounded-lg">
            <img src={photoPlaceholder4} alt="Add photo here" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Quote */}
      <div className="text-center my-12 reveal-element">
        <div className="inline-block p-6 bg-black rounded-xl shadow-md text-blue-300 italic font-medium border-2 border-blue-800">
          "Good writers borrow, great writers steal." — T.S. Eliot (allegedly)
        </div>
      </div>
    </div>
  );
}