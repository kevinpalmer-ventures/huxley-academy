import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowLeft, Lightbulb } from "lucide-react";

const weekData = [
  {
    week: 1,
    title: "AI Fundamentals & Prompting Mastery",
    objective: "Students will learn the fundamentals of AI, understand digital citizenship, and master AI prompting techniques for text and image generation.",
    days: [
      { day: 1, topic: "What is AI? & Digital Citizenship", activity: "Icebreaker: 'AI in My Life' discussion. Students explore their digital footprint and discuss online safety." },
      { day: 2, topic: "Introduction to Personal Portfolios & Planning", activity: "Review portfolio examples and complete website planning worksheet. Begin content gathering." },
      { day: 3, topic: "The Art of AI Prompting", activity: "Interactive lesson on effective prompting. Students practice with AI text generators to create 'About Me' bios." },
      { day: 4, topic: "Prompting for Images & Refining Techniques", activity: "Creative lab: Create personal logos/banners with AI. 'Prompt Golf' challenge to refine skills." },
      { day: 5, topic: "AI Ethics & Bias Discussion", activity: "Group discussion on ethical implications of AI, bias in algorithms, and responsible AI use." }
    ]
  },
  {
    week: 2,
    title: "Building Your Complete Portfolio Website",
    objective: "Students will use an AI website builder to create their complete portfolio website, including all content pages, multimedia, and initial customization.",
    days: [
      { day: 1, topic: "Intro to Lovable AI & Building Foundation", activity: "Live demo of Lovable AI. Students generate home page, navigation, and 'About Me' page." },
      { day: 2, topic: "Projects, Achievements & Volunteer Pages", activity: "Students create pages showcasing school projects, awards, volunteer work, and gather content." },
      { day: 3, topic: "Sports Pages & Working with Multimedia", activity: "Create sports/activities pages. Technical lab on uploading and embedding images and videos." },
      { day: 4, topic: "Social Media Integration & Peer Feedback", activity: "Discussion on professional social media linking. Gallery walk for peer feedback on websites." },
      { day: 5, topic: "Customizing with AI", activity: "Design studio: Use AI prompts to customize colors, fonts, and layouts to reflect personal style." }
    ]
  },
  {
    week: 3,
    title: "Finalization, Management & Presentation",
    objective: "Students will finalize their websites, learn website management concepts, and present their completed portfolios to the class.",
    days: [
      { day: 1, topic: "Final Content Review & Website Management", activity: "Checklist review of all content. Introduction to website management, updating content, and hosting concepts." },
      { day: 2, topic: "Editing with AI & Final Polish", activity: "'Website Makeover' activity: Update sites based on scenarios. Final proofreading and quality checks." },
      { day: 3, topic: "Presentation Preparation", activity: "Workshop: Students prepare 3-5 minute presentations about their websites and key learnings." },
      { day: 4, topic: "Portfolio Showcase Day 1", activity: "Presentations: Half of the students present their websites to the class with Q&A." },
      { day: 5, topic: "Portfolio Showcase Day 2 & Celebration", activity: "Final presentations and course wrap-up. Celebration of accomplishments and reflection on learning." }
    ]
  }
];

export default function WeeklySchedule() {
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

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">3-Week Intensive Schedule</h1>
          <p className="text-xl text-gray-300 mb-12">
            Accelerated daily objectives and activities for the condensed program
          </p>

          <Tabs defaultValue="week1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 mb-8">
              {weekData.map((week) => (
                <TabsTrigger
                  key={week.week}
                  value={`week${week.week}`}
                  className="data-[state=active]:bg-purple-600"
                >
                  Week {week.week}
                </TabsTrigger>
              ))}
            </TabsList>

            {weekData.map((week) => (
              <TabsContent key={week.week} value={`week${week.week}`} className="space-y-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Week {week.week}: {week.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base">
                      <strong className="text-purple-300">Weekly Objective:</strong> {week.objective}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid gap-4">
                  {week.days.map((day) => (
                    <Card key={day.day} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">Day {day.day}</span>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-white mb-2">{day.topic}</CardTitle>
                            <CardDescription className="text-gray-300">
                              <strong className="text-purple-300">Activity:</strong> {day.activity}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Assessment Info */}
          <section className="mt-12">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Assessment & Evaluation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Final Portfolio Website (70%)</h4>
                  <p className="text-gray-300 text-sm">
                    Evaluated based on content completeness, design quality, functionality, and effective use of AI
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Final Presentation (20%)</h4>
                  <p className="text-gray-300 text-sm">
                    3-5 minute presentation about the website, highlighting key pages and learning outcomes
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Participation & Engagement (10%)</h4>
                  <p className="text-gray-300 text-sm">
                    Overall participation in class discussions, group activities, and peer feedback sessions
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/resources">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                View Resources & Materials
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

