import React from "react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Scale,
  CheckCircle,
  Zap,
  Globe,
  Lock,
  FileText,
  Lightbulb,
  Target,
  PieChart,
  BarChart3,
  Handshake,
  Shield,
} from "lucide-react";

const VCFundingSupport = () => {
  const fundingServices = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Investor-Ready Documentation",
      description:
        "Comprehensive preparation of term sheets, shareholder agreements, and all necessary legal documents for funding rounds.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Positioning",
      description:
        "Expert guidance on presenting your business effectively to potential investors and highlighting key value propositions.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Due Diligence Management",
      description:
        "Streamlined due diligence process management to ensure smooth and efficient investor evaluation.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Structure Optimization",
      description:
        "Optimize your corporate structure to be attractive to investors while protecting founder interests.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Negotiation Support",
      description:
        "Expert negotiation support to secure favorable terms while maintaining positive investor relationships.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance & Governance",
      description:
        "Ensure regulatory compliance and establish strong corporate governance frameworks for investor confidence.",
    },
  ];

  const fundingStages = [
    {
      stage: "Pre-Seed",
      description:
        "Initial structure and documentation for early-stage funding",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      stage: "Seed Round",
      description:
        "Comprehensive support for first institutional funding round",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      stage: "Series A",
      description: "Advanced structuring and negotiation for growth capital",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      stage: "Series B+",
      description: "Complex funding rounds with multiple investor classes",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const benefits = [
    "Comprehensive term sheet preparation and review",
    "Shareholder agreement drafting and negotiation",
    "Corporate governance framework development",
    "Investor relations legal structure setup",
    "Due diligence coordination and management",
    "Regulatory compliance and reporting systems",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
            <div className="flex items-center justify-center mb-6">
              <div
                className="text-white p-4 rounded-lg mr-4"
                style={{ backgroundColor: "rgba(165, 41, 42, 0.8)" }}
              >
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              VC Funding Support
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto">
              Comprehensive legal support for securing venture capital and
              scaling your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Fuel Your Growth with Smart Capital
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Securing venture capital is a critical step in scaling your
                business. Our VC Funding Support service equips you with the
                tools and expertise to attract and secure investment. We prepare
                investor-ready documentation, including term sheets and
                shareholder agreements, and provide strategic positioning
                guidance to help you present your business effectively to
                potential investors. Additionally, we manage the due diligence
                process, ensuring a smooth and efficient experience.
              </p>

              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mr-4 mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#A5292A" }}
                    ></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="VC funding and investment growth"
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

      {/* Funding Services Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Comprehensive VC Funding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial preparation to final closing, we provide end-to-end
              legal support throughout your funding journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start mb-6">
                  <div
                    className="text-white p-3 rounded-lg mr-4 flex-shrink-0 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "#A5292A" }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Stages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Support Across All Funding Stages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're raising your first round or scaling through
              multiple Series, we provide tailored legal support for every stage
              of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fundingStages.map((stage, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 mx-auto group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  {stage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {stage.stage}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Startups Choose Our VC Support
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our VC Funding Support service combines deep legal expertise
                with practical business understanding, helping you navigate the
                complex world of venture capital with confidence and success.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Startup-Focused Expertise
                    </h4>
                    <p className="text-gray-600">
                      Deep understanding of startup ecosystem and investor
                      expectations.
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
                      Proven Track Record
                    </h4>
                    <p className="text-gray-600">
                      Successfully supported numerous funding rounds across
                      various industries.
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
                      End-to-End Support
                    </h4>
                    <p className="text-gray-600">
                      Complete legal framework from initial preparation to
                      post-funding compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Investment partnership and funding"
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

      {/* Success Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Impact on Startup Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track record of successful funding rounds and satisfied clients
              across various industries and funding stages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "₹500Cr+",
                label: "Total Funding Raised",
                description: "Across all client funding rounds",
              },
              {
                metric: "150+",
                label: "Successful Rounds",
                description: "From pre-seed to Series C",
              },
              {
                metric: "95%",
                label: "Success Rate",
                description: "Funding rounds successfully closed",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#A5292A" }}
                >
                  {stat.metric}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="p-12 rounded-2xl text-center"
              style={{
                backgroundColor: "rgba(165, 41, 42, 0.05)",
                border: "2px solid rgba(165, 41, 42, 0.1)",
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div
                  className="text-white p-4 rounded-lg"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  <DollarSign className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Secure Your Next Funding Round?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let our VC Funding Support service help you navigate the complex
                world of venture capital and secure the investment your business
                needs to scale.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
                onClick={() => (window.location.href = "#contact")}
              >
                Start Your Funding Journey
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

export default VCFundingSupport;
