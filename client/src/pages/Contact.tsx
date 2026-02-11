import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Brain, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our curriculum, admissions, or partnerships? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-gray-400">admissions@huxleyacademy.com</p>
                    <p className="text-gray-400">partnerships@huxleyacademy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Phone</h3>
                    <p className="text-gray-400">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-pink-400 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Headquarters</h3>
                    <p className="text-gray-400">
                      123 Innovation Drive<br />
                      Raleigh, NC 27601
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-purple-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-purple-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 h-32" placeholder="How can we help?"></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>


    </div>
  );
}
