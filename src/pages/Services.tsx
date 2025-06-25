
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "Green Facilities Management",
      description: "Comprehensive eco-friendly facility management solutions with LEED certification support",
      icon: "🌱",
      color: "green",
      features: [
        "LEED Certification Support & Consultation",
        "Eco-friendly Products & Materials Sourcing",
        "AMC Consolidation for Cost Optimization",
        "HVAC System Design & Maintenance",
        "Electrical Systems Management",
        "Chiller Plant Operations & Maintenance",
        "DG Set Operations & Upkeep",
        "Energy Efficiency Audits",
        "Waste Management Solutions",
        "Green Building Compliance"
      ],
      benefits: [
        "Reduced operational costs",
        "Environmental sustainability",
        "LEED certification achievement",
        "Consolidated vendor management"
      ]
    },
    {
      title: "Erection & Commissioning",
      description: "Safe and compliant industrial equipment handling with specialized expertise",
      icon: "⚙️",
      color: "blue",
      features: [
        "Industrial Equipment Installation",
        "Heavy Machinery Erection",
        "System Commissioning & Testing",
        "Government Insurance Compliance",
        "Labor Laws Adherence",
        "Special Lifting Equipment Operations",
        "Safety Protocol Implementation",
        "Quality Assurance Testing",
        "Documentation & Certification",
        "Post-Installation Support"
      ],
      benefits: [
        "100% safety compliance",
        "Professional installation",
        "Government-backed insurance",
        "Specialized equipment handling"
      ]
    },
    {
      title: "Projects, Repairs & Maintenance",
      description: "Complete turnkey solutions for corporate interiors and ongoing maintenance",
      icon: "🔧",
      color: "purple",
      features: [
        "Turnkey Interior Solutions",
        "Electrical System Installation",
        "HVAC Design & Implementation",
        "Custom Furniture Manufacturing",
        "Verified Repair Staff Deployment",
        "B2B Service Solutions",
        "Residential Service Coverage",
        "Preventive Maintenance Programs",
        "Emergency Repair Services",
        "24/7 Support Availability"
      ],
      benefits: [
        "Complete project management",
        "Quality craftsmanship",
        "Timely delivery",
        "Ongoing support"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          accent: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          accent: 'text-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          accent: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Three pillars of excellence in facilities and project management
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From eco-friendly facility management to complex industrial installations, 
              we provide end-to-end solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`${colors.bg} ${colors.border} border rounded-lg overflow-hidden`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">{service.icon}</span>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className={`bg-white p-8 lg:p-12 ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Service Features:</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600">
                How we ensure successful project delivery every time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your specific requirements and challenges" },
                { step: "02", title: "Planning", desc: "Detailed project planning with timeline and resource allocation" },
                { step: "03", title: "Execution", desc: "Professional implementation with quality control and safety" },
                { step: "04", title: "Support", desc: "Ongoing maintenance and support for long-term success" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your facilities and project management needs. 
            Let's find the perfect solution for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
            >
              Request Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:02242666200"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Call: 022-42666200
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
