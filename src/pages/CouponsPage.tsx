
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CouponCard from '@/components/CouponCard';
import { searchCoupons, Coupon } from '@/utils/mockData';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceFilters = [
  "Manicure", "Pedicure", "Gel Polish", "Acrylics", "Nail Art", "Dip Powder"
];

const CouponsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationParam = searchParams.get('location') || '';
  const serviceParam = searchParams.get('service') || '';
  
  const [location, setLocation] = useState(locationParam);
  const [selectedService, setSelectedService] = useState(serviceParam);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // Update the search results whenever location or service changes
    const results = searchCoupons(locationParam, serviceParam);
    setCoupons(results);
    
    // Update state from URL params
    setLocation(locationParam);
    setSelectedService(serviceParam);
  }, [locationParam, serviceParam]);
  
  const handleServiceChange = (service: string) => {
    if (selectedService === service) {
      // If clicking on the already selected service, deselect it
      setSearchParams(prev => {
        prev.delete('service');
        return prev;
      });
    } else {
      setSearchParams(prev => {
        prev.set('service', service);
        return prev;
      });
    }
  };
  
  const clearFilters = () => {
    setSearchParams({});
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Search Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Find Nail Salon Coupons</h1>
            <p className="text-lg mb-8 text-white/80">
              Discover the best deals on nail services in your area
            </p>
            <SearchBar placeholder="Search by location..." />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="lg:flex">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block w-64 mr-8">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  {(locationParam || serviceParam) && (
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-primary"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                
                {locationParam && (
                  <div className="mb-6">
                    <h4 className="font-medium text-sm text-gray-500 mb-2">Location</h4>
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      <span className="flex-grow">{locationParam}</span>
                      <button 
                        onClick={() => {
                          setSearchParams(prev => {
                            prev.delete('location');
                            return prev;
                          });
                        }}
                        className="ml-2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-3">Service Type</h4>
                  <div className="space-y-2">
                    {serviceFilters.map(service => (
                      <button
                        key={service}
                        onClick={() => handleServiceChange(service)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm ${
                          selectedService === service 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Filters */}
            <div className="lg:hidden mb-6">
              <div className="flex justify-between items-center mb-4">
                <Button 
                  variant="outline" 
                  className="text-gray-700 border-gray-300"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} className="mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
                
                {(locationParam || serviceParam) && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
              
              {showFilters && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                  {locationParam && (
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-gray-500 mb-2">Location</h4>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                        <span className="flex-grow">{locationParam}</span>
                        <button 
                          onClick={() => {
                            setSearchParams(prev => {
                              prev.delete('location');
                              return prev;
                            });
                          }}
                          className="ml-2 text-gray-400 hover:text-gray-600"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">Service Type</h4>
                    <div className="flex flex-wrap gap-2">
                      {serviceFilters.map(service => (
                        <button
                          key={service}
                          onClick={() => handleServiceChange(service)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedService === service 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Coupons Grid */}
            <div className="flex-grow">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {locationParam 
                    ? `Nail Salon Deals in ${locationParam}` 
                    : 'All Nail Salon Deals'}
                </h2>
                <p className="text-gray-500">{coupons.length} results</p>
              </div>
              
              {coupons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {coupons.map(coupon => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-medium mb-2">No coupons found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any nail salon coupons matching your search criteria.
                  </p>
                  <Button onClick={clearFilters} className="bg-primary hover:bg-primary-dark text-white">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CouponsPage;
