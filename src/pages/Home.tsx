import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  BookMarked,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ganitaManjariCover from "@/assets/ganita-manjari-cover.png";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const subjects = [
  { id: 1, name: "Ganita Manjari", icon: Calculator, color: "text-primary", desc: "Algebra, Geometry, Statistics & more" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 pointer-events-none -z-10" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              NCERT <span className="text-primary">Class 9</span> Solutions
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Complete chapter-wise solutions for all subjects. Free, accurate, and easy to understand.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollTo("subjects")}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-primary text-white font-semibold text-base shadow hover:bg-primary/90 transition-colors"
                data-testid="button-explore-hero"
              >
                Explore Subjects
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollTo("features")}
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border-2 border-primary text-primary font-semibold text-base hover:bg-primary/5 transition-colors"
                data-testid="button-how-it-works"
              >
                How It Works
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section id="subjects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">Ganita Manjari</h2>
              <div className="mt-2 w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="flex justify-center">
              {subjects.map((subject, index) => {
                return (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.97 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full max-w-sm"
                    data-testid={`card-subject-${subject.id}`}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <img src={ganitaManjariCover} alt="Ganita Manjari cover" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{subject.name}</h3>
                    <p className="text-gray-600 mb-6">{subject.desc}</p>
                    <motion.div whileTap={{ scale: 0.93 }}>
                      <Link
                        href={`/subject/${subject.id}`}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                        data-testid={`link-subject-${subject.id}`}
                      >
                        View Solutions <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Free Access</h3>
                <p className="text-gray-600">No hidden fees or subscriptions. 100% free forever.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <BookMarked className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Chapter-wise solutions</h3>
                <p className="text-gray-600">Well-organized content structured exactly like your NCERT textbooks.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-[#111827] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 mb-6 md:mb-0 cursor-pointer"
              onClick={() => scrollTo("hero")}
            >
              <GraduationCap className="h-8 w-8 text-white" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-white">NCERT</span>
                <span className="text-xs font-semibold text-gray-400">Class 9</span>
              </div>
            </motion.div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { label: "Home", id: "hero" },
                { label: "Subjects", id: "subjects" },
                { label: "About", id: "features" },
              ].map((link) => (
                <motion.button
                  key={link.label}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center flex flex-col items-center gap-2">
            <p className="text-gray-400 text-sm">© 2026 NCERT Class 9 Solutions. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              Created with ❤️ by a{" "}
              <a
                href="http://www.goethalspublicschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Student of Goethals Public School
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
