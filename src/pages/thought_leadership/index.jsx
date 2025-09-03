import React from "react";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  BookOpen,
  Users,
  Scale,
  Clock,
  Calendar,
  Eye,
} from "lucide-react";

const ThoughtLeadership = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Incorporate Your Dream Company in 7 Easy Steps!",
      description:
        "Starting your own company is a dream many entrepreneurs aspire to achieve. The process of company incorporation, while complex, can be broken down into manageable steps. Whether you're looking to register a private limited company or any other business structure, understanding the requirements and benefits is crucial. This article provides a comprehensive guide to company [...]",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Corporate Law",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
    },
    {
      id: 2,
      title: "Never Lose a Deal: Master Contract Management Like a Pro",
      description:
        "Contract management plays a critical role in facilitating successful business transactions in India, requiring meticulous oversight and administration of contractual agreements throughout their lifecycle. To excel in this discipline, professionals must navigate each stage—from contract formation to enforcement—while adhering to Indian legal frameworks and industry-specific requirements. Essentials of Contract Management Effective contract management begins with [...]",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Contract Law",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
    },
    {
      id: 3,
      title: "Resolve Conflicts Fast: Ultimate Dispute Resolution Guide",
      description:
        "Conflict resolution is essential for maintaining relationships and ensuring smooth operations in both personal and professional realms. In business, effective dispute resolution prevents costly litigation and fosters productive partnerships. This comprehensive guide explores various methods of dispute resolution, highlighting their benefits, processes, and applications, with a specific focus on the Indian legal context. Types of [...]",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Dispute Resolution",
      readTime: "10 min read",
      publishDate: "Dec 5, 2024",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Articles Published",
      description: "Expert insights and guides",
    },
    {
      number: "10K+",
      label: "Readers Monthly",
      description: "Legal professionals and businesses",
    },
    {
      number: "25+",
      label: "Topics Covered",
      description: "Across various legal domains",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar page="thoughtleadership" />

      {/* Hero Section */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
              WELCOME TO FATHOM LEGAL
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              Thought
              <span style={{ color: "#A5292A" }}> Leadership</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Insights That Drive Business Success
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Stay informed with our comprehensive collection of articles,
              guides, and expert commentary on the latest legal developments,
              business strategies, and regulatory changes affecting your
              industry.
            </p>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#A5292A" }}
                  >
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Latest Articles & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover actionable insights and expert guidance to help you
              navigate complex legal challenges and business decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#A5292A" }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-8">
                  {/* Meta Information */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-[#A5292A] transition-colors">
                    {post.title}
                  </h3>

                  {/* Post Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    className="text-[#A5292A] font-semibold hover:opacity-80 flex items-center group-hover:translate-x-1 transition-transform"
                    onClick={() =>
                      console.log(`Navigate to blog post ${post.id}`)
                    }
                  >
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Explore Legal Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of articles organized by
              practice areas and business topics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Corporate Law",
                count: "12 Articles",
                icon: <Scale className="w-6 h-6" />,
              },
              {
                name: "Startup Guidance",
                count: "8 Articles",
                icon: <Users className="w-6 h-6" />,
              },
              {
                name: "Contract Management",
                count: "10 Articles",
                icon: <BookOpen className="w-6 h-6" />,
              },
              {
                name: "Dispute Resolution",
                count: "6 Articles",
                icon: <Eye className="w-6 h-6" />,
              },
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div
                    className="text-white p-3 rounded-lg mr-4 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "#A5292A" }}
                  >
                    {topic.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#A5292A] transition-colors">
                  {topic.name}
                </h3>
                <p className="text-gray-500 text-sm">{topic.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup Section */}
      {/* <section className="py-20" style={{ backgroundColor: "#A5292A" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest legal insights,
              business guidance, and regulatory updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button
                className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                style={{ color: "#A5292A" }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-white text-opacity-70 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
