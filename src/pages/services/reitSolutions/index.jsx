import React from "react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowRight,
  Building2,
  FileText,
  Shield,
  Scale,
  MapPin,
  Calculator,
  Users,
  CheckCircle,
  Eye,
  FileCheck,
  DollarSign,
  UserCheck,
  Gavel,
  TrendingUp,
  Handshake,
} from "lucide-react";

const REITSolutions = () => {
  const reitServices = [
    {
      title: "Structuring and Formation",
      description:
        "We guide REIT owners through entity formation and structuring, ensuring compliance with regulatory requirements and optimizing legal structures to achieve objectives.",
      icon: <Building2 className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Our team ensures REITs meet tax laws, securities regulations, and REIT-specific rules, handling reporting obligations, tax filings, and obtaining regulatory approvals.",
      icon: <Shield className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Property Acquisition and Disposition",
      description:
        "We manage legal aspects of property transactions, from due diligence to negotiating agreements, ensuring smooth transfers and identifying potential risks.",
      icon: <MapPin className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    },
    {
      title: "Leasing and Tenant Relations",
      description:
        "We draft and negotiate lease agreements, advise on tenant disputes, and handle legal matters related to tenant relations to protect the REIT's interests.",
      icon: <Handshake className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    },
    {
      title: "Financing and Capital Markets",
      description:
        "Our lawyers assist with debt financing, equity offerings, and securities compliance, advising on capital raising strategies and corporate governance.",
      icon: <TrendingUp className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Corporate Governance and Compliance",
      description:
        "We provide guidance on best practices, fiduciary duties, and regulatory compliance, assisting with board governance, internal investigations, and corporate compliance programs.",
      icon: <Users className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
    },
    {
      title: "Litigation and Dispute Resolution",
      description:
        "In case of disputes, we represent REIT owners in litigation, arbitration, and mediation, handling contract, property, shareholder, and regulatory disputes effectively.",
      icon: <Gavel className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="text-white py-20 relative"
        style={{ minHeight: "60vh" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div
          className="container mx-auto px-4 relative z-10 flex items-center justify-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              REIT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto">
              Comprehensive legal support for Real Estate Investment Trusts
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Legal Services for Real Estate Investment Trusts (REITs)
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Fathom Legal, we provide comprehensive legal support to Real
              Estate Investment Trust (REIT) owners, helping them navigate
              complex legal challenges and mitigate risks. Our expertise
              includes:
            </p>
          </div>
        </div>
      </section>

      {/* REIT Services Sections */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {reitServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start mb-6">
                    <div
                      className="text-white p-3 rounded-lg mr-4 flex-shrink-0"
                      style={{ backgroundColor: "#A5292A" }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-lg w-full h-80 object-cover"
                    />
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: "rgba(165, 41, 42, 0.1)" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for REIT Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Fathom Legal for REIT Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized expertise in REIT law, combined with deep
                understanding of real estate markets and regulatory
                requirements, makes us the ideal partner for your REIT
                operations and growth strategies.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Comprehensive REIT Expertise
                    </h4>
                    <p className="text-gray-600">
                      Deep knowledge of REIT structures, regulations, and best
                      practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      End-to-End Legal Support
                    </h4>
                    <p className="text-gray-600">
                      From formation to ongoing compliance and dispute
                      resolution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Strategic Business Focus
                    </h4>
                    <p className="text-gray-600">
                      Legal solutions aligned with your business objectives and
                      growth plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                  alt="REIT consulting services"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ backgroundColor: "rgba(165, 41, 42, 0.1)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Key Benefits of Our REIT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize your REIT's potential with our comprehensive legal
              support and strategic guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div
                className="text-white p-3 rounded-lg mb-6 w-fit"
                style={{ backgroundColor: "#A5292A" }}
              >
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Ensure full compliance with all REIT-specific regulations and
                reporting requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div
                className="text-white p-3 rounded-lg mb-6 w-fit"
                style={{ backgroundColor: "#A5292A" }}
              >
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Risk Mitigation
              </h3>
              <p className="text-gray-600">
                Identify and mitigate potential legal risks before they impact
                your operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div
                className="text-white p-3 rounded-lg mb-6 w-fit"
                style={{ backgroundColor: "#A5292A" }}
              >
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Growth Strategies
              </h3>
              <p className="text-gray-600">
                Legal support for expansion, acquisitions, and capital raising
                initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div
                className="text-white p-3 rounded-lg mb-6 w-fit"
                style={{ backgroundColor: "#A5292A" }}
              >
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Governance Support
              </h3>
              <p className="text-gray-600">
                Expert guidance on corporate governance and best practices for
                REIT management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div
                className="text-white p-3 rounded-lg mb-6 w-fit"
                style={{ backgroundColor: "#A5292A" }}
              >
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Transaction Support
              </h3>
              <p className="text-gray-600">
                Comprehensive legal support for property acquisitions,
                dispositions, and financing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div
                className="text-white p-3 rounded-lg mb-6 w-fit"
                style={{ backgroundColor: "#A5292A" }}
              >
                <Gavel className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Dispute Resolution
              </h3>
              <p className="text-gray-600">
                Professional representation in all types of REIT-related
                disputes and litigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Notice Box */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="p-12 rounded-2xl text-center"
              style={{
                backgroundColor: "rgba(165, 41, 42, 0.05)",
                border: "2px solid rgba(165, 41, 42, 0.1)",
              }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Secure Your REIT Operations with Expert Legal Support
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Secure your intellectual property with Fathom Legal. Reach out
                to us for dedicated support in trademark and copyright
                protection, tailored to safeguard your creative and brand
                assets.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
                onClick={() => (window.location.href = "#contact")}
              >
                Book your slot today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default REITSolutions;
