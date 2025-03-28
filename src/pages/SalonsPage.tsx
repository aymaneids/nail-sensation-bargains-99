
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { salonData } from '@/utils/mockData';
import { MapPin, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SalonsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nail Salons Directory</h1>
          <p className="text-lg max-w-2xl mx-auto text-white/90">
            Discover top-rated nail salons offering exclusive deals and discounts in your area.
          </p>
        </div>
      </section>
      
      {/* Salons List */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salonData.map((salon) => (
              <div key={salon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={salon.images[0]} 
                    alt={salon.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Link to={`/salons/${salon.id}`}>
                    <h2 className="text-xl font-semibold mb-2 hover:text-primary">{salon.name}</h2>
                  </Link>
                  
                  <div className="flex items-center text-sm mb-3">
                    <div className="flex items-center mr-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < Math.floor(salon.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {salon.rating} ({salon.reviewCount} reviews)
                    </span>
                  </div>
                  
                  <div className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {salon.description}
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span>{salon.address}, {salon.city}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Phone size={16} className="mr-2" />
                    <a href={`tel:${salon.phone}`} className="hover:text-primary">
                      {salon.phone}
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {salon.services.slice(0, 3).map((service, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 px-2 py-1 rounded-full text-gray-600 text-xs"
                      >
                        {service}
                      </span>
                    ))}
                    {salon.services.length > 3 && (
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600 text-xs">
                        +{salon.services.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link to={`/salons/${salon.id}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        View Deals
                      </Button>
                    </Link>
                    <a 
                      href={`tel:${salon.phone}`}
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
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

export default SalonsPage;
