import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, ExternalLink, Lightbulb, Package, Users } from "lucide-react";

export default function Resources() {
  const tools = [
    {
      name: "Lovable AI",
      description: "AI-powered website builder for creating websites through natural language prompts",
      url: "https://lovable.dev/",
      icon: "🤖"
    },
    {
      name: "Cloudflare",
      description: "Domain registration and website hosting concepts (instructor-managed)",
      url: "https://www.cloudflare.com/education/",
      icon: "☁️"
    },
    {
      name: "ChatGPT",
      description: "AI text generator for practicing prompting and content creation",
      url: "https://chat.openai.com/",
      icon: "💬"
    },
    {
      name: "Google Workspace",
      description: "Document creation, content gathering, and collaboration tools",
      url: "https://workspace.google.com/",
      icon: "📝"
    }
  ];

  const standards = [
    { code: "68-CS-01", desc: "Understand the design of computing devices based on user interaction analysis" },
    { code: "68-CS-02", desc: "Design projects combining hardware and software to collect and exchange data" },
    { code: "68-NI-01", desc: "Analyze data transfer across networks and the role of protocols" },
    { code: "68-DA-02", desc: "Collect data using computational tools" },
    { code: "68-AP-01", desc: "Implement flowcharts and pseudocode to address complex problems" },
    { code: "68-IC-01", desc: "Impacts of Computing - Culture" },
    { code: "68-IC-02", desc: "Impacts of Computing - Social Interactions" },
    { code: "68-IC-03", desc: "Impacts of Computing - Safety, Law & Ethics" }
  ];

  const materials = [
    { category: "For Students", items: ["Computer with internet access", "Lovable AI account", "Google Workspace access", "Personal content (photos, videos)", "Notebook and pen/pencil"] },
    { category: "For Instructors", items: ["Computer with projector", "Lovable AI account", "AI text/image generators access", "Presentation slides", "Example student portfolios", "Worksheets and handouts"] }
  ];

  const references = [
    {
      title: "2020 North Carolina K12 Computer Science Standards with Descriptions",
      url: "https://www.dpi.nc.gov/nc-computer-science-descriptions68pdf/open"
    },
    {
      title: "CSTA K-12 Computer Science Standards",
      url: "https://csteachers.org/k12standards/"
    },
    {
      title: "Lovable Student Discount - 50% Off Lovable Pro",
      url: "https://lovable.dev/students"
    },
    {
      title: "Cloudflare for Education",
      url: "https://www.cloudflare.com/education/"
    },
    {
      title: "Using Student-Created Websites to Showcase Learning - Edutopia",
      url: "https://www.edutopia.org/article/student-created-websites-showcase-learning/"
    },
    {
      title: "12 Tips For Students To Manage Their Digital Footprints - TeachThought",
      url: "https://www.teachthought.com/the-future-of-learning-posts/digital-footprints/"
    },
    {
      title: "Training teachers on AI prompting - SchoolAI",
      url: "https://schoolai.com/blog/training-teachers-ai-prompting/"
    },
    {
      title: "56 game-changing AI prompts for teachers - Mentimeter",
      url: "https://www.mentimeter.com/blog/education/ai-prompts-for-teachers"
    }
  ];

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

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources & Materials</h1>
          <p className="text-xl text-gray-300 mb-12">
            Tools, platforms, and materials needed for the course
          </p>

          {/* Tools & Platforms */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Package className="h-6 w-6 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Tools & Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">{tool.icon}</span>
                      <div className="flex-1">
                        <CardTitle className="text-white mb-2">{tool.name}</CardTitle>
                        <CardDescription className="text-gray-300 mb-3">
                          {tool.description}
                        </CardDescription>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="border-purple-400 text-purple-300 hover:bg-purple-950">
                            Visit Website
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Required Materials */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-6 w-6 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Required Materials</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((material, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white mb-4">{material.category}</CardTitle>
                    <CardContent className="p-0">
                      <ul className="space-y-2">
                        {material.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* NC Computer Science Standards */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-green-400" />
              <h2 className="text-3xl font-bold text-white">NC Computer Science Standards (Grades 6-8)</h2>
            </div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-6">
                  This course is aligned with the North Carolina Computer Science Standards for grades 6-8. Key standards addressed include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {standards.map((standard, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="font-mono text-purple-400 font-semibold mb-2">{standard.code}</div>
                      <p className="text-gray-300 text-sm">{standard.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* References */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <ExternalLink className="h-6 w-6 text-pink-400" />
              <h2 className="text-3xl font-bold text-white">References & Further Reading</h2>
            </div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {references.map((ref, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <span className="text-purple-400 font-semibold">{index + 1}.</span>
                      <div className="flex-1">
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                        >
                          {ref.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Instructor Tips */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Instructor Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Emphasize Iteration</h4>
                  <p className="text-gray-300 text-sm">
                    Throughout the course, emphasize that creating a website (and using AI) is an iterative process. Students should not expect to get everything perfect on the first try.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Provide Individualized Support</h4>
                  <p className="text-gray-300 text-sm">
                    Students will have varying levels of technical skills and comfort with AI. Be prepared to provide individualized support and differentiate instruction as needed.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Foster a Collaborative Environment</h4>
                  <p className="text-gray-300 text-sm">
                    Encourage students to help each other and share their knowledge. Peer learning can be a powerful tool in this type of course.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Celebrate Creativity</h4>
                  <p className="text-gray-300 text-sm">
                    There is no single "right" way to create a portfolio website. Encourage students to be creative and express their individuality through their design and content choices.
                  </p>
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
            <p className="mb-2">5-Week STEM Course: AI & Personal Website Development</p>
            <p className="text-sm">Designed for Rising 8th Graders | Wake County, NC</p>
            <p className="text-xs mt-4">Created by Manus AI | October 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

