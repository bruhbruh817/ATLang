import { InspirationCategory } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InspirationCardProps {
  category: InspirationCategory;
}

export default function InspirationCard({ category }: InspirationCardProps) {
  return (
    <Card className="shadow-md h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-muted/50 w-12 h-12 rounded-md text-2xl">
            {category.imagePlaceholder}
          </div>
          <div>
            <CardTitle className="text-xl">{category.title}</CardTitle>
            <CardDescription>Writing influences</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {category.items.map((item, index) => (
          <div key={`${category.id}-${index}`}>
            {index > 0 && <Separator className="my-3" />}
            <h4 className="font-medium mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}