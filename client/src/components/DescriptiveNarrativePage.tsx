import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import Link from "next/link";

const DescriptiveNarrativePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-24 px-6 max-w-6xl mx-auto">
      <div className="text-center pt-12">
        <h1 className="text-5xl font-bold text-blue-300 mb-4">02 — Descriptive Narrative</h1>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          A reflection on growth, pressure, and truth told through a pivotal interview moment.
        </p>
      </div>

      {/* Prompt */}
      <Card className="bg-black border-2 border-blue-800">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-blue-300">The Prompt</h2>
          <p className="text-blue-100">
            This assignment was given to us at the beginning of the year during the transition from Ms. Gruber to Mrs. Holston. We could choose from various types of personal experiences, including:
          </p>
          <ul className="list-disc list-inside text-blue-100 space-y-1">
            <li>Any "first" — like the first time you felt needed, rejected, or discovered a skill</li>
            <li>A tough decision, a letdown, or a struggle to understand something</li>
            <li>Something that didn’t go as expected</li>
            <li>Moments that challenged your values or beliefs</li>
            <li>Humorous or embarrassing events that stuck with you</li>
            <li>Moments charged with strong emotions — love, fear, pride, happiness</li>
          </ul>
          <p className="text-blue-100">
            I chose #2 — a difficult decision I made during an intense interview for a technical position.
          </p>
        </CardContent>
      </Card>

      {/* Approach */}
      <Card className="bg-black border-2 border-blue-800">
        <CardContent className="p-8 space-y-4">
          <h2 className="text-2xl font-bold text-blue-300">My Approach</h2>
          <p className="text-blue-100">
            I wrote this piece as a cinematic narrative, layering internal thoughts with external pressure. I wanted to showcase how I shifted from rehearsed answers to raw authenticity — and how that shift made all the difference.
          </p>
        </CardContent>
      </Card>

      {/* Drafts */}
      <Card className="bg-black border-2 border-blue-800">
        <CardContent className="p-8 space-y-8">
          <h2 className="text-2xl font-bold text-blue-300">Draft Progression</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-blue-200">First Draft</h3>
            <p className="text-blue-100">
              This version struggled with cohesion and formatting. Dialogue was clunky and lacked clarity.
            </p>
            <img src="/drafts/sadi-draft-1.jpeg" alt="First Draft" className="rounded-lg border-2 border-blue-800" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-blue-200">Final Draft</h3>
            <p className="text-blue-100">
              I revised the pacing, fixed dialogue structure, and emphasized growth at the end. The narrative now flows smoothly and concludes with a clear personal insight.
            </p>
            <img src="/drafts/sadi-draft-final.jpeg" alt="Final Draft" className="rounded-lg border-2 border-blue-800" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-blue-200">If I Had a Third Draft...</h3>
            <ul className="list-disc list-inside text-blue-100 space-y-1">
              <li>Reframe the introduction with more urgency</li>
              <li>Make internal tension more vivid</li>
              <li>Format the final dialogue with more intentional breaks</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Strengths & Weaknesses */}
      <Card className="bg-black border-2 border-blue-800">
        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Strengths</h3>
            <p className="text-blue-100">
              I’m proud of the emotional pacing and vivid imagery. The personal growth arc is authentic and relatable, and the hook draws the reader in.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Weaknesses</h3>
            <p className="text-blue-100">
              Some sections feel overwritten, and I relied too heavily on italics. Future edits will focus on cutting fluff and improving structure.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center py-6">
        <Link href="/academic">
          <button className="px-4 py-2 bg-blue-900 text-blue-100 rounded-lg border border-blue-700 hover:bg-blue-800 transition">
            ← Back to Academic Samples
          </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-blue-400 pb-6">
        <p>Designed with ❤️ by Sadi Bulut • AP Lang Portfolio Defense 2025</p>
      </div>
    </div>
  );
};

export default DescriptiveNarrativePage;
