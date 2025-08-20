import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import {
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

const FathomLegal = () => {
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
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Where Law and Business{" "}
              <span className="text-blue-300">MEETS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert Legal Services for Businesses and Individuals
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              Fathom Legal Advocates & Corporate Consultants is a full-service
              law firm headquartered in Bengaluru, India. We deliver
              high-quality legal services to clients across the country and the
              world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-blue-300 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                    className="flex items-center p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Fathom Legal?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Dedicated team of experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Specialized expertise in startup ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Client-focused approach with ethical governance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Nationwide and international service delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about our legal services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
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
                  <div className="font-semibold text-gray-900">
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
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-blue-100 mb-8">
                Ready to discuss your legal needs? Contact our experienced team
                for professional legal consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-300 mr-4" />
                  <div>
                    <div className="font-semibold">Office Address</div>
                    <div className="text-blue-100">Bengaluru, India</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-300 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+91-XX-XXXX-XXXX</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-300 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">assist@fathomlegal.com​</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your legal needs"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  onClick={() =>
                    alert("Message sent! We will contact you soon.")
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FathomLegal;
