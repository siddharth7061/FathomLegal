import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import ServicesPage from "./pages/services";
import GeneralCorporateAdvisory from "./pages/services/gneralCorporateAdvisory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route
        path="/services/generalcorporateadvisory"
        element={<GeneralCorporateAdvisory />}
      />
    </Routes>
  );
};

export default App;
