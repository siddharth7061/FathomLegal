import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { 
  Shield, 
  FileText, 
  Users, 
  Globe, 
  Lock, 
  Scale,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Database,
  Smartphone,
  Coins,
  Network,
  Palette,
  TrendingUp,
  Building,
  Eye,
  AlertTriangle,
  BookOpen,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";

const Web3Law = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };
  const practiceAreas = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Crypto & Digital Assets",
      description: "Compliance with local and international crypto regulations, licensing, securities law compliance, and regulatory filings.",
      services: ["Securities law compliance", "KYC/AML setup", "Exchange licensing", "Custody solutions"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "DAOs & Governance",
      description: "Structuring DAOs, liability issues, governance models, and legal frameworks for decentralized organizations.",
      services: ["DAO legal structure", "Governance frameworks", "Liability protection", "Voting mechanisms"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Contracts",
      description: "Enforceability, drafting, auditing for compliance, and legal review of automated contract systems.",
      services: ["Smart contract audits", "Legal enforceability", "Compliance review", "Risk assessment"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "NFTs & Digital Art",
      description: "Intellectual property rights, licensing, royalties, ownership disputes, and digital asset protection.",
      services: ["IP rights protection", "Licensing agreements", "Royalty structures", "Ownership disputes"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "DeFi (Decentralized Finance)",
      description: "Lending, staking, yield farming, regulatory compliance, and legal frameworks for DeFi protocols.",
      services: ["DeFi protocol structure", "Yield farming compliance", "Lending regulations", "Staking legal issues"]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Tokenization & ICOs/IDOs",
      description: "Securities law compliance, whitepaper review, structuring, and regulatory guidance for token launches.",
      services: ["Token launch compliance", "Whitepaper review", "Securities regulations", "IDO structuring"]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Privacy & Cybersecurity",
      description: "GDPR, data handling in blockchain, privacy compliance, and cybersecurity legal frameworks.",
      services: ["GDPR compliance", "Data protection", "Privacy frameworks", "Cybersecurity laws"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Taxation & Cross-Border Issues",
      description: "Crypto taxation, cross-border digital assets, international compliance, and tax optimization strategies.",
      services: ["Crypto taxation", "Cross-border compliance", "Tax optimization", "International regulations"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Deep Technical Understanding",
      description: "Our team combines legal expertise with hands-on experience in blockchain technology, smart contracts, and DeFi protocols."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Jurisdictional Expertise",
      description: "We navigate complex international regulations across major crypto-friendly jurisdictions including US, EU, Singapore, and Switzerland."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proactive Compliance",
      description: "Stay ahead of evolving regulations with our proactive approach to compliance and risk management in the fast-moving Web3 space."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Successfully advised numerous Web3 projects, from early-stage startups to established protocols and major exchanges."
    }
  ];

  const resources = [
    {
      title: "Are NFTs Considered Securities?",
      description: "Understanding the regulatory classification of NFTs and compliance requirements.",
      readTime: "5 min read"
    },
    {
      title: "Legal Risks of DAOs",
      description: "Key legal considerations for decentralized autonomous organizations.",
      readTime: "7 min read"
    },
    {
      title: "DeFi Protocol Compliance Guide",
      description: "Essential compliance requirements for decentralized finance protocols.",
      readTime: "10 min read"
    },
    {
      title: "Smart Contract Legal Framework",
      description: "Legal enforceability and compliance considerations for smart contracts.",
      readTime: "6 min read"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "DeFi Protocol Founder",
      text: "Fathom Legal's expertise in Web3 law helped us navigate complex regulatory requirements for our DeFi protocol. Their smart contract audit saved us from potential legal issues.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "NFT Marketplace CEO",
      text: "The team's understanding of NFT legal frameworks and intellectual property rights was exceptional. They helped us build a compliant marketplace from the ground up.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      company: "DAO Governance Lead",
      text: "Their DAO governance legal framework was comprehensive and practical. We now have clear legal structure and liability protection for our decentralized organization.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar page="web3law" />
      
      {/* 1. Hero Section */}
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
              Web3 <span style={{ color: "#A5292A" }}>Legal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              Building Confidence & Mitigating Risk in Web3 Legal Practice
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Navigating the complex and rapidly changing regulatory environment to unlock opportunities in Web3 legal matters.
            </p>
            <button 
              onClick={handleContactClick}
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center mx-auto hover:cursor-pointer" 
              style={{ backgroundColor: "#A5292A" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>




      
      {/* 2. The Advent of Web3 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">The Rise of Web3 Technology</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Over the past four decades, the internet has evolved into a centralized system dominated by major tech corporations and government entities controlling vast amounts of user data and digital infrastructure. Web3 emerges as a revolutionary response, seeking to transform digital interactions, business transactions, and online governance through decentralized, user-controlled systems.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Web3 encompasses a broad spectrum of technologies including blockchain networks, digital currencies, decentralized financial protocols (DeFi), autonomous organizations (DAOs), virtual worlds, and unique digital assets (NFTs). This ecosystem represents a fundamental shift toward user sovereignty and peer-to-peer interactions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At its core, blockchain technology provides the foundation for Web3 - a secure, distributed, immutable ledger system that enables trustless transactions. This technology is rapidly being adopted across diverse sectors such as finance, supply chain management, energy distribution, healthcare, insurance, media, and numerous other industries.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The common theme across all Web3 innovations is empowering users with greater control, privacy, and freedom from traditional gatekeepers. However, as this technology matures, industry leaders recognize that appropriate legal frameworks and regulatory guidance are essential to ensure user protection and mainstream adoption.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At Fathom Legal, our Web3 practice has been at the forefront of this technological revolution, working with pioneering companies, innovative DAOs, visionary founders, investment funds, creative professionals, and fellow legal practitioners across India and globally.
                </p>
              </div>
              <div className="flex justify-center h-full">
                <img 
                  src="/blockchain.jpg" 
                  alt="Web3 Technology Illustration" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cryptocurrency and DeFi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Digital Assets and Decentralized Finance</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                The digital asset revolution began with Bitcoin's introduction in 2009, fundamentally changing how we think about money and value transfer. This innovation sparked the creation of thousands of alternative cryptocurrencies and digital tokens. The regulatory landscape has been equally dynamic - while some nations like El Salvador and the Central African Republic have embraced Bitcoin as legal tender, others like China have implemented strict prohibitions while developing their own central bank digital currencies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The digital asset market has experienced explosive growth, reaching valuations exceeding $3 trillion at its peak. This rapid expansion has created significant challenges for traditional financial regulators, who must balance innovation with consumer protection and market stability in an environment that operates 24/7 across global boundaries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The decentralized nature of digital assets introduces unique legal complexities, including jurisdictional ambiguity, enhanced security risks, and novel compliance requirements. Traditional financial institutions face unprecedented challenges in adapting their risk management and regulatory frameworks to accommodate these borderless digital currencies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As the digital asset ecosystem continues to mature, there's growing consensus among industry participants that thoughtful regulation is necessary. However, the scope, implementation, and oversight of such regulations remain subjects of intense debate. The regulatory framework that emerges will significantly impact taxation policies, compliance obligations, banking relationships, intellectual property protection, and data privacy requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Success in this evolving landscape requires sophisticated legal guidance that combines traditional transactional expertise with deep understanding of digital asset technologies. Our clients benefit from our experience in cross-border transactions, regulatory compliance, and the unique challenges presented by decentralized financial systems.
              </p>
            </div>
          </div>
        </div>
      </section>


       {/* 4. Decentralized Autonomous Organizations (DAOs) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Decentralized Autonomous Organizations (DAOs)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                DAOs represent a revolutionary approach to organizational governance, enabling communities to operate collectively without traditional hierarchical structures or centralized control. These blockchain-based organizations function through consensus mechanisms and smart contracts, allowing members to collaborate on diverse objectives ranging from investment strategies to social impact initiatives.
                  </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                Unlike traditional corporations, DAOs operate without formal corporate structures, board of directors, or conventional governance documents. Instead, their operational rules and decision-making processes are encoded directly into smart contracts on the blockchain. This creates unique challenges as these automated systems often don't align with established corporate law frameworks or securities regulations that govern traditional investment vehicles.
                </p>

                
              </div>
              <div className="flex justify-center h-full">
                <img 
                 src="/dao.png" 
                 alt="Decentralized Autonomous Organizations (DAOs) Illustration" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
                </div>
      </section>


     
      

      {/* 5. Non-fungible Tokens (NFTs) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Non-Fungible Tokens (NFTs)</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                NFTs represent a groundbreaking category of digital assets that can represent ownership of unique items, both digital and physical. These blockchain-based tokens have created new markets for digital art, collectibles, virtual real estate, and even real-world assets. The NFT ecosystem has experienced remarkable growth, creating new opportunities for creators, collectors, and investors worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                While NFTs themselves are unique and non-interchangeable, the underlying intellectual property rights they represent can be complex and multifaceted. Creators typically retain certain rights to their work even after selling the NFT, while purchasers acquire specific ownership rights. This creates a nuanced legal landscape that requires careful consideration of licensing terms, usage rights, and intellectual property protection.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The NFT ecosystem involves multiple stakeholders - from individual creators and artists to large-scale NFT platforms, marketplaces, and institutional buyers. Each participant requires comprehensive legal support covering intellectual property protection, contract negotiation, regulatory compliance, cross-border transactions, and dispute resolution. Success in this space demands sophisticated legal guidance that understands both traditional IP law and the unique characteristics of blockchain-based digital assets.
              </p>
              </div>
          </div>
        </div>
      </section>

      {/* 6. Full-Service Planning for Web 3.0 Law */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Comprehensive Web3 Legal Solutions</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Our Web3 legal team provides comprehensive support across all aspects of decentralized technology law:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building className="w-6 h-6 text-[#A5292A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Entity Formation</h3>
                    <p className="text-gray-600 text-sm">Strategic jurisdiction selection, tax optimization, and comprehensive risk assessment for DAOs and Web3 organizations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#A5292A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Strategic Planning</h3>
                    <p className="text-gray-600 text-sm">Legal framework development for DAO operations and associated investment structures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-[#A5292A] mr-3 mt-1 flex-shrink-0" />
            <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Contract Services</h3>
                    <p className="text-gray-600 text-sm">Comprehensive contract lifecycle management including drafting, negotiation, and enforcement across Web3 platforms</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-[#A5292A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Intellectual Property</h3>
                    <p className="text-gray-600 text-sm">Advanced IP protection strategies for digital assets, licensing frameworks, and cross-border IP enforcement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scale className="w-6 h-6 text-[#A5292A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Dispute Resolution</h3>
                    <p className="text-gray-600 text-sm">Specialized dispute resolution for Web3 conflicts including smart contract disputes and cross-border litigation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#A5292A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Compliance</h3>
                    <p className="text-gray-600 text-sm">Regulatory compliance across multiple jurisdictions including securities law, data protection, and emerging Web3 regulations</p>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. An International Network of Experts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Global Expertise and Local Knowledge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Fathom Legal has established itself as a trusted advisor in complex, rapidly evolving legal landscapes, helping clients navigate regulatory uncertainty and capitalize on emerging opportunities. Our team has built a reputation for delivering innovative legal solutions that combine deep technical understanding with practical business acumen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Web3 practice leverages this proven approach, drawing on expertise from across our firm's practice areas to provide integrated legal solutions. We collaborate with specialists in corporate law, intellectual property, international trade, and regulatory compliance to deliver comprehensive support that addresses the multifaceted challenges of decentralized technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The global nature of Web3 technologies requires sophisticated understanding of diverse legal systems and regulatory frameworks. Our international network of legal professionals, combined with our deep knowledge of Indian law and emerging markets, positions us to provide seamless support for clients operating across multiple jurisdictions.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* 8. Web3 Legal Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Web3 Legal Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Crypto & Digital Assets */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Crypto & Digital Assets</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Compliance with local and international crypto regulations, licensing, securities law compliance, and regulatory filings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Securities law compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    KYC/AML setup
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Exchange licensing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Custody solutions
                  </li>
                </ul>
              </div>

              {/* DAOs & Governance */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">DAOs & Governance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Structuring DAOs, liability issues, governance models, and legal frameworks for decentralized organizations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    DAO legal structure
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Governance frameworks
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Liability protection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Voting mechanisms
                  </li>
                </ul>
              </div>

              {/* Smart Contracts */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Contracts</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Enforceability, drafting, auditing for compliance, and legal review of automated contract systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Smart contract audits
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Legal enforceability
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Compliance review
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Risk assessment
                  </li>
                </ul>
              </div>

              {/* NFTs & Digital Art */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">NFTs & Digital Art</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Intellectual property rights, licensing, royalties, ownership disputes, and digital asset protection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    IP rights protection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Licensing agreements
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Royalty structures
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Ownership disputes
                  </li>
                </ul>
              </div>

              {/* DeFi */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">DeFi (Decentralized Finance)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lending, staking, yield farming, regulatory compliance, and legal frameworks for DeFi protocols.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    DeFi protocol structure
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Yield farming compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Lending regulations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Staking legal issues
                  </li>
                </ul>
              </div>

              {/* Tokenization & ICOs/IDOs */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tokenization & ICOs/IDOs</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Securities law compliance, whitepaper review structuring, and regulatory guidance for token launches.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Token launch compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Whitepaper review
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Securities regulations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    IDO structuring
                  </li>
                </ul>
          </div>

              {/* Data Privacy & Cybersecurity */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Privacy & Cybersecurity</h3>
                <p className="text-gray-600 text-sm mb-4">
                  GDPR, data handling in blockchain, privacy compliance, and cybersecurity legal frameworks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    GDPR compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Data protection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Privacy frameworks
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                  </span>
                    Cybersecurity laws
                  </li>
                </ul>
              </div>

              {/* Taxation & Cross-Border Issues */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" style={{ color: "#A5292A" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Taxation & Cross-Border Issues</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Crypto taxation, cross-border digital assets, international compliance, and tax optimization strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Crypto taxation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Cross-border compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Tax optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: "#A5292A" }}>
                      <span className="text-white text-xs">✓</span>
                    </span>
                    International regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* 9. Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg  text-gray-800">What Are the Primary Legal Challenges in Web3?</h3>
                  {openFAQ === 0 ? (
                    <Minus className="w-6 h-6 text-[#A5292A]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#A5292A]" />
                  )}
                </button>
                {openFAQ === 0 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Web3 technologies present unique legal challenges that traditional legal frameworks weren't designed to address. As these technologies mature, businesses face unprecedented legal complexities that require specialized expertise. Key areas of concern include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li><strong>Data privacy and security:</strong> While blockchain technology offers enhanced security through decentralization, the transparent nature of public blockchains can conflict with privacy regulations. Organizations must carefully balance transparency benefits with data protection requirements across different jurisdictions.</li>
                      <li><strong>Intellectual property protection:</strong> The decentralized and global nature of Web3 creates challenges for traditional IP enforcement. Creators and businesses need innovative strategies to protect their intellectual property in an environment where traditional legal boundaries are less clear.</li>
                      <li><strong>Regulatory compliance:</strong> The absence of centralized authority in Web3 systems creates uncertainty around regulatory oversight and enforcement. Businesses must proactively develop compliance strategies that anticipate evolving regulatory frameworks across multiple jurisdictions.</li>
                    </ul>
                  </div>
                )}
          </div>

              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg  text-gray-800">What Constitutes Web3 Assets?</h3>
                  {openFAQ === 1 ? (
                    <Minus className="w-6 h-6 text-[#A5292A]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#A5292A]" />
                  )}
                </button>
                {openFAQ === 1 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      Web3 assets encompass any digital or digitized items that leverage blockchain technology for ownership, transfer, or verification. These assets operate within decentralized networks, creating new possibilities for value creation and exchange. Examples include digital currencies, tokenized real estate, virtual collectibles, digital art, gaming assets, and even fractionalized ownership of physical assets. The flexibility of Web3 technology enables businesses to create innovative asset classes and new forms of customer engagement that weren't possible with traditional systems.
                    </p>
                  </div>
                )}
                </div>

              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg  text-gray-800">What is the Current Legal Status of Cryptocurrency in India?</h3>
                  {openFAQ === 2 ? (
                    <Minus className="w-6 h-6 text-[#A5292A]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#A5292A]" />
                  )}
                </button>
                {openFAQ === 2 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      India's approach to cryptocurrency regulation is currently in a transitional phase, with the government and regulatory bodies developing comprehensive frameworks for digital assets. While cryptocurrencies are not explicitly prohibited, they are not recognized as legal tender. The regulatory environment includes evolving tax policies, anti-money laundering requirements, and securities law considerations. Successfully operating in this space requires careful legal planning and ongoing compliance monitoring as regulations continue to develop.
                    </p>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "#A5292A" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-8 text-white text-opacity-90 max-w-3xl mx-auto">
            Ready to discuss your Web3 legal needs? Contact our experienced team for professional legal consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactClick}
              className="bg-white text-[#A5292A] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all hover:cursor-pointer"
            >
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#A5292A] px-8 py-4 rounded-lg font-semibold transition-all">
              Call Us: +91-XX-XXXX-XXXX
            </button>
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
};

export default Web3Law;