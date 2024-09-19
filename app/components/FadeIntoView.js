"use client";
import { useState, useRef, useEffect } from "react";

function FadeIntoView({ children }) {
  const [isVisible, setVisible] = useState(false);
  const [alreadyViewed, setAlreadyViewed] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentDomRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setAlreadyViewed(true);
        } else {
          setVisible(false);
        }
      });
    });

    observer.observe(currentDomRef);

    return () => observer.unobserve(currentDomRef);
  }, []);

  return (
    <div
      ref={domRef}
      className={`my-4 fade-into-view transition-transform duration-[400ms] ease-out will-change-opacity transform
        ${
          isVisible || alreadyViewed
            ? "opacity-100 visible transform-none"
            : "translate-y-[20vh] opacity-0 invisible"
        }
      `}
    >
      {children}
    </div>
  );
}

export default FadeIntoView;
