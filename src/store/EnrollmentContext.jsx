import { createContext, useState } from "react";

export const EnrollmentContext = createContext(null);

export function EnrollmentProvider({ children }) {
  const [enrolled, setEnrolled] = useState(() => {
    const stored = localStorage.getItem("lf_enrolled");
    return stored ? JSON.parse(stored) : [];
  });

  const enroll = (courseId) => {
    if (enrolled.find((e) => e.courseId === courseId)) return;
    const updated = [
      ...enrolled,
      { courseId, enrolledAt: new Date().toISOString() },
    ];
    localStorage.setItem("lf_enrolled", JSON.stringify(updated));
    setEnrolled(updated);
  };

  const isEnrolled = (courseId) =>
    enrolled.some((e) => e.courseId === courseId);

  return (
    <EnrollmentContext.Provider value={{ enrolled, enroll, isEnrolled }}>
      {children}
    </EnrollmentContext.Provider>
  );
}
