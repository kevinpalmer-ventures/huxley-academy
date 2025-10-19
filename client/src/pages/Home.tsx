import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, Calendar, Lightbulb, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">STEM AI Course</span>
            </div>
            <div className="flex gap-4">
              <Link href="/overview">
                <Button variant="ghost" className="text-white hover:text-purple-300">
                  Overview
                </Button>
              </Link>
              <Link href="/schedule">
                <Button variant="ghost" className="text-white hover:text-purple-300">
                  Schedule
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="ghost" className="text-white hover:text-purple-300">
                  Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            3-Week STEM Course
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            AI & Personal Website Development
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            An intensive summer program for rising 8th graders to learn Artificial Intelligence 
            and build their own portfolio websites using cutting-edge AI tools in just 3 weeks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/overview">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Explore Course
              </Button>
            </Link>
            <Link href="/schedule">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-950">
                View Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Learn AI Fundamentals</CardTitle>
              <CardDescription className="text-gray-400">
                Master the art of AI prompting and understand how AI works in everyday life
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-pink-400 mb-2" />
              <CardTitle className="text-white">Build with AI</CardTitle>
              <CardDescription className="text-gray-400">
                Create a professional portfolio website using Lovable AI without writing code
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Calendar className="h-10 w-10 text-blue-400 mb-2" />
              <CardTitle className="text-white">3-Week Intensive</CardTitle>
              <CardDescription className="text-gray-400">
                Fast-paced daily lessons with hands-on activities and peer collaboration
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Users className="h-10 w-10 text-green-400 mb-2" />
              <CardTitle className="text-white">Portfolio for Life</CardTitle>
              <CardDescription className="text-gray-400">
                Create a website you can manage and update throughout your high school career
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">What You'll Learn</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Week 1</CardTitle>
                <CardDescription className="text-gray-300">
                  AI fundamentals, digital citizenship, and mastering AI prompting for text and images
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Week 2</CardTitle>
                <CardDescription className="text-gray-300">
                  Building your complete portfolio website with AI, adding all content pages and multimedia
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Week 3</CardTitle>
                <CardDescription className="text-gray-300">
                  Customization, website management, and presenting your final portfolio project
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Project */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-green-900/50 to-blue-900/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center mb-2">Final Project</CardTitle>
              <CardDescription className="text-gray-300 text-center text-base">
                A complete portfolio website with About Me, Projects, Volunteer Work, and Sports pages
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">3-Week STEM Course: AI & Personal Website Development</p>
            <p className="text-sm">Designed for Rising 8th Graders | Wake County, NC</p>
            <p className="text-xs mt-4">Created by Manus AI | October 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

