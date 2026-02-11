import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Brain, School, Clock, Calendar, Users, CheckCircle } from "lucide-react";

export default function SchoolsPTOs() {
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
              Bring Huxley Academy<br />
              <span className="text-purple-400">To Your School</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us to provide world-class AI literacy education directly to your students. 
              Designed for PTO leaders, principals, and forward-thinking administrators.
            </p>
          </div>

          {/* Why It Matters */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why AI Literacy Matters in Middle School</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Future Workforce</h3>
                  <p className="text-gray-400">Preparing students for careers that will inevitably involve collaboration with intelligent systems.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Ethical Use</h3>
                  <p className="text-gray-400">Instilling a strong moral compass for using powerful technology responsibly and safely.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Academic Enrichment</h3>
                  <p className="text-gray-400">Enhancing critical thinking, research skills, and creative problem-solving across all subjects.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Program Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Models</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-purple-900/30 p-3 rounded-lg h-fit">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">After-School Programs</h3>
                  <p className="text-gray-400">Structured enrichment sessions held on campus after regular school hours. Convenient for parents and engaging for students.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg h-fit">
                  <School className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">In-School Enrichment</h3>
                  <p className="text-gray-400">Integrated modules delivered during electives or dedicated enrichment blocks, aligned with school schedules.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-pink-900/30 p-3 rounded-lg h-fit">
                  <Calendar className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Summer Intensives</h3>
                  <p className="text-gray-400">Immersive 1-3 week programs hosted at your school during summer break, offering deep dives into AI literacy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-900/30 p-3 rounded-lg h-fit">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom Partnerships</h3>
                  <p className="text-gray-400">Tailored curriculum and professional development for teachers to integrate AI concepts into existing classes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits to Schools */}
          <section className="bg-white/5 rounded-3xl p-12 border border-white/10 mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits for Your School</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Enhance your STEM reputation with cutting-edge offerings</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Provide differentiated enrichment that parents value</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Prepare students for a technology-driven future</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Attract and retain families looking for forward-thinking education</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Ready to Partner?</h3>
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl">
                Inquire About Partnership
              </Button>
            </Link>
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
