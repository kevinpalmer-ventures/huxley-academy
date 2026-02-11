import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowLeft, Brain, Calendar, CheckCircle, Code, Globe, Laptop, Rocket, Users } from "lucide-react";

export default function ThreeWeekStem() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/">
        <Button variant="ghost" className="text-purple-300 hover:text-purple-200 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-900/30 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
            Summer Intensive Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Your Personal Brand<br />
            <span className="text-purple-400">With AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A 3-week accelerated course for rising 8th graders. Learn to prompt, build a professional portfolio website, and master AI tools before high school.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/enrollment">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Enroll Now
              </Button>
            </Link>
            <a href="#schedule">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-950 px-8">
                View Schedule
              </Button>
            </a>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Globe className="h-10 w-10 text-blue-400 mb-4" />
              <CardTitle className="text-xl text-white">Personal Website</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Launch a live portfolio website with your own domain name to showcase achievements, sports, and projects.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Brain className="h-10 w-10 text-purple-400 mb-4" />
              <CardTitle className="text-xl text-white">AI Mastery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Learn advanced prompting techniques to generate content, code, and images using the latest AI tools.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Rocket className="h-10 w-10 text-pink-400 mb-4" />
              <CardTitle className="text-xl text-white">High School Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Start high school with a professional digital presence that sets you apart for colleges and internships.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Schedule */}
        <div id="schedule" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">3-Week Intensive Schedule</h2>
          
          <Tabs defaultValue="week1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-white/10">
              <TabsTrigger value="week1" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-400">Week 1: Foundations</TabsTrigger>
              <TabsTrigger value="week2" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-400">Week 2: Building</TabsTrigger>
              <TabsTrigger value="week3" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-400">Week 3: Launch</TabsTrigger>
            </TabsList>

            <TabsContent value="week1" className="mt-6 space-y-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-400" />
                    AI Fundamentals & Prompting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-purple-900/30 px-3 py-1 rounded text-purple-300 text-sm h-fit whitespace-nowrap">Day 1-2</div>
                    <div>
                      <h4 className="text-white font-bold">Intro to AI & Prompt Engineering</h4>
                      <p className="text-gray-400 text-sm">Understanding LLMs, ethics, and the art of "talking" to AI to get the best results.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-900/30 px-3 py-1 rounded text-purple-300 text-sm h-fit whitespace-nowrap">Day 3-5</div>
                    <div>
                      <h4 className="text-white font-bold">Resource Gathering & Planning</h4>
                      <p className="text-gray-400 text-sm">Collecting photos, writing bios, and structuring the "About Me" and "Achievements" pages.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="week2" className="mt-6 space-y-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-400" />
                    Website Creation & Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-blue-900/30 px-3 py-1 rounded text-blue-300 text-sm h-fit whitespace-nowrap">Day 6-7</div>
                    <div>
                      <h4 className="text-white font-bold">Building with AI Tools</h4>
                      <p className="text-gray-400 text-sm">Using Lovable/V0 to generate the website structure. Setting up domains with Cloudflare.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-900/30 px-3 py-1 rounded text-blue-300 text-sm h-fit whitespace-nowrap">Day 8-10</div>
                    <div>
                      <h4 className="text-white font-bold">Content Integration</h4>
                      <p className="text-gray-400 text-sm">Adding "About Me", sports clips, and volunteer work. Linking social media accounts.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="week3" className="mt-6 space-y-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-pink-400" />
                    Refinement & Launch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-pink-900/30 px-3 py-1 rounded text-pink-300 text-sm h-fit whitespace-nowrap">Day 11-13</div>
                    <div>
                      <h4 className="text-white font-bold">Editing & Polishing</h4>
                      <p className="text-gray-400 text-sm">Peer reviews, mobile responsiveness checks, and final content updates using AI.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-pink-900/30 px-3 py-1 rounded text-pink-300 text-sm h-fit whitespace-nowrap">Day 14-15</div>
                    <div>
                      <h4 className="text-white font-bold">Final Presentation</h4>
                      <p className="text-gray-400 text-sm">Showcasing the live portfolio to parents and peers. Future maintenance plan.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Tools We Use */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Tools You'll Master</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-gray-300 flex items-center gap-2">
              <Laptop className="h-4 w-4 text-purple-400" /> Cloudflare
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-gray-300 flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-400" /> Lovable / V0
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-gray-300 flex items-center gap-2">
              <Brain className="h-4 w-4 text-green-400" /> ChatGPT / Claude
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-gray-300 flex items-center gap-2">
              <Users className="h-4 w-4 text-pink-400" /> Social Integrations
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Future?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Spots are limited for our summer intensive cohorts. Secure your place today and start high school ahead of the curve.
          </p>
          <Link href="/enrollment">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 font-bold">
              Apply for Summer 2026
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
