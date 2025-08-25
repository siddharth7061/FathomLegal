import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import philo_image from "../../assets/2024-02-Legal-Consult.webp";
import founder_image from "../../assets/2024-06-ishita-fathom-225x300.jpg";
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
  Award,
  Target,
  Heart,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise & Experience",
      description:
        "Our team brings years of specialized experience in corporate law, startup ecosystem, and business regulations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and provide personalized legal solutions tailored to their specific requirements.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical Governance",
      description:
        "We maintain the highest standards of professional ethics and integrity in all our legal practices.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Result-Oriented Solutions",
      description:
        "Our focus is on delivering practical, efficient, and effective legal solutions that drive business success.",
    },
  ];

  const practiceAreas = [
    "Corporate & Commercial Law",
    "Startup Legal Advisory",
    "Mergers & Acquisitions",
    "Contract Drafting & Review",
    "Dispute Resolution & Litigation",
    "Intellectual Property Rights",
    "Employment & Labor Law",
    "Regulatory Compliance",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')`,
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span style={{ color: "#A5292A" }}>Fathom Legal</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Excellence in Legal Practice Since Our Inception
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a full-service law firm committed to providing exceptional
              legal services with integrity, expertise, and a client-first
              approach that sets us apart in the legal landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Fathom Legal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Fathom Legal?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and client satisfaction makes us the
              preferred choice for businesses and individuals seeking reliable
              legal counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group text-center"
              >
                <div className="text-[#A5292A] mb-6 group-hover:opacity-80 transition-opacity flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  At Fathom Legal, we believe that exceptional legal service
                  stems from a deep understanding of our clients' businesses,
                  challenges, and aspirations. Our philosophy is built on three
                  fundamental pillars:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div
                      className="w-3 h-3 rounded-full mr-4 mt-2"
                      style={{ backgroundColor: "#A5292A" }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Client Partnership
                      </h4>
                      <p className="text-gray-600">
                        We view ourselves as partners in our clients' success,
                        working collaboratively to achieve their goals.
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
                        Innovation & Excellence
                      </h4>
                      <p className="text-gray-600">
                        We continuously evolve our practices to provide
                        cutting-edge legal solutions that meet modern business
                        needs.
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
                        Ethical Leadership
                      </h4>
                      <p className="text-gray-600">
                        We maintain the highest ethical standards and serve as
                        trusted advisors in all our professional relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src={philo_image}
                  alt="Legal consultation"
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

      {/* Meet Our Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600">
              Leadership that drives excellence and innovation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={founder_image}
                    alt="Adv. Ishita Sharma"
                    className="w-80 h-80 rounded-2xl object-cover shadow-lg mx-auto"
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: "rgba(165, 41, 42, 0.05)" }}
                  ></div>
                </div>
              </div>

              {/* Founder Details */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Adv. Ishita Sharma
                </h3>
                <p className="text-xl mb-6" style={{ color: "#A5292A" }}>
                  Founder & Managing Partner
                </p>

                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    With over a decade of experience in corporate law and
                    business advisory, Adv. Ishita Sharma founded Fathom Legal
                    with a vision to provide comprehensive legal solutions that
                    truly understand and support business growth.
                  </p>

                  <p>
                    She specializes in corporate structuring, startup ecosystem
                    guidance, and strategic legal planning. Her expertise spans
                    across various industries, making her a trusted advisor for
                    businesses at every stage of their growth journey.
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Areas of Practice:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {practiceAreas.map((area, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className="w-2 h-2 rounded-full mr-3"
                            style={{ backgroundColor: "#A5292A" }}
                          ></div>
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Qualifications:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• LL.B. from National Law University</li>
                      <li>• LL.M. in Corporate Law</li>
                      <li>• Member, Bar Council of India</li>
                      <li>• Certified Corporate Legal Advisor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-20" style={{ backgroundColor: "#A5292A" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Ready to partner with us for your legal needs? Get in touch with
              our experienced team today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-white text-opacity-80 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">
                Office Address
              </h4>
              <p className="text-white text-opacity-80">New Delhi, India</p>
            </div>

            <div className="text-center">
              <Phone className="w-12 h-12 text-white text-opacity-80 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <p className="text-white text-opacity-80">+91-XX-XXXX-XXXX</p>
            </div>

            <div className="text-center">
              <Mail className="w-12 h-12 text-white text-opacity-80 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <p className="text-white text-opacity-80">info@fathomlegal.com</p>
            </div>

            <div className="text-center">
              <Heart className="w-12 h-12 text-white text-opacity-80 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">
                Follow Us
              </h4>
              <div className="flex justify-center space-x-4 mt-2">
                <Linkedin className="w-6 h-6 text-white text-opacity-80 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-white text-opacity-80 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-white text-opacity-80 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              style={{ color: "#A5292A" }}
            >
              Schedule a Consultation{" "}
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
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

export default AboutUs;
