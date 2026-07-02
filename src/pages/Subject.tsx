import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import { chapters } from "@/data/chapters";

const chapterColors = [
  "from-blue-50 to-blue-100 border-blue-200",
  "from-orange-50 to-orange-100 border-orange-200",
  "from-blue-50 to-indigo-100 border-indigo-200",
  "from-amber-50 to-amber-100 border-amber-200",
  "from-sky-50 to-sky-100 border-sky-200",
  "from-orange-50 to-red-100 border-red-200",
  "from-blue-50 to-cyan-100 border-cyan-200",
  "from-yellow-50 to-orange-100 border-orange-200",
];

export default function Subject() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 text-primary font-medium mb-6 hover:underline"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Ganita Manjari</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Class 9 Mathematics</h1>
            <p className="text-gray-500 text-lg">Select a chapter to view exercise-wise questions and solutions.</p>
          </motion.div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.id}
              onClick={() => setLocation(`/chapter/${chapter.id}`)}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className={`group text-left bg-gradient-to-br ${chapterColors[index % chapterColors.length]} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
              data-testid={`button-chapter-${chapter.id}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{chapter.title}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 leading-snug">{chapter.subtitle}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {chapter.exerciseSets.length} Exercise Set{chapter.exerciseSets.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="ml-4 mt-1 w-9 h-9 rounded-full bg-white/60 flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <p>© 2026 NCERT Class 9 Solutions. All rights reserved.</p>
        <p className="mt-1">Created with ❤️ by a Student of Goethals Public School</p>
      </footer>
    </div>
  );
}
