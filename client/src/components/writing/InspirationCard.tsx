import { InspirationCategory } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import authorsSvg from "@/assets/images/icon-authors.svg";
import teachersSvg from "@/assets/images/icon-teachers.svg";
import experiencesSvg from "@/assets/images/icon-experiences.svg";

interface InspirationCardProps {
  category: InspirationCategory;
}

export default function InspirationCard({ category }: InspirationCardProps) {
  // Get the appropriate icon based on category id
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'authors':
        return authorsSvg;
      case 'teachers':
        return teachersSvg;
      case 'experiences':
        return experiencesSvg;
      default:
        return authorsSvg;
    }
  };

  return (
    <Card className="shadow-lg border-2 border-blue-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full bg-black">
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rotate-12 pointer-events-none"
        style={{
          backgroundImage: `url(${getCategoryIcon(category.id)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <CardHeader className="pb-4 border-b-2 border-blue-800 bg-blue-900/20">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-lg p-1 bg-black border-2 border-blue-700 shadow-sm">
            <img 
              src={getCategoryIcon(category.id)} 
              alt={category.title} 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-blue-300">{category.title}</CardTitle>
            <CardDescription className="text-blue-200">Writing influences</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-5">
          {category.items.map((item, index) => (
            <div key={`${category.id}-${index}`} className="relative">
              {index > 0 && <Separator className="my-5 bg-blue-800/50" />}
              <div className="bg-black rounded-lg p-4 transition-all duration-300 hover:shadow-md border-2 border-blue-900/50 hover:border-blue-700">
                <h4 className="font-semibold text-lg mb-2 text-blue-400">{item.title}</h4>
                <p className="text-blue-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}