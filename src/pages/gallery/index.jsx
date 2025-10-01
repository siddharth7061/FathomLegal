import React from "react";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar page="gallery" />
      

      
      {/* Hero Section */}

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
              <span style={{ color: "#A5292A" }}>Newsfeed</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Excellence in Legal Practice Since Our Inception
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our featured articles, webinars, interviews, and success stories showcasing our legal expertise.
            </p>
          </div>
        </div>
      </section>
      

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-left text-gray-600 max-w-2xl mx-auto">
              Discover our latest webinars, interviews, and featured articles that highlight 
              our expertise in immigration law, startup support, and corporate legal services.
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lawctopus Webinar */}
            <a
              href="https://www.lawctopus.com/webinar-fathom-legal/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Image/Visual Section */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/lawctopus.jpg" 
                  alt="Lawctopus Webinar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded px-2 py-1">
                  <span className="text-gray-800 text-xs font-medium">WEBINAR</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                  Behind the Scenes: Building International Legal Careers with Immigration Law Expertise
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="font-medium">Fathom Legal Team</span>
                  <span className="mx-2">•</span>
                  <span>15 minute read</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Featured on Lawctopus: "How to Build an International Career as an Immigration Lawyer in the USA"
                </p>
              </div>
            </a>

            {/* SuperLawyer Interview */}
            <a
              href="https://superlawyer.in/witness-ishitas-unique-approach-to-supporting-startups-smes-and-smbs-where-legal-challenges-are-met-with-a-combination-of-intersectional-learning-and-on-site-visits-to-comprehend-the-intricacies"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Image/Visual Section */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/Superlawyer.jpg" 
                  alt="SuperLawyer Interview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded px-2 py-1">
                  <span className="text-gray-800 text-xs font-medium">INTERVIEW</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                  Enhancing Startup Success Through Unique Legal Support and On-Site Visits
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="font-medium">Ishita Sharma</span>
                  <span className="mx-2">•</span>
                  <span>8 minute read</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SuperLawyer interview featuring our unique approach to supporting startups, SMEs, and SMBs
                </p>
              </div>
            </a>

            {/* Business Connect India */}
            <a
              href="https://businessconnectindia.in/fathom-legal-advocates-corporate/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
               {/* Image/Visual Section */}
               <div className="h-48 relative overflow-hidden">
                 <img 
                   src="/businessconnect.jpg" 
                   alt="Business Connect India Feature" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded px-2 py-1">
                   <span className="text-gray-800 text-xs font-medium">FEATURE</span>
                 </div>
               </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                  Corporate Legal Excellence: Comprehensive Services for Modern Businesses
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="font-medium">Fathom Legal</span>
                  <span className="mx-2">•</span>
                  <span>6 minute read</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Featured on Business Connect India showcasing our corporate legal expertise and services
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
