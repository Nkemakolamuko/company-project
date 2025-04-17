import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Subcompanies from "./pages/Subcompanies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more/:id" element={<Subcompanies />} />
      </Routes>
    </>
  );
}

export default App;
