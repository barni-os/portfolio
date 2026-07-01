import { useEffect, useRef, useState } from "react";

function ProgressBar({ progress }) {
  const [filled, setFilled] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(progress);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "1rem" }}>
      <div style={{ height: "10px", background: "var(--bg-grid)", border: "1px solid var(--ink)" }}>
        <div style={{
          height: "100%",
          width: `${filled}%`,
          background: "var(--accent)",
          transition: "width 0.8s cubic-bezier(0.65,0,0.35,1)"
        }} />
      </div>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.05em" }}>
        {progress}% COMPLETE
      </span>
    </div>
  );
}

export default ProgressBar;