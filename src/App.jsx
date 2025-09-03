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
import ValueBoostingSolutions from "./pages/valueBoostingSolutions";
import ChiefLegalOfficerService from "./pages/valueBoostingSolutions/chiefLegalOfficerService";
import ThoughtLeadership from "./pages/thought_leadership";
import TechLegalBlueprint from "./pages/valueBoostingSolutions/teachLegalBluerint";
import VCFundingSupport from "./pages/valueBoostingSolutions/vcFundingSupport";
import PitchDeckServices from "./pages/valueBoostingSolutions/pitchDeckServices";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />

      {/* Services */}
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

      {/* Value Boosting Solutions */}
      <Route
        path="/valueboostingsolutions"
        element={<ValueBoostingSolutions />}
      />
      <Route
        path="/valueboostingsolutions/chieflegalofficerservice"
        element={<ChiefLegalOfficerService />}
      />
      <Route
        path="/valueboostingsolutions/techLegalBlueprint"
        element={<TechLegalBlueprint />}
      />
      <Route
        path="/valueboostingsolutions/vcfundingsupport"
        element={<VCFundingSupport />}
      />
      <Route
        path="/valueboostingsolutions/pitchdeckservices"
        element={<PitchDeckServices />}
      />

      {/* Thought Leadership */}
      <Route path="/thoughtleadership" element={<ThoughtLeadership />} />
    </Routes>
  );
};

export default App;
