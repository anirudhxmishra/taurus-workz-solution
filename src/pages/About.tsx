
import { Calendar, User, Target, Eye, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Taurus Workz</h1>
            <p className="text-xl text-blue-100">
              Building trust through professional excellence since July 2006
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to becoming Mumbai's trusted facilities partner
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Founded in July 2006</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Taurus Workz was established with a vision to provide comprehensive facilities 
                and project management services to the corporate and industrial sectors. What 
                started as a small service company has grown into a trusted partner for 
                businesses across Mumbai.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Milestones:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 2006: Company establishment</li>
                    <li>• 2008: First major corporate client</li>
                    <li>• 2012: Expanded to eco-friendly solutions</li>
                    <li>• 2018: 500+ satisfied clients milestone</li>
                    <li>• 2024: Leading facilities partner in Mumbai</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Evolution:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Started with basic maintenance</li>
                    <li>• Added project management services</li>
                    <li>• Introduced green initiatives</li>
                    <li>• Developed LEED certification expertise</li>
                    <li>• Comprehensive facilities solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Leadership Profile</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Rajesh Kumar Pathak
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-4">
                    Founder & Managing Director
                  </p>
                  <p className="text-gray-700 mb-4">
                    A mechanical engineering graduate with specialized training as a mechanical fitter, 
                    Rajesh brings over 15 years of hands-on experience in civil and interior turnkey projects.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Education:</h4>
                      <p className="text-gray-700">Graduate in Mechanical Engineering</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Specialization:</h4>
                      <p className="text-gray-700">Mechanical Fitter & Project Management</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Experience:</h4>
                      <p className="text-gray-700">15+ years in Civil & Interior Turnkey Projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Leadership Philosophy</h4>
                  <blockquote className="text-gray-700 italic text-lg">
                    "Taking full responsibility for our clients' facility needs allows them to 
                    focus entirely on their core business operations. This principle has guided 
                    Taurus Workz since day one."
                  </blockquote>
                  <p className="text-gray-600 mt-4">
                    Under Rajesh's leadership, Taurus Workz has maintained a 100% on-time 
                    delivery record while serving prestigious clients including international 
                    BPOs and luxury apartment complexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Foundation
              </h2>
              <p className="text-lg text-gray-600">
                The principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-700">
                  To provide comprehensive, eco-friendly facilities and project management 
                  solutions that enable our clients to focus entirely on their core business 
                  operations while we handle all their infrastructure needs.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-green-50 rounded-lg p-8 text-center">
                <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-700">
                  To become the most trusted facilities management partner in Western India, 
                  known for taking complete responsibility and delivering sustainable solutions 
                  that exceed client expectations.
                </p>
              </div>

              {/* Values */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Heart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Customer satisfaction first</li>
                  <li>• Environmental responsibility</li>
                  <li>• On-time delivery commitment</li>
                  <li>• Professional excellence</li>
                  <li>• Complete accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Focus */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Serving Prestigious Clients
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Our regular clients include international BPOs, luxury apartment complexes, 
              and leading corporations who trust us with their critical facility operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Corporate Sector</h3>
                <p className="text-blue-200">
                  International BPOs, IT companies, and corporate offices rely on our 
                  comprehensive facilities management solutions.
                </p>
              </div>
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Residential Sector</h3>
                <p className="text-blue-200">
                  Luxury apartments and residential complexes trust our maintenance 
                  and project management expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
