import React, { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight, Plus, Minus } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const DisputeResolution = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const expertiseAreas = [
    {
      title: "Transactional Disputes",
      description:
        "Transactional disputes can arise in various business transactions, including mergers and acquisitions, joint ventures, and partnership agreements. Our team has extensive experience in resolving transactional disputes through negotiation, mediation, arbitration, and litigation. We work tirelessly to protect your rights and interests while minimizing disruption to your business operations.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Debt Recovery",
      description:
        "Unpaid debts can pose significant challenges to businesses, affecting cash flow and profitability. Our debt recovery specialists employ strategic approaches to recover outstanding debts efficiently and cost-effectively. Whether it's negotiating repayment plans, pursuing legal action, or enforcing judgments, we are committed to helping you recover what you're owed.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Commercial Disputes",
      description:
        "Commercial disputes can arise from contractual disagreements, business torts, intellectual property disputes, and other commercial matters. Our lawyers are skilled in handling a wide range of commercial disputes, from breach of contract claims to complex business litigation. We strive to resolve disputes through negotiation, alternative dispute resolution methods, or aggressive litigation, depending on the circumstances.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Family Disputes",
      description:
        "Family disputes can be emotionally challenging and legally complex. Whether you're facing issues related to divorce, child custody, property division, or spousal support, our family law team provides compassionate yet strategic legal representation. We prioritize amicable resolutions whenever possible but are prepared to advocate vigorously for your rights in court if necessary.",
      image:
        "https://images.unsplash.com/photo-1714976694543-e32de3f43d73?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "POSH Disputes",
      description:
        "Workplace conflicts related to Prevention of Sexual Harassment (POSH) can have serious consequences for employers and employees alike. Our POSH dispute resolution team offers confidential, sensitive, and effective solutions to address allegations of sexual harassment or misconduct in the workplace. We guide clients through the complaint process, conduct thorough investigations, and provide strategic advice to ensure compliance with POSH regulations.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expertise",
      description:
        "Our team consists of highly skilled and experienced litigators who specialize in various areas of dispute resolution. We stay current with legal developments and best practices to provide you with the most effective representation.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and goals, tailoring our strategies to achieve the best possible outcomes. Our commitment to personalized service ensures that you receive the attention and care your case deserves.",
    },
    {
      title: "Strategic Advocacy",
      description:
        "We develop comprehensive litigation strategies based on thorough case analysis and deep understanding of legal precedents. Our strategic approach maximizes your chances of success while minimizing risks and costs.",
    },
    {
      title: "Efficiency",
      description:
        "We understand that time is crucial in dispute resolution. Our efficient processes and proactive case management help resolve disputes quickly while maintaining the highest standards of legal representation.",
    },
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our professional dealings. Our commitment to integrity and transparency builds trust with clients, opposing parties, and the judicial system.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
            backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
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
              Dispute <span style={{ color: "#A5292A" }}>Resolution</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              1. Our Areas of Expertise Include:
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Fathom Legal, we specialize in resolving a wide range of
              disputes with professionalism, efficiency, and integrity. Our team
              of experienced litigators and dispute resolution experts is
              dedicated to helping clients navigate complex legal challenges and
              achieve favorable outcomes. Whether you're facing transactional
              disputes, debt recovery issues, commercial disputes, family
              disputes, or workplace conflicts, we have the expertise and
              resources to protect your interests and resolve disputes
              effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Expertise Areas */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index !== expertiseAreas.length - 1 ? "mb-20" : ""
              }`}
            >
              {/* Text Content */}
              <div className="order-1">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {area.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Image */}
              <div className="order-2">
                <div className="relative">
                  <img
                    src={area.image}
                    alt={`${area.title} representation`}
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

      {/* Section 3: Why Choose Fathom Legal? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Fathom Legal for Dispute Resolution?
              </h2>
              <p className="text-lg text-gray-600">
                Our commitment to excellence ensures that you receive the best
                legal support possible.
              </p>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left bg-white p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-gray-800 text-lg">
                      {item.title}
                    </span>
                    {openAccordion === index ? (
                      <Minus
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: "#A5292A" }}
                      />
                    ) : (
                      <Plus
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: "#A5292A" }}
                      />
                    )}
                  </button>
                  {openAccordion === index && (
                    <div className="bg-gray-50 px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Notice Box (Call to Action) */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center p-12 rounded-2xl shadow-sm"
            style={{ backgroundColor: "#A5292A" }}
          >
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              If you're facing a dispute and need expert legal representation,
              contact Fathom Legal today. Let us help you navigate your legal
              challenges and achieve a favorable resolution.
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
      <Footer />
    </div>
  );
};

export default DisputeResolution;
