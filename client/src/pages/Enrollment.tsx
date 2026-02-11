import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Brain, CheckCircle, Calendar, CreditCard } from "lucide-react";

export default function Enrollment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white tracking-tight">Huxley Academy</span>
            </div>
            <div className="hidden md:flex gap-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-purple-300">Home</Button>
              </Link>
              <Link href="/curriculum">
                <Button variant="ghost" className="text-white hover:text-purple-300">Curriculum</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-white hover:text-purple-300">About</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="text-purple-300 hover:text-purple-200 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Apply to Huxley Academy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join a community of young scholars shaping the future of artificial intelligence. 
              Applications are now open for the upcoming semester.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Application Process */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Application Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-purple-900/30 p-2 rounded-full h-fit text-purple-400 font-bold">1</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Submit Application</h3>
                    <p className="text-gray-400 text-sm">Complete the online form with student details and a short interest statement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-900/30 p-2 rounded-full h-fit text-purple-400 font-bold">2</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Student Interview</h3>
                    <p className="text-gray-400 text-sm">A brief, friendly video chat to assess curiosity and readiness (not technical skill).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-900/30 p-2 rounded-full h-fit text-purple-400 font-bold">3</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Enrollment Decision</h3>
                    <p className="text-gray-400 text-sm">Decisions are released within 2 weeks of interview completion.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tuition & Dates */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Program Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-white font-bold">Upcoming Cohort</h3>
                    <p className="text-gray-400 text-sm">Starts October 15th, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CreditCard className="h-6 w-6 text-green-400" />
                  <div>
                    <h3 className="text-white font-bold">Tuition</h3>
                    <p className="text-gray-400 text-sm">$495 per semester (Financial aid available)</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-purple-400" /> Weekly live instruction</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-purple-400" /> Access to premium AI tools</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-purple-400" /> Personal portfolio hosting</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-purple-400" /> AI Scholar Certificate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form Placeholder */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Begin?</h2>
            <p className="text-gray-300 mb-8">
              Take the first step towards AI literacy. The application takes about 10 minutes to complete.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl w-full md:w-auto">
              Start Application
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Questions? Email admissions@huxleyacademy.com
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Huxley Academy. AI Literacy Starts Here.</p>
        </div>
      </footer>
    </div>
  );
}
