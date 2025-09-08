import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 z-50 rounded-full p-3 bg-gold-600 hover:bg-gold-700 text-black-950 shadow-lg border border-gold-400"
      aria-label="Scroll to top"
      type="button"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
