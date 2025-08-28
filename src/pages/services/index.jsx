import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
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
  Building,
  UserCheck,
  Gavel,
  Home,
  Lightbulb,
  FileSignature,
  Plus,
  Minus,
} from "lucide-react";

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const services = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "General Corporate Advisory",
      description:
        "Comprehensive corporate governance, compliance, and strategic legal advisory services for businesses of all sizes.",
      slug: "corporate-advisory",
      url: "/services/generalcorporateadvisory",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Ankush: Safe & Inclusive Workplace",
      description:
        "Specialized workplace safety solutions, harassment prevention, and inclusive culture development programs.",
      slug: "workplace-safety",
      url: "/services/ankush",
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Dispute Resolution",
      description:
        "Expert mediation, arbitration, and litigation services to resolve commercial and civil disputes effectively.",
      slug: "dispute-resolution",
      url: "/services/disputeresolution",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "REIT Solutions",
      description:
        "Complete Real Estate Investment Trust structuring, compliance, and management services for investors.",
      slug: "reit-solutions",
      url: "/services/reitsolutions",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Services",
      description:
        "End-to-end real estate legal services including due diligence, transactions, and property law matters.",
      slug: "real-estate",
      url: "/services/realestatesolutions",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Intellectual Property Management",
      description:
        "Complete IP portfolio management including trademark, copyright, patent filing and protection services.",
      slug: "ip-management",
      url: "/services/intellectualproperty",
    },
    {
      icon: <FileSignature className="w-8 h-8" />,
      title: "Agreements and Policies",
      description:
        "Expert drafting and review of contracts, agreements, and corporate policies tailored to your business needs.",
      slug: "agreements-policies",
      url: "/services/agreementandpolicies",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      text: "Fathom Legal's corporate advisory services have been instrumental in our company's growth. Their expertise in compliance and governance is exceptional.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      company: "Real Estate Developer",
      text: "The REIT solutions provided by Fathom Legal helped us structure our investment trust perfectly. Highly professional and knowledgeable team.",
      rating: 5,
    },
    {
      name: "Arjun Sharma",
      company: "Startup Founder",
      text: "From IP management to workplace policies, Fathom Legal has been our trusted legal partner. Their comprehensive approach is remarkable.",
      rating: 5,
    },
  ];

  const counters = [
    {
      number: "150+",
      label: "Cases in Progress",
      description: "Active legal matters being handled",
    },
    {
      number: "500+",
      label: "Satisfied Clients",
      description: "Businesses and individuals served",
    },
    {
      number: "₹50Cr+",
      label: "Claims Settled",
      description: "Total value of successful resolutions",
    },
  ];

  const faqs = [
    {
      question: "What types of legal services does Fathom Legal offer?",
      answer:
        "Fathom Legal provides comprehensive legal services including corporate advisory, dispute resolution, real estate services, REIT solutions, intellectual property management, workplace safety solutions, and contract drafting. We serve businesses ranging from startups to established corporations, as well as individual clients.",
    },
    {
      question: "What makes Fathom Legal different from other law firms?",
      answer:
        "Our unique approach combines deep industry expertise with personalized service. We focus on the startup ecosystem and SMB sector, offering tailored solutions rather than one-size-fits-all approaches. Our team brings over 70 years of collective experience and maintains a client-centric philosophy.",
    },
    {
      question: "Are your services confidential?",
      answer:
        "Absolutely. We maintain strict confidentiality protocols and adhere to all professional ethics guidelines set by the Bar Council of India. All client information and legal matters are protected under attorney-client privilege and our comprehensive data security measures.",
    },
    {
      question: "What is included in your REIT solutions?",
      answer:
        "Our REIT solutions include complete structuring services, regulatory compliance, documentation, investor relations support, portfolio management advice, and ongoing legal maintenance. We handle everything from initial setup to operational compliance and strategic advisory.",
    },
    {
      question: "How does Fathom Legal support the startup ecosystem?",
      answer:
        "We specialize in startup legal needs including incorporation, funding documentation, compliance frameworks, intellectual property protection, employment law guidance, and growth strategy legal support. Our team understands the unique challenges startups face and provides cost-effective solutions.",
    },
    {
      question:
        "How does Fathom Legal ensure confidentiality and data security?",
      answer:
        "We implement multi-layered security protocols including encrypted communications, secure document management systems, restricted access controls, and regular security audits. All team members undergo confidentiality training and sign comprehensive non-disclosure agreements.",
    },
    {
      question: "Does Fathom Legal offer flexible pricing options?",
      answer:
        "Yes, we understand that different clients have different needs and budgets. We offer various pricing structures including fixed fees, hourly rates, retainer agreements, and project-based pricing. We work with clients to find the most suitable arrangement for their specific requirements.",
    },
    {
      question: "How can I schedule a consultation with Fathom Legal?",
      answer:
        "You can schedule a consultation by calling our office, sending an email to info@fathomlegal.com, or using the contact form on our website. We offer both in-person and virtual consultations to accommodate your preferences and schedule.",
    },
    {
      question:
        "What is the process for onboarding new clients at Fathom Legal?",
      answer:
        "Our onboarding process begins with an initial consultation to understand your needs, followed by a comprehensive case evaluation, engagement letter execution, and assignment of a dedicated legal team. We ensure clear communication of timelines, expectations, and deliverables from the start.",
    },
    {
      question:
        "Does Fathom Legal offer legal workshops or training for businesses?",
      answer:
        "Yes, we conduct regular workshops and training sessions on various legal topics including compliance requirements, employment law updates, contract management, and industry-specific regulations. These can be customized for individual organizations or offered as public seminars.",
    },
    {
      question: "Can Fathom Legal assist with contract drafting and review?",
      answer:
        "Absolutely. Contract drafting and review is one of our core services. We handle all types of agreements including commercial contracts, employment agreements, partnership deeds, licensing agreements, and more. Our team ensures all contracts are legally sound and protect your interests.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar page="services" />

      {/* Hero Section with Services Catalogue */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
              END-TO-END
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              Legal Solutions,{" "}
              <span style={{ color: "#A5292A" }}>Tailored for You</span>
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <NavLink to={service.url}>
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
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Stress-Free Legal Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: "#A5292A" }}
              >
                Stress-Free Legal Solutions
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                from start to finish
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Fathom Legal, we handle all your legal needs with precision
                and care. Our team of experts provides end-to-end solutions,
                ensuring your business thrives in a complex legal landscape.
                Trust us to manage everything, so you can focus on your growth
                and success.
              </p>

              {/* Divider */}
              <div
                className="w-16 h-0.5 mb-8"
                style={{ backgroundColor: "#A5292A" }}
              ></div>

              {/* Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    70+ Years of Collective Experience
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    Personalized Legal Strategies
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    Full Confidentiality and Safety
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    24/7 Expert Assistance
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
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

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p
              className="text-lg font-semibold mb-2"
              style={{ color: "#A5292A" }}
            >
              Our happy clients
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We've assisted countless clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence ensures that you receive the best
              legal support possible.
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

      {/* Animated Counters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {counters.map((counter, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#A5292A" }}
                >
                  {counter.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {counter.label}
                </h3>
                <p className="text-gray-600">{counter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Fathom Legal, we believe in clear and open communication. Our
              FAQ section is designed to address your most pressing questions,
              providing you with the information you need to make informed
              decisions about our legal services. Whether you're curious about
              our offerings, our approach, or the specifics of how we can help
              you, we're here to answer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left bg-white p-6 rounded-lg border border-gray-100 flex items-center justify-between hover:shadow-sm transition-shadow"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
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
                {openFAQ === index && (
                  <div className="bg-white border-l border-r border-b border-gray-100 p-6 rounded-b-lg">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center p-12 rounded-2xl"
            style={{ backgroundColor: "#A5292A" }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect? Get a Quote Now!
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              Let Fathom Legal handle your legal needs with expertise and
              dedication. Reach out to us today for a personalized quote and
              discover how our comprehensive legal solutions can benefit you.
              Your peace of mind is just a click away.
            </p>
            <button
              className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              style={{ color: "#A5292A" }}
            >
              Get quote <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
