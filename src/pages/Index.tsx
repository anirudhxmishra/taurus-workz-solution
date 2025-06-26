
import { ArrowRight, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ClientLogo from './ClientLogo';

const Index = () => {
  const services = [
    {
      icon: () => <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"><span className="text-white text-xs">🌱</span></div>,
      title: "Green Facilities Management",
      description: "Eco-friendly facility management with LEED certification support",
      features: ["LEED Certification Support", "Eco-friendly Products", "AMC Consolidation", "HVAC & Electrical Upkeep"]
    },
    {
      icon: () => <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><span className="text-white text-xs">⚙️</span></div>,
      title: "Erection & Commissioning",
      description: "Safe handling of industrial equipment with full compliance",
      features: ["Industrial Equipment Handling", "Government Insurance", "Labor Law Compliance", "Special Lifting Expertise"]
    },
    {
      icon: () => <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"><span className="text-white text-xs">🔧</span></div>,
      title: "Projects & Maintenance",
      description: "Complete turnkey solutions for corporate and residential needs",
      features: ["Turnkey Interiors", "HVAC Solutions", "Custom Furniture", "B2B & Residential Coverage"]
    }
  ];

  const stats = [
    { icon: Clock, value: "18+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Satisfied Clients" },
    { icon: Award, value: "100%", label: "On-Time Delivery" },
    { icon: CheckCircle, value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              One That Meets Your Need
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-blue-100">
              Trusted Facilities & Projects Partner Since 2006
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl">
              Professional end-to-end facilities and project management services for
              corporate and industrial sectors in Mumbai and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Taurus Workz
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Launched in July 2006, Taurus Workz has been Mumbai's trusted partner for
              comprehensive facilities and project management. We specialize in environment-friendly
              operations, ensuring customer satisfaction and on-time delivery for every project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission</h3>
                <p className="text-gray-600">
                  To provide comprehensive facilities management solutions that allow our
                  clients to focus on their core business operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-600">
                  Taking full responsibility for facility management so clients can
                  concentrate on growing their business without operational concerns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Motto</h3>
                <p className="text-gray-600 font-medium text-green-600">
                  "One That Meets Your Need" - Delivering tailored solutions for
                  every client requirement.
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three pillars of excellence in facilities and project management,
              tailored to meet your specific business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <service.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Esteemed Clients
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by top enterprises across banking, telecom, IT, pharma, and media sectors.
          </p>

          <ClientLogo />
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how Taurus Workz can meet your facilities and project management needs.
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:02242666200"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Now: 022-42666200
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
