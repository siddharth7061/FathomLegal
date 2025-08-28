import React from "react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ArrowRight,
  Home,
  FileText,
  Shield,
  Scale,
  MapPin,
  Calculator,
  Users,
  CheckCircle,
  Eye,
  FileCheck,
  DollarSign,
  UserCheck,
} from "lucide-react";

const RealEstateSolutions = () => {
  const propertyServices = [
    {
      title: "Documentation and Verification",
      description:
        "Ensuring the authenticity of property documents and verifying clear title ownership is essential. We provide thorough due diligence and verification services, including title searches, deed verification, and ownership history tracing.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Survey and Boundary Verification",
      description:
        "Our team conducts property surveys and addresses boundary disputes with neighboring properties, ensuring clarity and legal compliance.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Insurance Documentation",
      description:
        "Reviewing property insurance policies and managing insurance claims related to property damage or loss, safeguarding your assets.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Legal Documentation",
      description:
        "From maintaining litigation records to issuing legal notices, we handle all legal documentation related to property management with precision and diligence.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: "Taxation",
      description:
        "Navigating tax regulations in your home country and the country where your property is located can be complex. We provide expert advice on property taxation, including property tax documentation and financial audits.",
      icon: <Calculator className="w-6 h-6" />,
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
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`,
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto">
              Comprehensive property management and legal services for seamless
              real estate transactions
            </p>
          </div>
        </div>
      </section>

      {/* Property Disputes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Property Disputes
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Property ownership can be fraught with challenges, particularly
                for owners facing disputes over ownership, boundaries,
                encroachments, or unauthorized constructions. At Fathom Legal,
                we understand the complexities involved in resolving these
                disputes, especially from abroad. Our expertise in property law
                and dispute resolution ensures efficient and effective solutions
                to protect your investments and interests.
              </p>
              <div className="flex items-start">
                <div
                  className="text-white p-3 rounded-lg mr-4 flex-shrink-0"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Expert resolution of complex property disputes with
                    comprehensive legal support and strategic guidance.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Property disputes resolution"
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

      {/* Property Management Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Property Management
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Managing properties remotely poses significant challenges for
                NRIs. They may struggle to find trustworthy property management
                services that can effectively handle tasks such as tenant
                screening, rent collection, property maintenance, and handling
                emergencies. Lack of regular oversight and communication can
                lead to issues such as delayed repairs, disputes with tenants,
                and financial mismanagement.
              </p>
              <div className="flex items-start">
                <div
                  className="text-white p-3 rounded-lg mr-4 flex-shrink-0"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Comprehensive property management services designed
                    specifically for remote property owners and NRIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                  alt="Property management services"
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

      {/* Property Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Comprehensive Property Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized services cover every aspect of property management
              and legal compliance to protect your real estate investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start mb-6">
                  <div
                    className="text-white p-3 rounded-lg mr-4 flex-shrink-0 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "#A5292A" }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inheritance and Succession Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div
                  className="text-white p-4 rounded-lg"
                  style={{ backgroundColor: "#A5292A" }}
                >
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Inheritance and Succession
              </h2>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Fathom Legal, we specialize in guiding NRIs through the
                complexities of inheritance and succession. Our comprehensive
                services cover all aspects of estate planning, including
                drafting wills, setting up trusts, and providing legal
                consultation on succession strategies and asset protection.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We handle probate and estate administration, assist with trust
                management, and ensure compliance with tax regulations. Our
                expertise extends to dispute resolution, property transfer,
                guardianships, conservatorships, as well as charitable giving
                and legacy planning.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With a focus on international estate planning and digital asset
                management, we provide tailored solutions to facilitate a
                seamless transfer of wealth while navigating cross-border
                complexities and ensuring the protection of your digital assets.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Estate Planning & Wills</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Trust Management</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Probate Administration</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tax Compliance</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Cross-border Expertise</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Digital Asset Protection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Value Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Fathom Legal for Real Estate?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized expertise in real estate law, combined with deep
                understanding of NRI requirements and cross-border complexities,
                makes us your trusted partner for all property-related legal
                matters.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="w-3 h-3 rounded-full mr-4 mt-2"
                    style={{ backgroundColor: "#A5292A" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Remote Property Management
                    </h4>
                    <p className="text-gray-600">
                      Specialized services designed for NRIs and overseas
                      property owners.
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
                      Comprehensive Legal Support
                    </h4>
                    <p className="text-gray-600">
                      End-to-end legal services from dispute resolution to
                      documentation.
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
                      Cross-border Expertise
                    </h4>
                    <p className="text-gray-600">
                      Navigate international regulations and tax implications
                      with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Professional real estate consultation"
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

      {/* Call-to-Action Notice Box */}
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
                Protect Your Real Estate Investments
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Trust Fathom Legal to safeguard your real estate interests and
                enhance their value. Contact us today to learn more about our
                comprehensive real estate services.
              </p>
              <button
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center"
                style={{ backgroundColor: "#A5292A" }}
                onClick={() => (window.location.href = "#contact")}
              >
                Book your slot today
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

export default RealEstateSolutions;
