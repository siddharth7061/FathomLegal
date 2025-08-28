import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import ServicesPage from "./pages/services";
import GeneralCorporateAdvisory from "./pages/services/gneralCorporateAdvisory";
import AgreementsAndPolicies from "./pages/services/agreementAndPolicies";
import DisputeResolution from "./pages/services/disputeResolution";
import IntellectualProperty from "./pages/services/intellectualProperty";
import SafeInclusiveWorkplaces from "./pages/services/safeWorkplace";
import RealEstateSolutions from "./pages/services/realEstateSolutions";
import REITSolutions from "./pages/services/reitSolutions";

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
      <Route
        path="/services/agreementandpolicies"
        element={<AgreementsAndPolicies />}
      />
      <Route
        path="/services/disputeresolution"
        element={<DisputeResolution />}
      />
      <Route
        path="/services/intellectualproperty"
        element={<IntellectualProperty />}
      />
      <Route path="/services/ankush" element={<SafeInclusiveWorkplaces />} />
      <Route
        path="/services/realestatesolutions"
        element={<RealEstateSolutions />}
      />
      <Route path="/services/reitsolutions" element={<REITSolutions />} />
    </Routes>
  );
};

export default App;
