import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, Lightbulb, Users, Brain, Rocket, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
            AI Literacy Starts Here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Don’t Just Use Technology.<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Understand It. Build It.</span><br />
            Improve the World With It.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Huxley Academy is a foundational AI literacy school for middle school students. 
            We teach students how artificial intelligence works — how to question it, shape it, 
            and use it responsibly for science, creativity, and leadership.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/curriculum">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-14 px-8 text-lg">
                Explore the Curriculum
              </Button>
            </Link>
            <Link href="/enrollment">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-950 h-14 px-8 text-lg">
                Apply to Huxley Academy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">The Huxley Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                "History shows that powerful inventions can either distract a generation — or empower it. 
                Artificial intelligence is no different."
              </p>
              <p className="text-lg text-gray-400">
                At Huxley Academy, we teach students to use AI not as a crutch, but as a scientific instrument, 
                a research assistant, a creative partner, and a problem-solving tool.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center hover:bg-white/10 transition-colors">
                <Brain className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold">Scientific Instrument</h3>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center hover:bg-white/10 transition-colors">
                <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold">Research Assistant</h3>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center hover:bg-white/10 transition-colors">
                <Lightbulb className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold">Creative Partner</h3>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center hover:bg-white/10 transition-colors">
                <Rocket className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold">Problem Solver</h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Makes Huxley Academy Different</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We are not a coding camp. We are not a chatbot tutorial. We are a literacy school for the AI age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">A Literacy School</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Just as reading unlocked books and math unlocked engineering, AI literacy unlocks the future. 
                  We treat AI fluency as a fundamental academic skill.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Foundational Pathway</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  We move beyond passive consumption to active creation. Students learn to understand systems, 
                  question outputs, and build responsibly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pink-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Future Preparation</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  We prepare students for AI-shaped futures where technology expands freedom rather than replacing thinking.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Was Huxley Section */}
      <section className="container mx-auto px-4 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Why "Huxley"?</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Aldous Huxley, author of <em>Brave New World</em>, imagined a future where technology shaped society in powerful ways. 
                He warned that people might become dependent on systems they didn't understand.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Huxley Academy chooses a different future.</strong> We replace passive consumption with active creation, 
                blind trust with informed questioning, and dependency with literacy.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center opacity-80">
                <span className="text-4xl font-serif text-white font-bold">H</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
