import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Brain, History, Compass, ShieldCheck, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">


      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="text-purple-300 hover:text-purple-200 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Huxley Academy</h1>
            <p className="text-2xl text-purple-300 font-light italic">
              "The Literacy of the Next Century"
            </p>
          </div>

          {/* Manifesto Sections */}
          <div className="space-y-24">
            
            {/* Section 1: Historical Context */}
            <section className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <h2 className="text-3xl font-bold text-white mb-8">The Evolution of Literacy</h2>
              <div className="grid gap-6 text-lg text-gray-300">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <History className="h-6 w-6 text-gray-400" />
                  <span>Reading unlocked books.</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <Compass className="h-6 w-6 text-gray-400" />
                  <span>Math unlocked engineering.</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <Globe className="h-6 w-6 text-gray-400" />
                  <span>Digital literacy unlocked the internet.</span>
                </div>
                <div className="flex items-center gap-4 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <Brain className="h-8 w-8 text-purple-400" />
                  <span className="text-xl font-semibold text-white">AI literacy unlocks the future.</span>
                </div>
              </div>
            </section>

            {/* Section 2: Refusing Passive Technology */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">We Refuse Passive Technology</h2>
              
              <div className="mb-12 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/KfP4P5a6iu2gCPsf4a9nwg/sandbox/sndNfMqp1ViCsH6a6cxUzL-img-2_1770846046000_na1fn_dGVhY2hlcl9ndWlkaW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2ZQNFA1YTZpdTJnQ1BzZjRhOW53Zy9zYW5kYm94L3NuZE5mTXFwMVZpQ3NINmE2Y3hVekwtaW1nLTJfMTc3MDg0NjA0NjAwMF9uYTFmbl9kR1ZoWTJobGNsOW5kV2xrYVc1bi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ut8XIOAj4Vuyxk2XgrARuyYJtF1~Z17P52ug3pgIROKatxlD00BHeMfIlzGSwtTae1kPx3dY6uIbteOaQXt9baS2-Pa7LkMYdrbAnNMxh4zA6RRiTYngw18euESN5NemdeZ4Edd9-2oUr6aPS5rNMgw350klHuBy04Cd7uFHVRhYmerE8ZlgiboAto7r1Bg7ufpDgF48BlVghNd47geb~iq4bdfKVNXUFyf~NSklDkM0D4qPDMxqGp~1aGh96YhCUV1zXECoInuucjk3bc8Ka4tX49kthezcDlTSQd5BWydStPya7bwwxqf1qvjo7ofketnifVjrFIOSI5UC4hd6Fw__" 
                  alt="Teacher guiding student in AI concepts" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-white text-lg italic text-center">"Mentorship is the bridge between information and wisdom."</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Understand Systems</h3>
                    <p className="text-gray-400">We don't just use tools; we learn how they work under the hood.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Question Outputs</h3>
                    <p className="text-gray-400">We replace blind trust with informed skepticism and verification.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Build Responsibly</h3>
                    <p className="text-gray-400">We create technology that respects ethics, privacy, and human dignity.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Lead Confidently</h3>
                    <p className="text-gray-400">We prepare to guide others in a world shaped by artificial intelligence.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: Our Mission */}
            <section className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-12 border border-white/10 text-center">
              <ShieldCheck className="h-12 w-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-2xl text-gray-200 leading-relaxed font-light">
                To prepare middle school students to use artificial intelligence as an extension of 
                <span className="text-purple-300 font-normal"> science</span>, 
                <span className="text-blue-300 font-normal"> society</span>, and 
                <span className="text-pink-300 font-normal"> human freedom</span>.
              </p>
            </section>

            {/* Section 4: The Long View */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">The Long View</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Huxley Academy is not a short-term camp. It is a lasting educational institution designed to grow with your student.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300">Semester Model</span>
                <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300">Year-round Academy</span>
                <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300">Scholar Pathway</span>
                <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300">Grades 6-12 Expansion</span>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-12">
              <Link href="/enrollment">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl">
                  Join the Academy
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}
