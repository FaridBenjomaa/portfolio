import { useEffect, useState } from "react";

const useSectionInView = (sectionId) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId]);

  return isInView;
};

export default useSectionInView;