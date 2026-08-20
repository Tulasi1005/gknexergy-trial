import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import AINetwork from "./components/Home/AINetwork";
import StartHere from "./components/Home/subgroup";
import CarouselComponent from "./CarouselComponent";
import AboutUs from "./components/About/AboutUs";   // adjust path
import Navbar from "./Navbar";
import Contact from "./components/Contact/Contact"; // adjust path

import Projects from "./components/Projects/Projects";


function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* First landing page */}

      <Route path="/" element={<Home />} />

      {/* Pages with the navbar */}

      <Route
        path="/start-here"
        element={
          <MainLayout>
            {/* <Homebanner /> */}
            <AINetwork />
          </MainLayout>
        }
      />

      <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />

      <Route
        path="/courses"
        element={
          <MainLayout>
            <CarouselComponent />
          </MainLayout>
        }
      />

      <Route
        path="/subgroup/:service"
        element={
          <MainLayout>
            <StartHere />
          </MainLayout>
        }
      />

      {/* <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} /> */}
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

        
      <Route
        path="/projects"
        element={
          <MainLayout>
            <Projects />
          </MainLayout>
        }
      />
    </Routes>
  );
}
