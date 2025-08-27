import React from "react";
import { Navbar } from "../../../components/Navbar";
import { ArrowRight } from "lucide-react";

const GeneralCorporateAdvisory = () => {
  const services = [
    {
      title: "Private Equity and Venture Capital",
      text: "Navigating the complexities of private equity and venture capital transactions requires expert legal guidance. Our team assists with every aspect of these transactions, from due diligence and structuring to negotiation and closing. We ensure that your interests are protected and that you achieve favourable outcomes.",
      image:
        "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Business handshake representing private equity deals",
    },
    {
      title: "Intellectual Property",
      text: "Protecting your intellectual property (IP) is crucial in maintaining your competitive edge. We offer comprehensive IP services, including trademark registration, copyright protection, patent filing, and IP portfolio management. Our goal is to safeguard your innovations and creations against infringement.",
      image:
        "https://images.unsplash.com/photo-1593444285553-28163240e3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Intellectual property concept with lightbulb and gears",
    },
    {
      title: "Review and Drafting of Agreements and Policies",
      text: "Clear, precise agreements and policies are the backbone of any successful business. We specialize in drafting, reviewing, and negotiating a wide range of legal documents, including employment contracts, partnership agreements, service agreements, and corporate policies. Our meticulous approach ensures that your contracts are enforceable and aligned with your business objectives.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "Legal documents and contracts on desk",
    },
    {
      title: "Legal Advisory on Business Transactions",
      text: "From mergers and acquisitions to joint ventures and strategic alliances, our legal advisory services cover all aspects of business transactions. We provide thorough due diligence, risk assessment, and strategic advice to facilitate smooth and successful transactions.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "Business meeting for M&A transactions",
    },
    {
      title: "Strengthening Sales Processes by Expert Legal Guidance",
      text: "Effective sales processes are vital for business growth. Our legal experts help streamline and strengthen your sales operations by providing guidance on compliance, contract management, and dispute resolution. We ensure that your sales processes are legally sound and optimized for success.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "Sales growth chart and business analytics",
    },
    {
      title: "Day-to-Day Advisory on Business Operations",
      text: "Running a business involves navigating a myriad of legal issues on a daily basis. Our team offers ongoing legal support to address everyday operational challenges, from regulatory compliance and employment law to commercial disputes and corporate governance. We are your trusted legal partner, committed to ensuring your business operates smoothly and efficiently.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "Modern office team working on business operations",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar page="services" />

      {/* Hero Section */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
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
              General Corporate{" "}
              <span style={{ color: "#A5292A" }}>Advisory</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Intro Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Services We Offer:
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Fathom Legal, our General Corporate Advisory services are
              designed to support businesses at every stage of their growth. We
              offer a comprehensive suite of legal solutions tailored to meet
              the unique needs of startups, SMEs, and established enterprises.
              Our team of experienced corporate lawyers is dedicated to
              providing practical, insightful, and proactive legal advice to
              help your business thrive in a competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Detailed Services */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? "mb-20" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>

              {/* Image */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="rounded-2xl shadow-lg w-full h-96 object-cover"
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
      </section>

      {/* Section 3 - Notice Box (Call to Action) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center p-12 rounded-2xl"
            style={{ backgroundColor: "#A5292A" }}
          >
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              At Fathom Legal, we understand that every business is unique. Our
              General Corporate Advisory services are tailored to provide the
              specific legal support your business needs, allowing you to focus
              on what you do best—growing your business. Contact us today to
              learn how we can support your corporate legal needs.
            </p>
            <button
              className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              style={{ color: "#A5292A" }}
            >
              Book your slot today{" "}
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

export default GeneralCorporateAdvisory;
