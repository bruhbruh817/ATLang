import { useState } from 'react';
import { WritingSample as WritingSampleType } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, FileText, BookText, Pencil, History } from 'lucide-react';
import writingBgSvg from "@/assets/images/writing-bg.svg";

interface WritingSampleProps {
  sample: WritingSampleType;
}

export default function WritingSample({ sample }: WritingSampleProps) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <Card className="shadow-lg overflow-hidden border border-primary/10 bg-white">
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url(${writingBgSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <CardHeader className="space-y-1 border-b bg-muted/10 backdrop-blur-sm p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-2xl md:text-3xl font-bold">{sample.title}</CardTitle>
          <Badge 
            variant="secondary" 
            className="font-medium bg-white shadow-sm border border-primary/20"
          >
            {sample.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm">
          <CalendarIcon className="h-4 w-4" />
          {sample.date}
        </CardDescription>
      </CardHeader>

      <Tabs 
        defaultValue="preview" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="w-full"
      >
        <div className="px-6 pt-6">
          <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/20 shadow-inner rounded-full">
            <TabsTrigger 
              value="preview" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-full flex items-center gap-2"
            >
              <BookText className="h-4 w-4" />
              <span className="hidden sm:inline">Preview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="prefatory" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-full flex items-center gap-2"
            >
              <Pencil className="h-4 w-4" />
              <span className="hidden sm:inline">Prefatory Notes</span>
            </TabsTrigger>
            <TabsTrigger 
              value="versions" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-full flex items-center gap-2"
            >
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">Versions</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="px-6 pt-6">
          <CardContent className="p-0 pb-6">
            <div className="bg-white/80 rounded-xl p-5 shadow-sm border border-primary/5 mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b border-primary/10">
                {sample.preview.title}
              </h3>
              {sample.preview.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="prefatory" className="px-6 pt-6">
          <CardContent className="space-y-6 p-0 pb-6">
            <div className="bg-white/80 rounded-xl p-5 shadow-sm border border-primary/5">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-primary/10 text-primary font-bold">1</span>
                Assignment Explanation
              </h3>
              <div className="pl-9">
                <p className="text-gray-700">{sample.prefatory.explanation}</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-xl p-5 shadow-sm border border-primary/5">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-primary/10 text-primary font-bold">2</span>
                My Approach
              </h3>
              <div className="pl-9">
                <p className="text-gray-700">{sample.prefatory.approach}</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-xl p-5 shadow-sm border border-primary/5">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-primary/10 text-primary font-bold">3</span>
                Strengths & Weaknesses
              </h3>
              <div className="pl-9">
                <p className="text-gray-700">{sample.prefatory.strengthsWeaknesses}</p>
              </div>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="versions" className="px-6 pt-6">
          <CardContent className="space-y-4 p-0 pb-6">
            <div className="bg-white/80 rounded-xl p-5 shadow-sm border border-primary/5">
              <h3 className="text-lg md:text-xl font-semibold mb-4 border-b border-primary/10 pb-2">
                Writing Process & Revisions
              </h3>
              <div className="grid gap-3">
                {sample.versions.map((version, index) => (
                  <div
                    key={version}
                    className={`flex items-center p-4 rounded-lg transition-all duration-200 ${
                      version === sample.activeVersion
                        ? "bg-primary/10 border border-primary/30 shadow-sm"
                        : "bg-white border border-primary/5 hover:border-primary/20"
                    }`}
                  >
                    <div className="mr-3 flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        version === sample.activeVersion
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className={
                        version === sample.activeVersion
                          ? "font-medium text-primary"
                          : "font-medium text-gray-700"
                      }>
                        {version}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {index === 0 ? "Initial draft" : 
                         index === sample.versions.length - 1 ? "Final version" : 
                         `Revision #${index}`}
                      </p>
                    </div>
                    
                    {version === sample.activeVersion && (
                      <Badge variant="secondary" className="ml-auto bg-white shadow-sm border border-primary/20">
                        Current
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mt-5 italic">
                Note: Full document versions would be available to view or download in a complete portfolio.
              </p>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="border-t bg-primary/5 px-6 py-5 flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <p className="text-sm text-gray-600">
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