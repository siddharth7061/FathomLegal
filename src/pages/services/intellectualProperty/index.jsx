import React, { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const IntellectualProperty = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Trademark Registration and Protection",
      description:
        "We assist with the entire trademark registration process, including conducting thorough trademark searches, filing applications, responding to office actions, and enforcing trademark rights through litigation or alternative dispute resolution.",
      image:
        "https://images.unsplash.com/photo-1619418602850-35ad20aa1700?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Copyright Registration and Enforcement",
      description:
        "Our team provides guidance on registering copyrights for various creative works, including literary, artistic, musical, software, and architectural designs. We also offer enforcement services such as cease and desist letters, DMCA takedown notices, and litigation.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Trade Secret Protection",
      description:
        "We advise on safeguarding trade secrets by drafting non-disclosure agreements (NDAs), implementing protection policies, conducting internal audits to identify valuable trade secrets, and pursuing legal action against misappropriation.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Intellectual Property Licensing",
      description:
        "Our lawyers negotiate and draft licensing agreements for trademarks, copyrights, trade secrets, and know-how. We help clients structure licensing deals and ensure compliance with all agreement terms.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "IP Portfolio Management",
      description:
        "We provide strategic management of intellectual property portfolios, conducting IP audits, assessing the value of IP assets, identifying monetization opportunities, and implementing strategies to maximize IP value.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Domain Name Disputes",
      description:
        "We resolve domain name disputes, including issues of domain name infringement, cybersquatting, and hijacking. Our services include legal representation in domain name arbitration and litigation.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Brand Protection",
      description:
        "We develop comprehensive strategies for brand protection, including monitoring for trademark infringement, counterfeit goods, and brand dilution. Our proactive measures safeguard your brand's reputation and enforce your rights against infringers.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "IP Due Diligence",
      description:
        "In corporate transactions such as mergers, acquisitions, and licensing deals, we conduct thorough IP due diligence to assess assets and risks, informing decision-making and mitigating potential liabilities.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "IP Litigation and Dispute Resolution",
      description:
        "Our team represents clients in IP litigation, including infringement lawsuits, opposition proceedings, and appeals. We also use alternative dispute resolution methods, such as mediation and arbitration, to resolve disputes efficiently.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "IP Strategy Consulting",
      description:
        "We provide strategic advice and guidance on IP matters, helping clients develop long-term IP strategies aligned with business objectives, evaluate competitive IP landscapes, and manage IP-related risks and opportunities.",
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593444285553-28163240e3f1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Intellectual Property Management: <br />
              <span style={{ color: "#A5292A" }}>Protect Your Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Fathom Legal, we offer a comprehensive range of Intellectual
              Property (IP) services designed to protect and maximize the value
              of your creative assets. Our expertise includes:
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
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
      </section>

      {/* Notice Box (Call to Action) */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl shadow-sm bg-white">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Secure your intellectual property with Fathom Legal. Reach out to
              us for dedicated support in trademark and copyright protection,
              tailored to safeguard your creative and brand assets.
            </p>
            <button
              className="text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-lg"
              style={{ backgroundColor: "#A5292A" }}
            >
              Book your free consultation{" "}
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IntellectualProperty;
