import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const PHRASES = [
  "Celo Builder",
  "Canvassing Founder",
  "Flutter + Web Engineer",
];

export function TypingTagline() {
  const reduce = useReducedMotion();
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(PHRASES[0]);
      return;
    }
    const current = PHRASES[phraseIdx];
    const speed = deleting ? 40 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx, reduce]);

  return (
    <span className="font-display font-bold text-primary">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}
