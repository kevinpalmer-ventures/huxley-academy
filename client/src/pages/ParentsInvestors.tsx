import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Brain, TrendingUp, Users, Globe, Lightbulb, Shield } from "lucide-react";

export default function ParentsInvestors() {
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
              <Link href="/about">
                <Button variant="ghost" className="text-white hover:text-purple-300">About</Button>
              </Link>
              <Link href="/enrollment">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Apply Now</Button>
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

        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investing in AI Literacy.<br />
              <span className="text-purple-400">Investing in the Future.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For parents, community leaders, and visionaries who understand that the next generation needs more than just coding skills—they need foundational literacy for an AI-driven world.
            </p>
          </div>

          {/* Key Value Props */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-green-400 mb-4" />
                <CardTitle className="text-2xl text-white">Why AI Literacy Matters Now</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  The workforce of tomorrow will not just use AI; they will collaborate with it, manage it, and build upon it. 
                  Early literacy provides a critical competitive advantage and a framework for ethical leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Globe className="h-10 w-10 text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-white">Market Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  As AI integrates into every sector—from medicine to law to the arts—the demand for professionals who can 
                  navigate these systems with confidence and nuance is exploding. Huxley Academy meets this demand head-on.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-yellow-400 mb-4" />
                <CardTitle className="text-2xl text-white">Early-Mover Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  While others focus on short-term coding bootcamps, Huxley Academy is establishing itself as a lasting 
                  institution for deep, foundational literacy—positioning our students as pioneers in a new academic discipline.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-10 w-10 text-pink-400 mb-4" />
                <CardTitle className="text-2xl text-white">Community Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Supporting Huxley Academy means supporting a vision where technology serves the community. We are building 
                  a hub for thoughtful discussion, ethical innovation, and responsible civic engagement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision for Growth */}
          <section className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-white/10 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision for Growth</h2>
              <p className="text-gray-300">From a local academy to a national model for AI education.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-white font-bold mb-2">Local Impact</h3>
                <p className="text-gray-400 text-sm">Establishing a flagship campus and community hub.</p>
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-white font-bold mb-2">Regional Expansion</h3>
                <p className="text-gray-400 text-sm">Partnering with school districts and community centers.</p>
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-white font-bold mb-2">National Model</h3>
                <p className="text-gray-400 text-sm">Setting the standard for K-12 AI literacy curriculum.</p>
              </div>
            </div>
          </section>

          {/* Social Impact */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Shield className="h-12 w-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Social Impact</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We believe that understanding AI is a civil right in the 21st century. By democratizing access to this 
              knowledge, we ensure that the future is shaped by a diverse generation of informed, ethical leaders—not 
              just a select few.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Join Us in Building the Future</h3>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  Contact Leadership
                </Button>
              </Link>
              <Link href="/enrollment">
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-950 px-8">
                  Enroll a Student
                </Button>
              </Link>
            </div>
          </div>
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
