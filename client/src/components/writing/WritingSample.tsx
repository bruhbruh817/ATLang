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
    <Card className="shadow-lg overflow-hidden border-2 border-blue-800 bg-black">
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url(${writingBgSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <CardHeader className="space-y-1 border-b-2 border-blue-800 bg-blue-900/20 backdrop-blur-sm p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-2xl md:text-3xl font-bold text-blue-300">{sample.title}</CardTitle>
          <Badge 
            variant="secondary" 
            className="font-medium bg-black border-2 border-blue-700 text-blue-100"
          >
            {sample.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm text-blue-200">
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
          <TabsList className="grid w-full grid-cols-3 p-1 bg-blue-900/20 shadow-inner rounded-full border-2 border-blue-800">
            <TabsTrigger 
              value="preview" 
              className="data-[state=active]:bg-blue-900 data-[state=active]:shadow-sm data-[state=active]:text-blue-100 rounded-full flex items-center gap-2 text-blue-300"
            >
              <BookText className="h-4 w-4" />
              <span className="hidden sm:inline">Preview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="prefatory" 
              className="data-[state=active]:bg-blue-900 data-[state=active]:shadow-sm data-[state=active]:text-blue-100 rounded-full flex items-center gap-2 text-blue-300"
            >
              <Pencil className="h-4 w-4" />
              <span className="hidden sm:inline">Prefatory Notes</span>
            </TabsTrigger>
            <TabsTrigger 
              value="versions" 
              className="data-[state=active]:bg-blue-900 data-[state=active]:shadow-sm data-[state=active]:text-blue-100 rounded-full flex items-center gap-2 text-blue-300"
            >
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">Versions</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="px-6 pt-6">
          <CardContent className="p-0 pb-6">
            <div className="bg-black rounded-xl p-5 shadow-sm border-2 border-blue-900 mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b-2 border-blue-800 text-blue-300">
                {sample.preview.title}
              </h3>
              {sample.preview.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-blue-100 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="prefatory" className="px-6 pt-6">
          <CardContent className="space-y-6 p-0 pb-6">
            <div className="bg-black rounded-xl p-5 shadow-sm border-2 border-blue-900">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-300 flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-blue-900 text-blue-100 font-bold">1</span>
                Assignment Explanation
              </h3>
              <div className="pl-9">
                <p className="text-blue-100">{sample.prefatory.explanation}</p>
              </div>
            </div>
            
            <div className="bg-black rounded-xl p-5 shadow-sm border-2 border-blue-900">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-300 flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-blue-900 text-blue-100 font-bold">2</span>
                My Approach
              </h3>
              <div className="pl-9">
                <p className="text-blue-100">{sample.prefatory.approach}</p>
              </div>
            </div>
            
            <div className="bg-black rounded-xl p-5 shadow-sm border-2 border-blue-900">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-300 flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-blue-900 text-blue-100 font-bold">3</span>
                Strengths & Weaknesses
              </h3>
              <div className="pl-9">
                <p className="text-blue-100">{sample.prefatory.strengthsWeaknesses}</p>
              </div>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="versions" className="px-6 pt-6">
          <CardContent className="space-y-4 p-0 pb-6">
            <div className="bg-black rounded-xl p-5 shadow-sm border-2 border-blue-900">
              <h3 className="text-lg md:text-xl font-semibold mb-4 border-b-2 border-blue-800 pb-2 text-blue-300">
                Writing Process & Revisions
              </h3>
              <div className="grid gap-3">
                {sample.versions.map((version, index) => (
                  <div
                    key={version}
                    className={`flex items-center p-4 rounded-lg transition-all duration-200 ${
                      version === sample.activeVersion
                        ? "bg-blue-900/50 border-2 border-blue-700 shadow-sm"
                        : "bg-black border-2 border-blue-900 hover:border-blue-700"
                    }`}
                  >
                    <div className="mr-3 flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        version === sample.activeVersion
                          ? "bg-blue-700 text-blue-100"
                          : "bg-blue-900/30 text-blue-300 border-2 border-blue-800"
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className={
                        version === sample.activeVersion
                          ? "font-medium text-blue-100"
                          : "font-medium text-blue-300"
                      }>
                        {version}
                      </h4>
                      <p className="text-sm text-blue-200">
                        {index === 0 ? "Initial draft" : 
                         index === sample.versions.length - 1 ? "Final version" : 
                         `Revision #${index}`}
                      </p>
                    </div>
                    
                    {version === sample.activeVersion && (
                      <Badge variant="secondary" className="ml-auto bg-black border-2 border-blue-700 text-blue-100">
                        Current
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-blue-300 mt-5 italic">
                Note: Full document versions would be available to view or download in a complete portfolio.
              </p>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="border-t-2 border-blue-800 bg-blue-900/20 px-6 py-5 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <p className="text-sm text-blue-200">
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