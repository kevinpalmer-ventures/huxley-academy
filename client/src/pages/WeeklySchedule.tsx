import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowLeft, Lightbulb } from "lucide-react";

const weekData = [
  {
    week: 1,
    title: "Introduction to AI & Digital Citizenship",
    objective: "Students will be introduced to the fundamental concepts of Artificial Intelligence, understand the importance of their digital footprint, and begin planning their personal portfolio website.",
    days: [
      { day: 1, topic: "What is AI?", activity: "Icebreaker: 'AI in My Life' discussion. Students brainstorm and share examples of AI they encounter daily." },
      { day: 2, topic: "Digital Footprint & Online Safety", activity: "Group Activity: Students research their own digital footprint and discuss the importance of online privacy and safety." },
      { day: 3, topic: "Introduction to Personal Portfolios", activity: "Presentation & Discussion: Review examples of student portfolios and discuss the purpose and benefits of creating one." },
      { day: 4, topic: "Planning Your Website", activity: "Worksheet Activity: Students complete a planning worksheet to outline the pages and content for their personal website." },
      { day: 5, topic: "Content Gathering", activity: "Independent Work: Students begin writing and gathering content for their 'About Me' page and other sections." }
    ]
  },
  {
    week: 2,
    title: "Mastering AI Prompting",
    objective: "Students will develop the skills to write effective prompts for AI systems to generate text, images, and website design elements.",
    days: [
      { day: 1, topic: "The Art of the Prompt", activity: "Interactive Lesson: Introduction to the principles of effective AI prompting, including being specific, providing context, and iterating." },
      { day: 2, topic: "Prompting for Text", activity: "Hands-On Activity: Students use an AI text generator to create different versions of their 'About Me' bio." },
      { day: 3, topic: "Prompting for Images", activity: "Creative Lab: Students use an AI image generator to create a personal logo or banner for their website." },
      { day: 4, topic: "Refining Prompts", activity: "'Prompt Golf' Challenge: Students compete to achieve a specific AI output using the fewest and most effective words." },
      { day: 5, topic: "AI Ethics & Bias", activity: "Group Discussion: A guided conversation about the ethical implications of AI, including bias in algorithms." }
    ]
  },
  {
    week: 3,
    title: "Building Your Personal Website with AI",
    objective: "Students will use an AI website builder to create the structure of their personal portfolio website and populate it with their initial content.",
    days: [
      { day: 1, topic: "Intro to Lovable AI", activity: "Live Demonstration: Instructor demonstrates how to use Lovable AI to create a basic website structure." },
      { day: 2, topic: "Building the Foundation", activity: "Hands-On Workshop: Students use their website plan and prompts to generate the home page and main navigation." },
      { day: 3, topic: "Creating the 'About Me' Page", activity: "Guided Practice: Students create their 'About Me' page, adding the text they generated in Week 2 and an image." },
      { day: 4, topic: "Showcasing Projects & Achievements", activity: "Independent Work: Students create a dedicated page to showcase their school projects, awards, and achievements." },
      { day: 5, topic: "Peer Feedback Session", activity: "Gallery Walk: Students share their progress and provide constructive feedback to their peers." }
    ]
  },
  {
    week: 4,
    title: "Adding Content & Customization",
    objective: "Students will add more content to their websites, including multimedia, and learn how to customize the design and layout.",
    days: [
      { day: 1, topic: "Volunteer & Sports Pages", activity: "Content Creation Day: Students create new pages for their volunteer work, sports, or other extracurricular activities." },
      { day: 2, topic: "Working with Multimedia", activity: "Technical Lab: Students learn how to upload and embed images and videos into their website." },
      { day: 3, topic: "Social Media Integration", activity: "Best Practices Discussion: A conversation about how to professionally and safely link to social media profiles." },
      { day: 4, topic: "Customizing with AI", activity: "Design Studio: Students use AI prompts to change the colors, fonts, and layout of their website." },
      { day: 5, topic: "Final Content Review", activity: "Checklist Activity: Students use a checklist to ensure all required content is on their website and proofread for errors." }
    ]
  },
  {
    week: 5,
    title: "Website Management & Presentation",
    objective: "Students will learn how to manage and update their websites, and they will present their final portfolio to the class.",
    days: [
      { day: 1, topic: "Website Management 101", activity: "Lesson: Introduction to basic website management concepts, including updating content and the role of hosting." },
      { day: 2, topic: "Editing with AI", activity: "'Website Makeover' Activity: Students are given a scenario and must use the AI editor to update their site accordingly." },
      { day: 3, topic: "Presentation Prep", activity: "Workshop: Students prepare a short presentation about their website, highlighting their favorite page." },
      { day: 4, topic: "Portfolio Showcase Day 1", activity: "Presentations: Half of the students present their websites to the class." },
      { day: 5, topic: "Portfolio Showcase Day 2 & Wrap-up", activity: "Presentations & Celebration: The remaining students present their websites, followed by a course wrap-up." }
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">5-Week Schedule</h1>
          <p className="text-xl text-gray-300 mb-12">
            Detailed daily objectives and activities for each week of the program
          </p>

          <Tabs defaultValue="week1" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-white/5 mb-8">
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

