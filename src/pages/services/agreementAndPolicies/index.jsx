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
                  We collect personal information from users when they register
                  on our website, place an order, subscribe to our newsletter,
                  respond to a survey, fill out a form, or use certain other
                  site features. This information may include name, email
                  address, mailing address, phone number, credit card
                  information, and other relevant details necessary for
                  providing our services.
                </p>
                <p className="mb-6">
                  The information we collect is used to personalize user
                  experience, improve our website, enhance customer service,
                  process transactions, send periodic emails regarding orders or
                  other products and services, and follow up after
                  correspondence (live chat, email, or phone inquiries).
                </p>
                <p className="mb-6">
                  We implement appropriate data collection, storage, and
                  processing practices and security measures to protect against
                  unauthorized access, alteration, disclosure, or destruction of
                  personal information, username, password, transaction
                  information, and data stored on our site.
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
                  Our website uses cookies to enhance user experience. Cookies
                  are small files that a site or its service provider transfers
                  to your computer's hard drive through your web browser (if you
                  allow) that enables the site's or service provider's systems
                  to recognize your browser and capture and remember certain
                  information.
                </p>
                <p className="mb-6">
                  We use cookies to help us remember and process items in your
                  shopping cart, understand and save your preferences for future
                  visits, keep track of advertisements, and compile aggregate
                  data about site traffic and site interaction so that we can
                  offer better site experiences and tools in the future.
                </p>
                <p className="mb-6">
                  You can choose to have your computer warn you each time a
                  cookie is being sent, or you can choose to turn off all
                  cookies. You do this through your browser settings. If you
                  turn cookies off, some features will be disabled that make
                  your site experience more efficient, and some of our services
                  will not function properly.
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
                  We do not sell, trade, or otherwise transfer to outside
                  parties your personally identifiable information unless we
                  provide you with advance notice. This does not include website
                  hosting partners and other parties who assist us in operating
                  our website, conducting our business, or serving our users, so
                  long as those parties agree to keep this information
                  confidential.
                </p>
                <p className="mb-6">
                  We may also release information when its release is
                  appropriate to comply with the law, enforce our site policies,
                  or protect ours or others' rights, property, or safety.
                  However, non-personally identifiable visitor information may
                  be provided to other parties for marketing, advertising, or
                  other uses.
                </p>
                <p className="mb-6">
                  We may share information with trusted third parties who assist
                  us in operating our website, conducting our business, or
                  servicing you, so long as those parties agree to keep this
                  information confidential. We may also release your information
                  when we believe release is appropriate to comply with the law,
                  enforce our site policies, or protect our or others' rights,
                  property, or safety.
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
                  We adopt appropriate data collection, storage, and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure, or destruction of
                  your personal information, username, password, transaction
                  information, and data stored on our site.
                </p>
                <p className="mb-6">
                  Sensitive and private data exchange between the site and its
                  users happens over a SSL secured communication channel and is
                  encrypted and protected with digital signatures. Our website
                  is also in compliance with PCI vulnerability standards to
                  create as secure of an environment as possible for users.
                </p>
                <p className="mb-6">
                  Despite our security measures, we cannot guarantee the
                  absolute security of your information. Any transmission of
                  personal information is at your own risk. We are not
                  responsible for circumvention of any privacy settings or
                  security measures contained on the website.
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
                  Occasionally, at our discretion, we may include or offer third
                  party products or services on our website. These third party
                  sites have separate and independent privacy policies. We
                  therefore have no responsibility or liability for the content
                  and activities of these linked sites.
                </p>
                <p className="mb-6">
                  Nonetheless, we seek to protect the integrity of our site and
                  welcome any feedback about these sites. Third party
                  advertisements on our site may use cookies and web beacons in
                  their advertisements to collect non-personally identifiable
                  information about your visits to our site and other sites.
                </p>
                <p className="mb-6">
                  We do not control the collection or use of information by
                  third party advertisers. You should contact these advertisers
                  directly if you have any questions about their use of the
                  information they collect.
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
                  By using our site, you consent to our privacy policy and agree
                  to the terms and conditions set forth herein. Your continued
                  use of the website following the posting of changes to this
                  policy will be deemed your acceptance of those changes.
                </p>
                <p className="mb-6">
                  If you do not agree with any part of this privacy policy, you
                  must discontinue use of our website and services immediately.
                  We reserve the right to modify this privacy policy at any time
                  without prior notice. Changes will be effective immediately
                  upon posting on the website.
                </p>
                <p className="mb-6">
                  It is your responsibility to review this privacy policy
                  periodically for updates. Your continued use of our website
                  after any modifications indicates your acceptance of the
                  updated privacy policy.
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
                <p className="mb-6">
                  The Grievance Officer will address your concerns and provide
                  resolution within a reasonable timeframe. All grievances will
                  be handled in accordance with applicable laws and regulations.
                  Please provide detailed information about your concern to
                  facilitate prompt resolution.
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
                  Any disputes arising out of or in connection with this privacy
                  policy shall be resolved through alternate dispute resolution
                  mechanisms including mediation and arbitration as per the
                  Arbitration and Conciliation Act, 2015.
                </p>
                <p className="mb-6">
                  The arbitration proceedings shall be conducted in English and
                  shall take place in New Delhi, India. The arbitral tribunal
                  shall consist of a sole arbitrator appointed by mutual consent
                  of the parties. If the parties fail to agree on the
                  appointment of an arbitrator, the appointment shall be made by
                  the Delhi High Court.
                </p>
                <p className="mb-6">
                  This privacy policy and any disputes arising therefrom shall
                  be governed by the laws of India. The courts at New Delhi,
                  India shall have exclusive jurisdiction over any disputes that
                  cannot be resolved through alternate dispute resolution
                  mechanisms.
                </p>
                <p className="mb-6">
                  Before initiating any formal dispute resolution proceedings,
                  the parties agree to attempt resolution through good faith
                  negotiations for a period of thirty (30) days from the date
                  the dispute arises.
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
