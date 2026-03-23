# LearnFlow 🎓

A structured e-learning platform where users can browse courses, enroll, watch lessons, and track their progress.

## 🚀 Live Demo Flow

Login → Browse Courses → Enroll → Watch Lessons → Mark Complete → Track Progress

## 🛠 Tech Stack

- React (Hooks)
- React Router v6 (nested routes)
- Context API (state management)
- Tailwind CSS v4
- Vite

## 📦 Features

- Authentication with protected routes
- Course catalog with search and category filter
- Course detail page with lesson list
- Enrollment system (persisted to localStorage)
- Lesson player with video embed and sidebar
- Progress tracking (mark lessons complete + % progress bar)
- Dashboard with enrolled courses and stats

## 🧠 Custom Hooks

- `useAuth` — handles login/logout and user state
- `useEnrollment` — manages course enrollment
- `useProgress` — tracks lesson completion per course

## 📁 Folder Structure

```
src/
├── components/     # CourseCard, ProtectedRoute
├── pages/          # Landing, Login, Register, Catalog, CourseDetail, Dashboard, LessonPlayer, NotFound
├── hooks/          # useAuth, useEnrollment, useProgress
├── store/          # AuthContext, EnrollmentContext
└── data/           # courses.js, users.js
```

## ⚙️ Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/learn-flow.git
cd learn-flow
npm install
npm run dev
```

## 🔐 Test Credentials

```
Email: emmanuel@test.com
Password: password123
```
