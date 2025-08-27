import React from "react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowRight,
  Shield,
  Users,
  FileText,
  Scale,
  Heart,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  UserCheck,
  Gavel,
  Building,
} from "lucide-react";

const SafeInclusiveWorkplaces = () => {
  const services = [
    {
      title: "POSH Trainings",
      description:
        "We offer comprehensive training sessions on the Prevention of Sexual Harassment (POSH) to educate your employees, IC members, Managers etc on recognizing, preventing, and addressing harassment in the workplace. Our training programs are designed to foster a safe and respectful work environment.",
      image:
        "https://images.unsplash.com/photo-1664382953481-141e97ad9825?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "End-to-End Compliance",
      description:
        "Our team ensures full compliance with relevant laws and regulations through policy development, training, and continuous monitoring. We help you maintain a workplace that adheres to all statutory requirements, reducing legal risks and promoting fairness.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Representation on Internal Committee (IC)",
      description:
        "Ankush provides experienced professionals to serve on your organization's Internal Committee, ensuring impartiality and expertise in handling complaints. Our representatives bring a wealth of knowledge and experience to support fair and thorough investigations.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Statutory Compliance Services",
      description:
        "Ensure your workplace is safe and compliant with the POSH Act with our comprehensive services including Policy Drafting and Implementation, Internal Committee Formation and Training, Employee Training and Awareness Programs, Complaint Handling and Redressal, Annual Reports and Compliance Documentation, Advisory Services, Audits and Assessments, Record Keeping, External Support and Liaison, and Cultural Integration.",
      image:
        "https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  const statutoryCompliances = [
    {
      title:
        "Transgender Persons (Protection of Rights) Act, 2019 and Rules, 2020",
      services: [
        "Equal Opportunity Policy for Transgender Persons",
        "Compliance with Obligations (gender-neutral washrooms, inclusive policies)",
        "Complaints Officer (appointed & trained)",
        "Non-Discrimination in Employment",
        "Redressal Mechanism for impartial enquiries",
      ],
      image:
        "https://images.unsplash.com/photo-1688383121731-48726e12ff9f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Maternity Benefit Act, 1961 and Amendment Act, 2017",
      services: [
        "Maternity Benefits and Leave Policy",
        "Annual Returns preparation & submission",
        "Employee Awareness Campaigns",
        "Employee Resource Groups and Mental Health Support",
      ],
      image:
        "https://images.unsplash.com/photo-1575313844062-39c66a566b6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "HIV and AIDS (Prevention and Control) Act, 2017 and Rules, 2018",
      services: [
        "HIV and AIDS Policy drafting/implementation",
        "Complaints Officer appointment & training",
        "Annual Orientation & Training programs",
        "Reporting to NACO",
      ],
      image:
        "https://images.unsplash.com/photo-1676313127709-ffa38b94c545?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Rights of Persons with Disabilities Act, 2016 and Rules, 2017",
      services: [
        "Equal Opportunity & Inclusive Policy (displayed on site & premises)",
        "Records maintenance for PwDs",
        "Complaints Committee formation",
        "Liaison Officer & inclusive recruitment processes",
        "Infrastructure accessibility + assistive devices",
      ],
      image:
        "https://images.unsplash.com/photo-1753156466932-c5197795d527?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Protection of Children from Sexual Offences (POCSO) Act, 2012",
      services: [
        "Child Protection Policy",
        "Candidate background checks & police verification",
        "Complaints Committee formation",
        "Contact Details & Reporting mechanism",
      ],
      image:
        "https://images.unsplash.com/photo-1483193722442-5422d99849bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
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
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div
          className="container mx-auto px-4 relative z-10 flex items-center justify-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SAFE & INCLUSIVE WORKPLACES
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ankush: Solutions for Discrimination and Harassment Free
                Workplace
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Ankush, we are committed to ending sexual harassment,
                discrimination, and all forms of workplace inequity. Our
                extensive services ensure your organization complies with legal
                requirements, fostering a safe and inclusive environment for all
                employees. We provide POSH training, end-to-end compliance,
                representation on Internal Committees (IC), and specialized
                compliance services under various statutes. Explore our detailed
                service offerings below.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1597701828474-ed6cb88c7a91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Safe and inclusive workplace"
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

      {/* POSH Act Compliance Services */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Compliance with Sexual Harassment of Women at Workplace
              (Prevention, Prohibition and Redressal) Act, 2013
            </h2>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start mb-6">
                    <div
                      className="text-white p-3 rounded-lg mr-4 flex-shrink-0"
                      style={{ backgroundColor: "#A5292A" }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
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
        </div>
      </section>

      {/* Other Statutory Compliances */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Other Statutory Compliance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance solutions across multiple acts and
              regulations to ensure your workplace meets all legal requirements.
            </p>
          </div>

          <div className="space-y-16">
            {statutoryCompliances.map((compliance, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-start mb-6">
                    <div
                      className="text-white p-3 rounded-lg mr-4 flex-shrink-0"
                      style={{ backgroundColor: "#A5292A" }}
                    >
                      {compliance.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {compliance.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {compliance.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start">
                        <div
                          className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#A5292A" }}
                        ></div>
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative">
                    <img
                      src={compliance.image}
                      alt={compliance.title}
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
        </div>
      </section>

      {/* Custom Support Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Any other Activity to support a Discrimination and
                Harassment-Free Workplace
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Ankush, we are committed to promoting a discrimination-free
                workplace and are prepared to offer any additional services
                tailored to your organization's unique needs. Whether it's
                developing custom policies, conducting specialized training
                sessions, or collaborating on initiatives to foster inclusivity,
                our team is dedicated to supporting your efforts on all fronts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    Custom policy drafting
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    Specialized training sessions
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    Collaborative inclusivity initiatives
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Custom support services"
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

      {/* Call-to-Action Box */}
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Create a Safe and Inclusive Workplace?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Book your free consultation today and let Ankush help you create
                a safe, respectful, and inclusive environment for all employees.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
              >
                Book your free consultation
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

export default SafeInclusiveWorkplaces;
