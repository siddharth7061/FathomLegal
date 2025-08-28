import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const AgreementsAndPolicies = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="text-gray-800 py-20 relative"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Image Layer with Blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        ></div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(250, 250, 250, 0.6)" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Agreements and <span style={{ color: "#A5292A" }}>Policies</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section 1: GENERAL */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                1. GENERAL
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  This document constitutes an electronic record as per the
                  Information Technology Act, 2000 and relevant rules,
                  incorporating amendments concerning electronic records across
                  various statutes. It is generated electronically and does not
                  necessitate physical or digital signatures. The document is
                  published in adherence to Rule 3(1) of the Information
                  Technology (Intermediaries guidelines) Rules, 2011, mandating
                  the publication of rules, regulations, privacy policy, and
                  Terms of Use for accessing or using legalwiz.in and its
                  partner websites linked from legalwiz.in.
                </p>
                <p className="mb-6">
                  The domain www.fathomlegal.com ("Website") is the property of
                  Fathom Legal, Advocates and Corporate Consultants ("Company"),
                  a Partnership Firm incorporated under the provisions of the
                  Partnership Act, 1932, with its registered office at B-11,
                  Sector 57, Noida, Gautam Buddh Nagar, Uttar Pradesh- 201301.
                  The term "You" or "User" refers to any legal individual or
                  entity accessing or using the services offered on this
                  Website, competent to enter into binding contracts under the
                  Indian Contract Act, 1872. The terms "We," "Us," or "Our"
                  pertain to the Website and/or the Company, as context demands.
                  The term "Party" refers to both the User and the Company
                  individually and collectively as necessary.
                </p>
                <p className="mb-6">
                  The section headings in this Policy serve organizational
                  purposes, arranging provisions in an orderly manner, without
                  holding any legal or contractual value. The User's use of the
                  Website signifies an unequivocal acceptance of this Policy and
                  the accompanying Terms of Use available at
                  www.fathomlegal.com. The User acknowledges and agrees that
                  these Terms and the Policy constitute a legally binding
                  agreement between the User and the Company.
                </p>
                <p className="mb-6">
                  The Company reserves the exclusive right to amend or modify
                  the Policy and the aforementioned Terms without prior notice.
                  The User is responsible for periodic review of the Policy and
                  Terms to stay informed about updates. Continued use of the
                  Website post changes implies the User's consent to the
                  modifications.
                </p>
                <p className="mb-6">
                  The Parties agree that the Company may collect and store the
                  User's personal information, submitted by the User on the
                  Website. This information includes but is not limited to
                  username, passwords, email address, name, address, age, date
                  of birth, etc. The Company may use this information to enhance
                  the Website, provide personalized services, and offer a better
                  user experience.
                </p>
                <p className="mb-6">
                  The Website utilizes "cookies" to enhance browsing experiences
                  and analyze web page flow. While the User can decline cookies
                  if their browser permits, this may limit certain features on
                  the Website.
                </p>
                <p className="mb-6">
                  The Company may share the User's personal information with
                  other corporate entities and affiliates for various purposes
                  including prevention of identity theft, fraud, and
                  facilitating joint services. Disclosure of personal
                  information may also occur if required by law or to protect
                  the rights and safety of the users.
                </p>
                <p className="mb-6">
                  Transactions on the Website are secure, and the Company does
                  not retain any credit or debit card information. The User's
                  consent to this Policy implies acceptance of the practices and
                  procedures related to security and information handling
                  outlined herein. Any disputes arising from this Policy will be
                  resolved through an Alternate Dispute Resolution mechanism,
                  including mediation and arbitration, as detailed in this
                  section. The Terms, Policy, and any other agreements between
                  the Parties are governed by Indian laws, with exclusive
                  jurisdiction of the Courts at New Delhi, India.
                </p>
                <p className="mb-6">
                  This Policy is an agreement between the User and the Company,
                  subject to the rules, guidelines, policies, terms, and
                  conditions applicable to any service provided by the Website.
                  The User's act of visiting the Website constitutes acceptance
                  of this Policy and the Terms. Amendments to this Policy are
                  effective immediately upon publication.
                </p>
              </div>
            </div>

            {/* Section 2: COLLECTION OF PERSONAL AND OTHER INFORMATION */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                2. COLLECTION OF PERSONAL AND OTHER INFORMATION
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  The Company collects and stores the User’s personal
                  information provided from time to time on the Website. This
                  includes but is not limited to username, passwords, email
                  address, name, address, age, date of birth, sex, nationality,
                  shopping preferences, and browsing history. The User is aware
                  that this information will be used to customize and enhance
                  the Website for improved user experiences. The Website may
                  automatically track certain information about the User based
                  on their IP address and browsing behavior. This information is
                  used for internal research on user demographics, interests,
                  and behavior to improve the Website and cater to user
                  interests. The User’s consent to this Policy allows the
                  Website to collect information about the User’s buying
                  behavior and trends if the User chooses to purchase products
                  or services from the Website.
                </p>
                <p className="mb-6">
                  The User’s posts, messages, reviews, and feedback on the
                  Website may be collected, stored, and used indefinitely by the
                  Company. Such information may be utilized to resolve disputes,
                  provide customer support, and comply with applicable laws. The
                  User is aware that while some sections of the Website can be
                  accessed without registration, certain activities require
                  valid personal information for registration purposes. The
                  contact information provided may be used to send offers and
                  promotions to the User.
                </p>
                <p className="mb-6">
                  The Company may occasionally request the User to complete
                  online surveys or write reviews for products or services. The
                  User’s consent to this Policy allows the Website to use such
                  data to customize the Website and provide tailored content to
                  the User. The Website is not compelled to store, upload,
                  publish, or display content, reviews, surveys, or feedback
                  submitted by the User. The Company may remove any such content
                  at its discretion without notice to the User.”
                </p>
              </div>
            </div>

            {/* Section 3: COOKIES */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                3. COOKIES
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  A “Cookie” is a small piece of information stored by a web
                  server on a web browser, allowing the browser to remember
                  specific user information for a more personalized experience.
                  The Website places both permanent and temporary cookies on the
                  User’s computer’s hard drive and web browser.
                </p>
                <p className="mb-6">
                  The Website uses data collection devices like cookies on
                  certain pages to analyze web page flow, measure promotional
                  effectiveness, and enhance trust and safety. Some features of
                  the Website are available only through the use of cookies. The
                  User may decline cookies, but this may limit certain features.
                </p>
                <p className="mb-6">
                  Third-party advertising companies may use the User’s
                  information to provide customized advertisements. The Website
                  may contain links to other websites, and the Company is not
                  responsible for their privacy practices or content.
                </p>
              </div>
            </div>

            {/* Section 4: DIVULGING/SHARING OF PERSONAL INFORMATION */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                4. DIVULGING/SHARING OF PERSONAL INFORMATION
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  The Company may share the User’s personal information with
                  corporate entities and affiliates to detect and prevent
                  identity theft, fraud, and abuse of the Website’s services,
                  and to facilitate joint or co-branded services.
                </p>
                <p className="mb-6">
                  The Website may disclose personal information if required by
                  law or in good faith belief that disclosure is necessary to
                  respond to legal processes or to protect the rights, property,
                  or personal safety of its users.
                </p>
                <p className="mb-6">
                  In the event of a merger, acquisition, or restructuring, the
                  User’s personal information may be shared/sold with other
                  business entities, with continued adherence to the Terms and
                  Policy.”
                </p>
              </div>
            </div>

            {/* Section 5: SECURITY */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                5. SECURITY
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  The Website ensures secure and protected transactions. Any
                  information entered by the User during transactions is
                  encrypted to prevent unauthorized disclosure to third parties.
                  Credit and debit card information is not received, stored, or
                  retained by the Company/Website.
                </p>
              </div>
            </div>

            {/* Section 6: THIRD PARTY ADVERTISEMENTS / PROMOTIONS */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                6. THIRD PARTY ADVERTISEMENTS / PROMOTIONS
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Third-party advertising companies may use the User’s
                  information to provide customised advertisements. The Website
                  may contain links to other websites collecting personally
                  identifiable information about the User. The Company/Website
                  is not responsible for their privacy practices or content.
                </p>
              </div>
            </div>

            {/* Section 7: USER'S CONSENT */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                7. USER'S CONSENT
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  By using the Website and providing information to the Company
                  through the Website, the User consents to the collection and
                  use of the disclosed information in accordance with this
                  Policy, including the sharing/divulging of information.
                </p>
              </div>
            </div>

            {/* Section 8: GRIEVANCE OFFICER */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                8. GRIEVANCE OFFICER
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  For grievances related to this Policy, the User may contact
                  the Grievance Officer: Saurabh Jetly (E-mail:
                  communications@fathomlegal.com).
                </p>
              </div>
            </div>

            {/* Section 9: DISPUTE RESOLUTION AND JURISDICTION */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                9. DISPUTE RESOLUTION AND JURISDICTION
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Any disputes arising from this Policy will be resolved through
                  an Alternate Dispute Resolution mechanism, including mediation
                  and arbitration, as detailed in this section. Indian laws
                  govern the Terms, Policy, and any other agreements between the
                  Parties, with exclusive jurisdiction of the Courts at New
                  Delhi, India This Policy constitutes an agreement between the
                  User and the Company, subject to the rules, guidelines,
                  policies, terms, and conditions applicable to any service
                  provided by the Website. The User’s act of visiting the
                  Website constitutes acceptance of this Policy and the Terms.
                  Amendments to this Policy are effective immediately upon
                  publication.
                </p>
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

export default AgreementsAndPolicies;
