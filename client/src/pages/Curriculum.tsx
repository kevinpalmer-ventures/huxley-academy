import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Brain, Code, Cpu, Layers, Award, CheckCircle, Download } from "lucide-react";

export default function Curriculum() {
  const levels = [
    {
      level: "Level I",
      title: "AI Foundations",
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      description: "Understanding the core mechanics of artificial intelligence, machine learning, and neural networks.",
      skills: ["Prompt Engineering Basics", "Digital Citizenship", "AI Ethics", "History of Computing"],
      outcome: "Students can explain how AI works and use basic tools responsibly."
    },
    {
      level: "Level II",
      title: "AI & Critical Thinking",
      icon: <Layers className="h-8 w-8 text-blue-400" />,
      description: "Learning to question outputs, identify bias, and understand the limitations of AI systems.",
      skills: ["Bias Detection", "Source Verification", "Logic & Reasoning", "System Analysis"],
      outcome: "Students can critically evaluate AI-generated content and identify hallucinations."
    },
    {
      level: "Level III",
      title: "AI as a Scientific Tool",
      icon: <Cpu className="h-8 w-8 text-cyan-400" />,
      description: "Using AI as a research assistant and data analysis tool for scientific inquiry.",
      skills: ["Data Analysis", "Research Methodology", "Hypothesis Testing", "Complex Problem Solving"],
      outcome: "Students can use AI to accelerate research and solve complex problems."
    },
    {
      level: "Level IV",
      title: "Capstone: Build With AI",
      icon: <Code className="h-8 w-8 text-pink-400" />,
      description: "Applying all learned skills to build a functional project that solves a real-world problem.",
      skills: ["Product Design", "Project Management", "Prototyping", "Presentation Skills"],
      outcome: "Students launch a functional AI-integrated project or portfolio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="text-purple-300 hover:text-purple-200 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">The Huxley Curriculum</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A structured academic pathway designed to take students from foundational literacy to active creation. 
              Our curriculum treats AI as a serious academic discipline.
            </p>
            <a href="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028245929/ZKBsGEHVPCADPIQA.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-950">
                <Download className="mr-2 h-4 w-4" />
                Download Full Syllabus (PDF)
              </Button>
            </a>
          </div>

          <div className="grid gap-8 mb-16">
            {levels.map((level, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-black/20 p-8 flex flex-col items-center justify-center md:w-64 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="mb-4 p-4 rounded-full bg-white/5">
                      {level.icon}
                    </div>
                    <h3 className="text-purple-300 font-bold text-lg mb-1">{level.level}</h3>
                    <h2 className="text-white font-bold text-xl text-center">{level.title}</h2>
                  </div>
                  <div className="p-8 flex-1">
                    <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                      {level.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Skills</h4>
                        <ul className="space-y-2">
                          {level.skills.map((skill, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="h-4 w-4 text-purple-400" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Learning Outcome</h4>
                        <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                          <p className="text-purple-100 italic">"{level.outcome}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certification Section */}
          <Card className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-white/10 backdrop-blur-sm mb-16">
            <CardContent className="p-8 md:p-12 text-center">
              <Award className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">AI Scholar Certificate</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Upon successful completion of all four levels, students are awarded the Huxley Academy AI Scholar Certificate, 
                recognizing their proficiency in ethical AI use, critical thinking, and technical application.
              </p>
              <Link href="/enrollment">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8">
                  Begin the Journey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
