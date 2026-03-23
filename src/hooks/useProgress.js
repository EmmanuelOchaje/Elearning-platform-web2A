import { useState } from "react";

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    const stored = localStorage.getItem("lf_progress");
    return stored ? JSON.parse(stored) : {};
  });

  const markComplete = (courseId, lessonId) => {
    const key = `${courseId}`;
    const current = progress[key] || [];
    if (current.includes(lessonId)) return;
    const updated = { ...progress, [key]: [...current, lessonId] };
    localStorage.setItem("lf_progress", JSON.stringify(updated));
    setProgress(updated);
  };

  const isComplete = (courseId, lessonId) => {
    return (progress[`${courseId}`] || []).includes(lessonId);
  };

  const getProgress = (courseId, totalLessons) => {
    const completed = (progress[`${courseId}`] || []).length;
    return totalLessons === 0
      ? 0
      : Math.round((completed / totalLessons) * 100);
  };

  return { markComplete, isComplete, getProgress };
}
