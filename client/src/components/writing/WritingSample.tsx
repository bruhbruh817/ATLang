import { useState } from 'react';
import { WritingSample as WritingSampleType } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, FileText } from 'lucide-react';

interface WritingSampleProps {
  sample: WritingSampleType;
}

export default function WritingSample({ sample }: WritingSampleProps) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="space-y-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-2xl font-bold">{sample.title}</CardTitle>
          <Badge variant="secondary" className="font-medium">
            {sample.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm">
          <CalendarIcon className="h-4 w-4" />
          {sample.date}
        </CardDescription>
      </CardHeader>

      <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mx-6 mb-2 grid w-auto grid-cols-3">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="prefatory">Prefatory Notes</TabsTrigger>
          <TabsTrigger value="versions">Versions</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="px-6">
          <CardContent className="p-0 pb-6">
            <h3 className="text-xl font-semibold mb-3">{sample.preview.title}</h3>
            {sample.preview.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </TabsContent>

        <TabsContent value="prefatory" className="px-6">
          <CardContent className="space-y-4 p-0 pb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Assignment Explanation</h3>
              <p className="text-muted-foreground">{sample.prefatory.explanation}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">My Approach</h3>
              <p className="text-muted-foreground">{sample.prefatory.approach}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Strengths & Weaknesses</h3>
              <p className="text-muted-foreground">{sample.prefatory.strengthsWeaknesses}</p>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="versions" className="px-6">
          <CardContent className="space-y-4 p-0 pb-6">
            <h3 className="text-lg font-semibold mb-3">Available Versions</h3>
            <div className="grid gap-2">
              {sample.versions.map((version) => (
                <div
                  key={version}
                  className={`flex items-center p-3 rounded-md border ${
                    version === sample.activeVersion
                      ? "border-primary bg-primary/10"
                      : "border-border"
                  }`}
                >
                  <FileText
                    className={`h-5 w-5 mr-2 ${
                      version === sample.activeVersion
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={
                      version === sample.activeVersion
                        ? "font-medium text-primary"
                        : "text-muted-foreground"
                    }
                  >
                    {version}
                  </span>
                  {version === sample.activeVersion && (
                    <Badge variant="outline" className="ml-auto">
                      Current
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Note: Full document versions would be available to view or download in a complete portfolio.
            </p>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="border-t bg-muted/50 px-6 py-4">
        <p className="text-xs text-muted-foreground">
          This writing sample demonstrates my ability to {
            sample.id === "rhetorical-analysis" ? "analyze the persuasive techniques used in influential texts" :
            sample.id === "argumentative-essay" ? "construct and support a coherent argument on a contemporary issue" :
            "reflect on personal experiences and connect them to broader themes"
          }
        </p>
      </CardFooter>
    </Card>
  );
}