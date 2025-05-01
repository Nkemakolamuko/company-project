import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Subcompanies from "./pages/Subcompanies";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import GoToTop from "./components/GoToTop";
import { useEffect, useState } from "react";

function App() {
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      console.log("scrollY:", window.scrollY);
      if (window.scrollY > 500) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more/:id" element={<Subcompanies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GoToTop show={hideTopBar} />
    </div>
  );
}

export default App;
