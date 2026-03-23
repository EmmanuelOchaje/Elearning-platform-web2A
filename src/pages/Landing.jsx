import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../component/nav";
import Hero from "../component/hero";
import Stats from "../component/stats";
import Features from "../component/features";
import Footer from "../component/footer";
import Contact from "../component/contact";

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white font-['DM_Sans']">
      <Navbar user={user} />
      <Hero />
      <Stats />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
