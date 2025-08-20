import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              Fathom <span className="text-blue-600">Legal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#corporate"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  General Corporate Advisory
                </a>
                <a
                  href="#startup"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Agreements and Policies
                </a>
                <a
                  href="#dispute"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Dispute Resolution
                </a>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Intellectual Property Services
                </a>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Safe & Inclusive Workplaces
                </a>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Real Estate Solution
                </a>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  REIT Solution
                </a>
              </div>
            </div>

            {/* VBS Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Value Boosting Solutions{" "}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#corporate"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Chief Legal Officer Service
                </a>
                <a
                  href="#startup"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Tech Legal Blueprint
                </a>
                <a
                  href="#dispute"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  VC Funding Support
                </a>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Pitch Deck Services
                </a>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Cybersecurity Compliance Services
                </a>
              </div>
            </div>

            {/* Though Leadership */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Thought Leadership <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#corporate"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Incorporate your dream company in seven easy steps!
                </a>
                <a
                  href="#startup"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Never lose a deal: Master Contract Management like a PRO
                </a>
                <a
                  href="#dispute"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Resolve Conflicts Fast: Ultimate Dispute Resolution Guide
                </a>
              </div>
            </div>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Consultation
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                Get Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
