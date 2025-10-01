import React from "react";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FileText, Download, Eye } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "EMPLOYMENT AGREEMENT TEMPLATE",
      description: "Standard employment agreement template for hiring employees",
      category: "Employment Law",
      downloads: 245,
      lastUpdated: "2024-01-15",
      price: "₹3,000.00"
    },
    {
      id: 2,
      title: "NON-DISCLOSURE AGREEMENT (NDA)",
      description: "Comprehensive NDA template for protecting confidential information",
      category: "Corporate Law",
      downloads: 189,
      lastUpdated: "2024-01-10",
      price: "₹3,000.00"
    },
    {
      id: 3,
      title: "SERVICE AGREEMENT TEMPLATE",
      description: "Professional service agreement for client engagements",
      category: "Contract Law",
      downloads: 156,
      lastUpdated: "2024-01-08",
      price: "₹3,000.00"
    },
    {
      id: 4,
      title: "PRIVACY POLICY TEMPLATE",
      description: "GDPR compliant privacy policy for websites and apps",
      category: "Data Protection",
      downloads: 298,
      lastUpdated: "2024-01-12",
      price: "₹3,000.00"
    },
    {
      id: 5,
      title: "TERMS OF SERVICE TEMPLATE",
      description: "Comprehensive terms of service for digital platforms",
      category: "Digital Law",
      downloads: 167,
      lastUpdated: "2024-01-05",
      price: "₹3,000.00"
    },
    {
      id: 6,
      title: "PARTNERSHIP AGREEMENT TEMPLATE",
      description: "Business partnership agreement template",
      category: "Business Law",
      downloads: 134,
      lastUpdated: "2024-01-03",
      price: "₹3,000.00"
    }
  ];

  const categories = ["All", "Employment Law", "Corporate Law", "Contract Law", "Data Protection", "Digital Law", "Business Law"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar page="templates" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span style={{ color: "#A5292A" }}>Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional legal document templates crafted by our expert legal team. 
              
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-[#A5292A] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-26 mx-20 ">
        <div className="container mx-auto px-4 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  {/* Top Section - Empty space where illustration would be */}
                  <div className="h-32 mb-6 flex items-center justify-center">
                    {/* Placeholder for illustration - keeping space but no visual */}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-6 text-center leading-tight uppercase">
                    {template.title}
                  </h3>
                  
                  {/* Price Section */}
                  <div className="text-center mb-6">
                    <div className="text-2xl text-left font-bold text-black mb-1">
                      {template.price}
                    </div>
                    <div className="text-sm text-left text-black font-medium">
                      + Taxes
                    </div>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="w-40 text-white py-3 px-4 font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:cursor-pointer"
                    style={{ backgroundColor: "#A5292A" }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default Templates;
