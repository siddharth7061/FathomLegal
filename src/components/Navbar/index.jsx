import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/cropped-icon-red-192x192.png";
import { NavLink } from "react-router-dom";
export const Navbar = ({ page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-12 h-12">
              <img src={logo} />
            </div>
            <div className="text-2xl font-bold text-gray-800">
              Fathom <span style={{ color: "#A5292A" }}>Legal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={
                page === "home"
                  ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                  : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
              }
            >
              Home
            </NavLink>

            <NavLink
              className={
                page === "aboutus"
                  ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                  : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
              }
              to="/aboutus"
            >
              About Us
            </NavLink>
            {/* Services Dropdown */}
            <div className="relative group">
              <NavLink
                to="/services"
                className={
                  page === "services"
                    ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                    : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
                }
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </NavLink>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <NavLink
                  to="/services/generalcorporateadvisory"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  General Corporate Advisory
                </NavLink>
                
                <NavLink
                  to="/services/disputeresolution"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Dispute Resolution
                </NavLink>
                <NavLink
                  to="/services/intellectualproperty"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Intellectual Property Services
                </NavLink>
                
                <NavLink
                  to="/services/realestatesolutions"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Real Estate Solution
                </NavLink>
                <NavLink
                  to="/services/reitsolutions"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  REIT Solution
                </NavLink>
              </div>
            </div>
            
            <NavLink
              to="/web3law"
              className={
                page === "web3law"
                  ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                  : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
              }
            >
              Web3 law
            </NavLink>

            <NavLink
              to="/templates"
              className={
                page === "templates"
                  ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                  : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
              }
            >
              Templates
            </NavLink>

            <NavLink
              to="/gallery"
              className={
                page === "gallery"
                  ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                  : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
              }
            >
              Newsfeed
            </NavLink>

           
            

            {/* VBS Dropdown */}
            <div className="relative group">
              <NavLink
                to="/valueboostingsolutions"
                className={
                  page === "vbs"
                    ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                    : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
                }
              >
                Value Services <ChevronDown className="ml-1 w-4 h-4" />
              </NavLink>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <NavLink
                  to="/valueboostingsolutions/chieflegalofficerservice"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Chief Legal Officer Service
                </NavLink>
                <NavLink
                  to="/valueboostingsolutions/techLegalBlueprint"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Tech Legal Blueprint
                </NavLink>
                <NavLink
                  to="/valueboostingsolutions/vcfundingsupport"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  VC Funding Support
                </NavLink>
                <NavLink
                  to="/valueboostingsolutions/pitchdeckservices"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Pitch Deck Services
                </NavLink>
                <a
                  href="#ngo"
                  className="block px-4 py-2 text-gray-600 hover:bg-[#FAFAFA] hover:text-[#A5292A]"
                >
                  Cybersecurity Compliance Services
                </a>
              </div>
            </div>

            {/* Thought Leadership */}
            <div className="relative group">
              <NavLink
                to="/thoughtleadership"
                className={
                  page === "thoughtleadership"
                    ? "text-[#A5292A] hover:text-[#A5292A] font-medium flex items-center"
                    : "text-gray-600 hover:text-[#A5292A] font-medium flex items-center"
                }
              >
                Thought Leadership
              
              </NavLink>
             
              </div>
            
            
            <NavLink
              to="/contact"
              className={
                page === "contact"
                  ? "text-[#A5292A] hover:text-[#A5292A] font-medium"
                  : "text-gray-600 hover:text-[#A5292A] font-medium"
              }
            >
              Contact
            </NavLink>
            {/* <button
              className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all font-medium"
              style={{ backgroundColor: "#A5292A" }}
            >
              Get Consultation
            </button> */}
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
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                className="block px-3 py-2 text-gray-600 hover:text-[#A5292A]"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="block px-3 py-2 text-gray-600 hover:text-[#A5292A]"
                to="/services"
              >
                Services
              </NavLink>

              <NavLink
                className="block px-3 py-2 text-gray-600 hover:text-[#A5292A]"
                to="/gallery"
              >
                Gallery
              </NavLink>

              <NavLink
                className="block px-3 py-2 text-gray-600 hover:text-[#A5292A]"
                to="/aboutus"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-[#A5292A]"
              >
                Contact
              </NavLink>
              {/* <button
                className="w-full text-left text-white px-3 py-2 rounded-lg hover:opacity-90 font-medium"
                style={{ backgroundColor: "#A5292A" }}
              >
                Get Consultation
              </button> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
