import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Users,
  Award,
  Shield
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Office Address",
      details: ["New Delhi, India", "110001"],
      description: "Visit our office for in-person consultations"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Phone",
      details: ["+91-XX-XXXX-XXXX"],
      description: "Call us for immediate legal assistance"
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      title: "Email",
      details: ["info@fathomlegal.com", "support@fathomlegal.com"],
      description: "Send us your legal queries via email"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're available during business hours"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar page="contact" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in <span style={{ color: "#A5292A" }}>Touch</span>
            </h1>
            <p className="text-lg text-gray-600  max-w-3xl mx-auto ">
              Ready to discuss your legal needs? Contact our experienced team 
              for professional legal consultation and expert guidance.
            </p>
            
           
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-3 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headlines Section */}
            <div className="grid lg:grid-cols-2 gap-50 mb-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-base text-gray-600">
                  Get in touch with our legal experts. We're here to help you 
                  navigate complex legal challenges and provide expert guidance.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Send us a Message
                </h2>
                <p className="text-base text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Information and Form Section */}
            <div className="grid lg:grid-cols-2 gap-50">
              {/* Contact Information Section */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300 hover:border-[#A5292A] hover:shadow-xl transition-all duration-300">
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          <div>
                            {info.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1 text-sm">
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs text-gray-500 mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-gradient-to-br from-[#A5292A] to-[#8B1E1E] p-6 rounded-2xl text-white shadow-lg text-center mt-20">
                  <h3 className="text-xl font-semibold mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-white text-opacity-90 mb-4 text-sm">
                    For urgent legal matters, call us directly or schedule a 
                    same-day consultation.
                  </p>
                  <button className="bg-white text-[#A5292A] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center text-sm mx-auto">
                    Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="bg-gray-100 p-6 rounded-2xl">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all bg-white"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all bg-white"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all bg-white"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all bg-white"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all bg-white"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Legal Consultation</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="startup">Startup Legal Services</option>
                      <option value="dispute">Dispute Resolution</option>
                      <option value="web3">Web3 Legal Services</option>
                      <option value="templates">Legal Templates</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5292A] focus:ring-opacity-20 focus:border-[#A5292A] outline-none transition-all resize-none bg-white"
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#A5292A" }}
                  >
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Contact;
