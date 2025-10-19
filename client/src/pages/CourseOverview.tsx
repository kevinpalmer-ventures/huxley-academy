import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Lightbulb, Target } from "lucide-react";

export default function CourseOverview() {
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
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-purple-300">
                  Home
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

      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="text-purple-300 hover:text-purple-200 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Course Overview</h1>
          <p className="text-xl text-gray-300 mb-12">
            A comprehensive introduction to AI and website development for rising 8th graders
          </p>

          {/* Course Goals */}
          <section className="mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-6 w-6 text-purple-400" />
                  <CardTitle className="text-2xl text-white">Course Goals</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Upon successful completion of this course, students will have achieved the following goals:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Prompting</h4>
                      <p className="text-gray-400 text-sm">
                        Develop a strong understanding of how to communicate effectively with AI systems to generate desired outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Resource Management</h4>
                      <p className="text-gray-400 text-sm">
                        Learn how to gather digital resources, set up development environments, and manage a personal website project.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">AI-Powered Creation</h4>
                      <p className="text-gray-400 text-sm">
                        Gain hands-on experience using AI tools to design, build, and customize a personal website.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Website Management</h4>
                      <p className="text-gray-400 text-sm">
                        Acquire the skills to edit, update, and add new content to their website using AI-assisted tools.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Learning Objectives */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Learning Objectives</h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-6">
                  By the end of this 5-week course, students will be able to:
                </p>
                <div className="space-y-3">
                  {[
                    "Define Artificial Intelligence and identify its applications in their daily lives",
                    "Understand the principles of digital citizenship, including managing their digital footprint, online safety, and the ethical use of AI",
                    "Master the fundamentals of AI prompting for effective content and design generation",
                    "Plan and structure a personal portfolio website that effectively showcases their skills, projects, and experiences",
                    "Utilize an AI-powered platform (Lovable AI) to create a multi-page personal website without needing to write code",
                    "Populate their website with personal content, including an 'About Me' page, project descriptions, and achievements",
                    "Integrate multimedia content, such as images and videos, and link to social media profiles",
                    "Independently manage, edit, and update their personal website as their portfolio grows",
                    "Present their completed portfolio website to their peers and instructor"
                  ].map((objective, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-purple-400 font-semibold">{index + 1}.</span>
                      <p className="text-gray-300">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Required Tools */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Required Tools & Platforms</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Lovable AI</CardTitle>
                  <CardDescription className="text-gray-300">
                    An AI-powered website builder that allows students to create websites through natural language prompts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Cloudflare</CardTitle>
                  <CardDescription className="text-gray-300">
                    Used to explain concepts of domain names and website hosting (instructor-managed)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Google Workspace</CardTitle>
                  <CardDescription className="text-gray-300">
                    For document creation, content gathering, and collaboration
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Target Audience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Target Audience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Wake County Students</CardTitle>
                  <CardDescription className="text-gray-300">
                    The curriculum for this group is explicitly aligned with the North Carolina Computer Science Standards for grades 6-8
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">General Audience</CardTitle>
                  <CardDescription className="text-gray-300">
                    A version of the course for students outside of the WCPSS district, with the same core objectives
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Website Pages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Portfolio Website Pages</h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-6">
                  Students will create a complete portfolio website with the following pages:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "About Me", desc: "Personal introduction and biography" },
                    { title: "School Projects", desc: "Academic achievements and project showcases" },
                    { title: "Volunteer Work", desc: "Community service and volunteer experiences" },
                    { title: "Sports & Activities", desc: "Athletic achievements and extracurricular activities" }
                  ].map((page, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-white font-semibold mb-2">{page.title}</h4>
                      <p className="text-gray-400 text-sm">{page.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="/schedule">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                View Weekly Schedule
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">Designed for Rising 8th Graders | Wake County, NC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

