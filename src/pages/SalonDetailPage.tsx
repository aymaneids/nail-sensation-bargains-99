
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CouponCard from '@/components/CouponCard';
import { getSalonById, getSalonCoupons, Salon, Coupon } from '@/utils/mockData';
import { MapPin, Phone, Globe, Star, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SalonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [salon, setSalon] = useState<Salon | null>(null);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // Simulate API call with setTimeout
      setTimeout(() => {
        const salonData = getSalonById(id);
        if (salonData) {
          setSalon(salonData);
          const salonCoupons = getSalonCoupons(id);
          setCoupons(salonCoupons);
        }
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!salon) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Salon Not Found</h1>
          <p className="text-gray-600 mb-8">The salon you're looking for doesn't exist or has been removed.</p>
          <Link to="/coupons">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Browse All Coupons
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Salon Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{salon.name}</h1>
            <div className="flex items-center space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index} 
                  size={18} 
                  className={index < Math.floor(salon.rating) ? "fill-current" : ""}
                />
              ))}
              <span className="ml-2">
                {salon.rating} ({salon.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-start flex-wrap gap-y-2">
              <div className="flex items-center mr-6 text-white/90">
                <MapPin size={18} className="mr-2" />
                <span>{salon.address}, {salon.city}, {salon.state} {salon.zipCode}</span>
              </div>
              <div className="flex items-center mr-6 text-white/90">
                <Phone size={18} className="mr-2" />
                <span>{salon.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Salon Images */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Salon Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {salon.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-48 md:h-64">
                    <img src={image} alt={`${salon.name} - Image ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* About Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">About {salon.name}</h2>
              <p className="text-gray-700 mb-6">{salon.description}</p>
              
              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {salon.services.map((service, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`tel:${salon.phone}`} 
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
                {salon.website && (
                  <a 
                    href={salon.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors"
                  >
                    <Globe size={18} className="mr-2" />
                    Visit Website
                  </a>
                )}
                <a 
                  href={`https://maps.google.com/?q=${salon.address},${salon.city},${salon.state},${salon.zipCode}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <MapPin size={18} className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Available Coupons */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Available Deals</h2>
              {coupons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coupons.map(coupon => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                  <p className="text-gray-600">No active deals available for this salon at the moment.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex">
                  <MapPin size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      {salon.address}<br />
                      {salon.city}, {salon.state} {salon.zipCode}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">{salon.phone}</p>
                  </div>
                </div>
                
                {salon.email && (
                  <div className="flex">
                    <Mail size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">{salon.email}</p>
                    </div>
                  </div>
                )}
                
                {salon.website && (
                  <div className="flex">
                    <Globe size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Website</h4>
                      <a 
                        href={salon.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {salon.website.replace(/^https?:\/\//i, '')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
                <p className="text-gray-600 mb-4">
                  Ready to book your nail appointment? Call us directly or visit our website.
                </p>
                <div className="space-y-3">
                  <a 
                    href={`tel:${salon.phone}`} 
                    className="block w-full py-2 bg-primary text-white text-center rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Call to Book
                  </a>
                  {salon.website && (
                    <a 
                      href={salon.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full py-2 bg-white border border-primary text-primary text-center rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Book Online
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SalonDetailPage;
