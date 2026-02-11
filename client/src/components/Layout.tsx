import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Brain, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold text-white tracking-tight">Huxley Academy</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" className={`text-white hover:text-purple-300 ${isActive('/') ? 'bg-white/10' : ''}`}>Home</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className={`text-white hover:text-purple-300 ${isActive('/about') ? 'bg-white/10' : ''}`}>About</Button>
              </Link>
              
              {/* Programs Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-purple-300 gap-1">
                    Programs <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-900 border-white/10 text-white">
                  <Link href="/curriculum">
                    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10">
                      Core Curriculum
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/programs/3-week-stem">
                    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10">
                      3-Week STEM Intensive
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/parents-investors">
                <Button variant="ghost" className={`text-white hover:text-purple-300 ${isActive('/parents-investors') ? 'bg-white/10' : ''}`}>Parents</Button>
              </Link>
              <Link href="/schools-ptos">
                <Button variant="ghost" className={`text-white hover:text-purple-300 ${isActive('/schools-ptos') ? 'bg-white/10' : ''}`}>Schools</Button>
              </Link>
              <Link href="/enrollment">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white ml-2">Apply Now</Button>
              </Link>
            </div>

            {/* Mobile Menu Placeholder (could be expanded later) */}
            <div className="md:hidden">
              <Link href="/enrollment">
                <Button size="sm" className="bg-purple-600 text-white">Apply</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-purple-400" />
                <span className="text-lg font-bold text-white">Huxley Academy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Foundational AI literacy for the next generation of leaders, creators, and thinkers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/curriculum" className="hover:text-purple-400">Core Curriculum</Link></li>
                <li><Link href="/programs/3-week-stem" className="hover:text-purple-400">Summer Intensive</Link></li>
                <li><Link href="/schools-ptos" className="hover:text-purple-400">School Partnerships</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Admissions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/enrollment" className="hover:text-purple-400">Apply Now</Link></li>
                <li><Link href="/parents-investors" className="hover:text-purple-400">Tuition & Aid</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400">Contact Admissions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-purple-400">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
                <li><a href="#" className="hover:text-purple-400">Twitter / X</a></li>
                <li><a href="#" className="hover:text-purple-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Huxley Academy. AI Literacy Starts Here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
