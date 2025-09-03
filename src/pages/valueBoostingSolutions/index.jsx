import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Star,
  UserCheck,
  Shield,
  TrendingUp,
  FileText,
  Lock,
} from "lucide-react";

const ValueBoostingSolutions = () => {
  const services = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Chief Legal Officer Service",
      description:
        "Get executive-level legal expertise without the full-time cost. Our CLO service provides strategic legal leadership for your growing business.",
      slug: "chief-legal-officer",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tech Legal Blueprint",
      description:
        "Comprehensive legal framework designed specifically for tech companies, covering compliance, IP protection, and regulatory requirements.",
      slug: "tech-legal-blueprint",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "VC Funding Support",
      description:
        "Navigate the complex world of venture capital funding with expert legal support for term sheets, due diligence, and closing processes.",
      slug: "vc-funding-support",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Pitch Deck Services",
      description:
        "Professional legal review and enhancement of your pitch decks to ensure compliance and maximize investor appeal while protecting your interests.",
      slug: "pitch-deck-services",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description:
        "Comprehensive cybersecurity compliance and legal protection services to safeguard your business against digital threats and regulatory risks.",
      slug: "cybersecurity-services",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Startup CEO",
      text: "Fathom Legal's CLO service has been instrumental in scaling our business. Their strategic legal guidance helped us navigate complex regulations while focusing on growth.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "SaaS Company Founder",
      text: "The Tech Legal Blueprint service provided us with a solid foundation for our technology business. Their expertise in IP protection and compliance is exceptional.",
      rating: 5,
    },
    {
      name: "Vikram Patel",
      company: "Fintech Entrepreneur",
      text: "Their VC funding support was crucial during our Series A round. The team's experience with term sheets and due diligence processes made all the difference.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar page="vbs" />

      {/* Hero Section */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        ></div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(250, 250, 250, 0.9)" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: "#A5292A" }}
            >
              WELCOME TO FATHOM LEGAL
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              Value Boosting
              <span style={{ color: "#A5292A" }}> Solutions</span>
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-[#A5292A] mb-6 group-hover:opacity-80 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-[#A5292A] font-semibold hover:opacity-80 flex items-center group-hover:translate-x-1 transition-transform">
                  Find out more <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: "#A5292A" }}
            >
              Why Choose us ?
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Empowering Your Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fathom Legal is dedicated to empowering startups and growing
              companies with industry expertise, a client-centric approach, and
              proven success. Our team consists of seasoned legal professionals
              with extensive experience in tech, finance, and cybersecurity. We
              prioritize your business goals, tailoring our services to meet
              your unique needs and helping you achieve your full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to take your business to the next level?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Contact Fathom Legal today to learn more about our
                value-boosting services and how we can support your growth.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
                onClick={() => (window.location.href = "#contact")}
              >
                Get a quote
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

export default ValueBoostingSolutions;
