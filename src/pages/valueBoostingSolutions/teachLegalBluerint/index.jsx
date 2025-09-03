import React from "react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowRight,
  Code,
  Shield,
  Users,
  Scale,
  CheckCircle,
  Zap,
  Globe,
  Lock,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react";

const TechLegalBlueprint = () => {
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Customized Legal Strategies",
      description:
        "Tailored legal frameworks designed specifically for your tech business needs and growth trajectory.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection & Privacy",
      description:
        "Comprehensive compliance with data protection regulations including GDPR, CCPA, and local privacy laws.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Intellectual Property Protection",
      description:
        "Strategic IP portfolio management, patent filing, trademark protection, and trade secret safeguarding.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description:
        "Navigate complex tech regulations, industry standards, and emerging compliance requirements.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalable Solutions",
      description:
        "Legal frameworks that grow with your business, from startup to enterprise level operations.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Proactive Risk Management",
      description:
        "Identify and mitigate potential legal issues before they impact your business operations.",
    },
  ];

  const benefits = [
    "Strategic legal planning aligned with business objectives",
    "Comprehensive IP portfolio development and protection",
    "Data privacy and cybersecurity compliance frameworks",
    "Contract templates and negotiation strategies",
    "Regulatory compliance roadmaps and monitoring",
    "Risk assessment and mitigation protocols",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1654588833369-5174f4640cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                <Code className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tech Legal Blueprint
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto">
              Comprehensive legal framework for technology companies and digital
              innovators
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
                A Blueprint for Tech Success
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Navigating the complex legal landscape of the tech industry can
                be daunting. Our Tech Legal Blueprint service offers a robust
                framework tailored to your specific needs, ensuring you are
                well-prepared for growth and innovation. We deliver customized
                legal strategies, offering expert advice on intellectual
                property, regulatory compliance, and data protection. Our
                scalable solutions are designed to grow with your business,
                while our proactive risk management approach helps you identify
                and mitigate potential legal issues before they arise.
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Tech legal blueprint concept"
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

      {/* Key Features Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Comprehensive Tech Legal Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Tech Legal Blueprint covers every aspect of technology law,
              providing you with the tools and strategies needed to navigate the
              digital landscape successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start mb-6">
                  <div
                    className="text-white p-3 rounded-lg mr-4 flex-shrink-0 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "#A5292A" }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tech Legal Blueprint */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Tech Companies Trust Our Blueprint
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Tech Legal Blueprint is more than just legal advice—it's a
                comprehensive strategy designed to protect your innovation while
                enabling rapid growth. We understand the unique challenges
                facing technology companies and provide practical solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Industry Expertise
                    </h4>
                    <p className="text-gray-600">
                      Deep understanding of technology sector challenges and
                      opportunities.
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
                      Future-Ready Solutions
                    </h4>
                    <p className="text-gray-600">
                      Legal frameworks that anticipate and adapt to
                      technological evolution.
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
                      Practical Implementation
                    </h4>
                    <p className="text-gray-600">
                      Actionable strategies that integrate seamlessly with your
                      business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                  alt="Technology innovation and legal compliance"
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

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Blueprint Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building your tech legal foundation, from
              assessment to implementation and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Comprehensive analysis of your current legal position and technology stack.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Custom legal framework development tailored to your business model and goals.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Deployment of legal structures, policies, and compliance frameworks.",
              },
              {
                step: "04",
                title: "Monitoring",
                description:
                  "Ongoing support, updates, and optimization of your legal blueprint.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
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
              <div className="flex items-center justify-center mb-6">
                <div
                  className="text-white p-4 rounded-lg"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  <Lightbulb className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Build Your Tech Legal Foundation?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let our Tech Legal Blueprint service provide you with the
                comprehensive legal framework your technology company needs to
                thrive in today's digital landscape.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
                onClick={() => (window.location.href = "#contact")}
              >
                Get Your Blueprint Today
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

export default TechLegalBlueprint;
