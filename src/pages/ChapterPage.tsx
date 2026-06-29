import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import DiagramRenderer from "@/components/Diagrams";
import { chapters } from "@/data/chapters";

export default function ChapterPage() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const chapterId = parseInt(params.id ?? "1");
  const chapter = chapters.find((c) => c.id === chapterId);

  const [openExercise, setOpenExercise] = useState<number>(0);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Chapter not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLocation("/subject/1")}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
              data-testid="button-back-subject"
            >
              <ArrowLeft className="w-4 h-4" /> All Chapters
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest">{chapter.title}</span>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-1 leading-tight">{chapter.subtitle}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <BookOpen className="w-4 h-4" />
                {chapter.exerciseSets.length} Exercise Set{chapter.exerciseSets.length !== 1 ? "s" : ""}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {chapter.exerciseSets.reduce((a, es) => a + es.questions.length, 0)} Questions with Solutions
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Exercise Set Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {chapter.exerciseSets.map((es, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenExercise(idx)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                openExercise === idx
                  ? "bg-primary text-white border-primary shadow"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
              }`}
              data-testid={`tab-exercise-${idx}`}
            >
              {es.title}
            </motion.button>
          ))}
        </div>

        {/* Questions — solutions shown directly, no accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={openExercise}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {chapter.exerciseSets[openExercise].questions.map((question, qIdx) => (
              <motion.div
                key={qIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: qIdx * 0.04 }}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                data-testid={`question-${qIdx}`}
              >
                {/* Question header */}
                <div className="flex items-start gap-3 px-5 pt-5 pb-4 border-b border-gray-100 bg-gray-50/60">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
                    {qIdx + 1}
                  </span>
                  <p className="text-gray-900 font-semibold leading-relaxed text-sm sm:text-base">{question.q}</p>
                </div>

                {/* Solution body */}
                <div className="px-5 py-5">
                  {question.diagram && (
                    <DiagramRenderer id={question.diagram} />
                  )}

                  {question.parts ? (
                    <div className="space-y-5">
                      {question.parts.map((part, pIdx) => (
                        <div key={pIdx} className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                            {part.label}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 font-semibold mb-2">{part.question}</p>
                            {part.diagram && <DiagramRenderer id={part.diagram} />}
                            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                              <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Solution</span>
                              <div className="space-y-1">
                                {part.solution.split("\n").map((line, li) => (
                                  <p key={li} className={`text-sm leading-relaxed font-mono ${
                                    line.startsWith("Step") || line.startsWith("∴") || line.startsWith("Answer") || line.startsWith("Method")
                                      ? "font-semibold text-gray-900 font-sans"
                                      : "text-gray-700"
                                  }`}>
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-4">
                      <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Solution</span>
                      <div className="space-y-1">
                        {(question.solution ?? "").split("\n").map((line, li) => (
                          <p key={li} className={`text-sm leading-relaxed ${
                            line.startsWith("Step") || line.startsWith("∴") || line.startsWith("Answer") || line.startsWith("Method") || line.startsWith("Proof") || line.startsWith("Given") || line.startsWith("To prove")
                              ? "font-semibold text-gray-900"
                              : "text-gray-700"
                          }`}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Chapter navigation */}
        <div className="mt-12 flex justify-between items-center pt-6 border-t border-gray-100">
          {chapterId > 1 ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { setLocation(`/chapter/${chapterId - 1}`); setOpenExercise(0); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
              data-testid="button-prev-chapter"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Chapter
            </motion.button>
          ) : <div />}

          {chapterId < chapters.length ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { setLocation(`/chapter/${chapterId + 1}`); setOpenExercise(0); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow"
              data-testid="button-next-chapter"
            >
              Next Chapter <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : <div />}
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <p>© 2024 NCERT Class 9 Solutions</p>
        <p className="mt-1">Created with ❤️ by a Student of Goethals Public School</p>
      </footer>
    </div>
  );
}
