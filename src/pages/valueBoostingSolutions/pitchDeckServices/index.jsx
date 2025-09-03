import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Eye,
  BookOpen,
  Shield,
  Users,
  MessageSquare,
  Target,
  FileText,
} from "lucide-react";

const PitchDeckServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Appeal",
      description:
        "A well-designed pitch deck can make a lasting impression. Our graphic designers will create visually engaging slides that complement your message and captivate your audience.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Storytelling",
      description:
        "Crafting a compelling narrative is key. We assist in structuring your pitch deck to tell a captivating story that resonates with investors, making your startup stand out.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Assurance",
      description:
        "We ensure your pitch deck complies with legal regulations, including disclosures, disclaimers, and any intellectual property considerations.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Rehearsal Support",
      description:
        "Preparing for the presentation is as important as the deck itself. We offer coaching and rehearsal sessions to help you confidently deliver your pitch to potential investors or partners.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Feedback and Iteration",
      description:
        "We value your input and continually refine the pitch deck based on your feedback, making sure it aligns perfectly with your vision and goals.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Guidance",
      description:
        "Our experienced team will work closely with you to align your pitch deck with your business objectives. We ensure that every element, from content to design, serves a strategic purpose.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Optimization",
      description:
        "We review and enhance the content of your pitch deck to convey your startup's unique value proposition, market potential, and growth strategy effectively. Our legal expertise ensures that all information is not only persuasive but also legally sound.",
    },
  ];

  const itemsToShow = 3;
  const totalItems = services.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % totalItems;
      visibleServices.push({ ...services[index], originalIndex: index });
    }
    return visibleServices;
  };

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
            backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
                className="text-white p-4 rounded-lg"
                style={{ backgroundColor: "rgba(165, 41, 42, 0.8)" }}
              >
                <Presentation className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pitch Deck Services
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto">
              Transform your vision into an investor-ready presentation that
              captures attention and secures funding
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Turn Your Vision Into an Investor-Ready Pitch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your pitch deck is often the first impression investors have of
                your company. Make it count with our Pitch Deck Services. We
                craft compelling narratives that highlight your vision, market
                opportunity, and unique value proposition. Our professional
                design ensures your presentation is visually appealing, while
                our data-driven insights incorporate market research and
                financial projections to strengthen your pitch.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional startup pitch presentation"
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

      {/* Carousel Section - Service Highlights */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Comprehensive Pitch Deck Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visual design to strategic guidance, we cover every aspect of
              creating a winning pitch deck that resonates with investors.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 text-white p-3 rounded-full shadow-lg hover:opacity-80 transition-all"
              style={{ backgroundColor: "#A5292A" }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 text-white p-3 rounded-full shadow-lg hover:opacity-80 transition-all"
              style={{ backgroundColor: "#A5292A" }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
                {getVisibleServices().map((service, index) => (
                  <div
                    key={`${service.originalIndex}-${currentIndex}`}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  >
                    <div
                      className="text-white p-3 rounded-lg mb-6 w-fit group-hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: "#A5292A" }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button
                      className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all w-full"
                      style={{ backgroundColor: "#A5292A" }}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-12 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#A5292A]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Pitch Deck Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our Pitch Deck Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our unique combination of legal expertise, business acumen, and
                design excellence ensures your pitch deck not only looks
                professional but also meets all regulatory requirements while
                effectively communicating your value proposition to investors.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Legal Compliance Guaranteed
                    </h4>
                    <p className="text-gray-600">
                      Every pitch deck meets regulatory requirements with proper
                      disclosures and legal protections.
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
                      Professional Design & Storytelling
                    </h4>
                    <p className="text-gray-600">
                      Compelling narratives combined with visually stunning
                      design that captures investor attention.
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
                      From initial concept to final presentation, including
                      rehearsal coaching and iteration support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Professional pitch deck consultation"
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
                Ready to Create a Winning Pitch Deck?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let our expert team help you craft a compelling, legally
                compliant pitch deck that resonates with investors and secures
                the funding you need to grow your business.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
                onClick={() => (window.location.href = "#contact")}
              >
                Start your pitch deck project
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

export default PitchDeckServices;