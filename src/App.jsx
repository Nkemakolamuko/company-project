import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Subcompanies from "./pages/Subcompanies";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more/:id" element={<Subcompanies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
