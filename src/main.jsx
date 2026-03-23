import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./store/AuthContext";
import "./index.css";
import { EnrollmentProvider } from "./store/EnrollmentContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <EnrollmentProvider>
        <App />
      </EnrollmentProvider>
    </AuthProvider>
  </StrictMode>,
);
