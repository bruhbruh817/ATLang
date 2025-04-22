import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AcademicMatter() {
  return (
    <div className="space-y-24 px-6 max-w-6xl mx-auto">
      <div className="text-center pt-12">
        <h1 className="text-5xl font-bold text-blue-300 mb-4">Academic Matter</h1>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Choose a piece below to explore an individual writing project in depth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-black border-2 border-blue-800">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-bold text-blue-300">Descriptive Narrative</h2>
            <p className="text-blue-100">
              A reflection on pressure and authenticity during an interview.
            </p>
            <Link
              href="/academic/descriptive-narrative"
              className="inline-block px-4 py-2 bg-blue-900 text-blue-100 rounded border border-blue-700 hover:bg-blue-800 transition"
            >
              View Project →
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-black border-2 border-blue-800">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-bold text-blue-300">Argumentative Essay</h2>
            <p className="text-blue-100">
              An essay on digital privacy and the evolving role of regulation.
            </p>
            <Link
              href="/academic/argumentative-essay"
              className="inline-block px-4 py-2 bg-blue-900 text-blue-100 rounded border border-blue-700 hover:bg-blue-800 transition"
            >
              View Project →
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-black border-2 border-blue-800">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-bold text-blue-300">Literary Analysis</h2>
            <p className="text-blue-100">
              A breakdown of The Great Gatsby and the American Dream.
            </p>
            <Link
              href="/academic/literary-analysis"
              className="inline-block px-4 py-2 bg-blue-900 text-blue-100 rounded border border-blue-700 hover:bg-blue-800 transition"
            >
              View Project →
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-blue-400 pb-6">
        <p>Designed with ❤️ by Sadi Bulut • AP Lang Portfolio Defense 2025</p>
      </div>
    </div>
  );
}
