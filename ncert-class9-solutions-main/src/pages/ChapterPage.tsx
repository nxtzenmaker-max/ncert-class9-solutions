import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import DiagramRenderer from "@/components/Diagrams";
import { chapters } from "@/data/chapters";

function classifyLine(line: string) {
  if (line.startsWith("Step "))    return "step";
  if (line.startsWith("= ") || line === "=") return "equals";
  if (line.startsWith("∴"))        return "therefore";
  if (
    line.startsWith("Given") ||
    line.startsWith("To prove") ||
    line.startsWith("Proof") ||
    line.startsWith("Construction") ||
    line.startsWith("Answer") ||
    line.startsWith("Method")
  )                                return "header";
  if (line.trim() === "")          return "blank";
  return "normal";
}

// Breaks a solution into clean stepwise lines.
// If the data already has explicit "\n" line breaks (manual steps), those are respected.
// Otherwise, a long paragraph is auto-split into sentence-level steps for clarity.
function splitIntoSteps(raw: string): string[] {
  const trimmed = raw.trim();
  if (trimmed.includes("\n")) {
    return trimmed.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
  }
  const sentences = trimmed.match(/[^.!?]+[.!?]+(?=\s+[A-Z∴0-9(]|\s*$)/g);
  if (!sentences || sentences.length <= 1) return [trimmed];
  return sentences.map((s) => s.trim());
}

function SolutionLines({ text }: { text: string }) {
  const lines = splitIntoSteps(text);
  const hasExplicitSteps = lines.some((l) => classifyLine(l) === "step");
  const showAutoNumbers = !hasExplicitSteps && lines.length > 1;

  return (
    <div className="space-y-3 mt-3">
      {lines.map((line, i) => {
        const type = classifyLine(line);
        const isFinal = i === lines.length - 1 && lines.length > 1;

        if (type === "blank") return <div key={i} className="h-1" />;

        if (type === "step") {
          return (
            <p key={i} className="text-base font-extrabold text-gray-900 leading-snug pt-1">
              {line}
            </p>
          );
        }

        if (type === "header") {
          return (
            <p
              key={i}
              className="text-base font-bold text-gray-900 leading-snug pt-1 underline underline-offset-2 decoration-gray-300"
            >
              {line}
            </p>
          );
        }

        // Final line of a multi-step solution: highlight as the answer
        if (isFinal || type === "therefore") {
          return (
            <div
              key={i}
              className="mt-1 px-4 py-3 rounded-lg bg-primary/5 border border-primary/20"
            >
              <span className="text-xs font-extrabold uppercase tracking-wide text-primary">
                Final Answer
              </span>
              <p className="text-base font-extrabold text-gray-900 mt-1 leading-snug">
                {line}
              </p>
            </div>
          );
        }

        if (type === "equals") {
          return (
            <p key={i} className="text-base text-gray-800 leading-snug pl-5 font-bold">
              {line}
            </p>
          );
        }

        // Normal step line — numbered for clean line-by-line reading
        return (
          <div key={i} className="flex gap-3 items-start">
            {showAutoNumbers && (
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
            )}
            <p className="text-base text-gray-800 leading-relaxed font-medium">
              {line}
            </p>
          </div>
        );
      })}
    </div>
  );
}

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

        {/* Questions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={openExercise}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
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
                <div className={`flex items-start gap-3 px-5 pt-5 ${question.diagram ? "pb-0" : "pb-4"} border-b border-gray-200 bg-gray-50`}>
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mt-0.5 shadow-sm">
                    {qIdx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold leading-relaxed text-base">{question.q}</p>
                    {question.diagram && (
                      <DiagramRenderer id={question.diagram} tight />
                    )}
                  </div>
                </div>

                {/* Solution body */}
                <div className="px-5 py-6">
                  {question.parts ? (
                    <div className="space-y-7">
                      {question.parts.map((part, pIdx) => (
                        <div key={pIdx} className="flex gap-4">
                          <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center mt-0.5">
                            {part.label}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-base text-gray-800 font-semibold leading-snug">{part.question}</p>
                            {part.diagram && <DiagramRenderer id={part.diagram} tight />}
                            <div className="mt-3 border-l-2 border-gray-200 pl-4">
                              <span className="text-base font-bold text-gray-900">Solution:</span>
                              <SolutionLines text={part.solution} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="border-l-2 border-gray-200 pl-4">
                      <span className="text-base font-bold text-gray-900">Solution:</span>
                      <SolutionLines text={question.solution ?? ""} />
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
