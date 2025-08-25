import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/cropped-icon-red-192x192.png";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Scale,
  Users,
  FileText,
  Shield,
  ArrowRight,
  Star,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";

const DisclaimerPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Slightly Dark Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Popup Box */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl mx-4 p-8 max-h-[90vh] overflow-y-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            <span style={{ color: "#A5292A" }}>Disclaimer</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-left">
            In accordance with the regulations set by the Bar Council of India,
            lawyers and law firms are prohibited from actively seeking work or
            engaging in advertising practices. By selecting the 'I Agree'
            button, you affirm and acknowledge that you are voluntarily seeking
            information about Fathom Legal, Advocates & Corporate Consultants
            (FLACC) and that there has been no form of advertising, direct
            communication, solicitation, invitation, or any other attempt,
            either from FLACC or any of its members, to encourage work
            engagement through this website.
          </p>

          <button
            onClick={onClose}
            className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: "#A5292A" }}
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
  };

  const services = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Corporate Law",
      description:
        "Comprehensive corporate legal services including compliance, governance, and regulatory matters.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Startup Legal Services",
      description:
        "Specialized legal support for startups, including incorporation, funding, and growth strategies.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Contract Management",
      description:
        "Expert contract drafting, review, and management services for businesses of all sizes.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dispute Resolution",
      description:
        "Professional dispute resolution services including arbitration and litigation support.",
    },
  ];

  const practiceAreas = [
    "Mercantile Law",
    "Corporate Advisory",
    "Startup Ecosystem",
    "SMB Legal Services",
    "NGO & NPO Legal Support",
    "Trust & Society Formation",
    "Intellectual Property",
    "Employment Law",
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Tech Startup Founder",
      text: "Fathom Legal provided exceptional guidance during our startup incorporation. Their expertise in the startup ecosystem is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      company: "NGO Director",
      text: "Their support for our NGO compliance and governance has been invaluable. Highly professional and knowledgeable team.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      company: "SME Owner",
      text: "Outstanding corporate legal services. They understand the unique challenges faced by small and medium businesses.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Disclaimer Popup */}
      <DisclaimerPopup
        isOpen={showDisclaimer}
        onClose={handleDisclaimerClose}
      />

      {/* Nav Bar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(4px)",
          }}
        ></div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(250, 250, 250, 0.6)" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Where Law and Business{" "}
              <span style={{ color: "#A5292A" }}>MEETS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Expert Legal Services for Businesses and Individuals
            </p>
            <p className="text-lg mb-10 text-gray-600 max-w-3xl mx-auto">
              Fathom Legal Advocates & Corporate Consultants is a full-service
              law firm headquartered in New Delhi, India. We deliver
              high-quality legal services to clients across the country and the
              world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center"
                style={{ backgroundColor: "#A5292A" }}
              >
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-gray-300">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your business needs with
              a focus on the startup ecosystem and SMB sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-[#A5292A] mb-4 group-hover:opacity-80 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-[#A5292A] font-medium hover:opacity-80 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Practice Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in Mercantile law, Dispute Resolution and General
                Corporate Advisory, with a focus on the Startup Ecosystem and
                Small and Medium Businesses (SMB) sector.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {practiceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white rounded-lg border border-gray-100"
                  >
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "#A5292A" }}
                    ></div>
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div
                className="p-8 rounded-2xl text-white"
                style={{ backgroundColor: "#A5292A" }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Fathom Legal?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white bg-opacity-70 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Dedicated team of experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white bg-opacity-70 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Specialized expertise in startup ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white bg-opacity-70 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Client-focused approach with ethical governance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white bg-opacity-70 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Nationwide and international service delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about our legal services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <p className="text-gray-600 mb-6 italic">
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 text-white"
        style={{ backgroundColor: "#A5292A" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Ready to discuss your legal needs? Contact our experienced team
                for professional legal consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-white text-opacity-70 mr-4" />
                  <div>
                    <div className="font-semibold">Office Address</div>
                    <div className="text-white text-opacity-80">
                      New Delhi, India
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-white text-opacity-70 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white text-opacity-80">
                      +91-XX-XXXX-XXXX
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-white text-opacity-70 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white text-opacity-80">
                      info@fathomlegal.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl text-gray-800">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none"
                />
                <textarea
                  placeholder="Tell us about your legal needs"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none"
                ></textarea>
                <button
                  onClick={() =>
                    alert("Message sent! We will contact you soon.")
                  }
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Fathom <span style={{ color: "#A5292A" }}>Legal</span>
              </div>
              <p className="text-gray-300 mb-4">
                Expert legal services for businesses and individuals with a
                focus on startup ecosystem and SMB sector.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Corporate Law
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Startup Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dispute Resolution
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    NGO & NPO
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>
              &copy; 2024 Fathom Legal Advocates & Corporate Consultants. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
