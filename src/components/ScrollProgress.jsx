import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const position = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (position / height) * 100 : 0;
      setProgress(percent);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}
