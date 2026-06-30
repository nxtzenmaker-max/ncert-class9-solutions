import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 3100); // 2500 + 600

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-[600ms] ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      data-testid="splash-loader"
    >
      <div className="flex flex-col items-center animate-in zoom-in-50 fade-in duration-700 ease-out fill-mode-both">
        <GraduationCap className="h-20 w-20 text-primary mb-4" />
        <h1 className="text-5xl font-bold text-primary tracking-tight">NCERT</h1>
        <p className="text-xl font-medium text-accent mt-2">Class 9 Solutions</p>
      </div>
    </div>
  );
}