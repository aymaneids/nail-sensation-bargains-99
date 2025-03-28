
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCouponById, getSalonById, Coupon, Salon } from '@/utils/mockData';
import { MapPin, Phone, Calendar, Copy, CheckCheck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CouponDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [salon, setSalon] = useState<Salon | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const couponData = getCouponById(id);
        if (couponData) {
          setCoupon(couponData);
          const salonData = getSalonById(couponData.salonId);
          if (salonData) {
            setSalon(salonData);
          }
        }
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  const handleCopyCode = () => {
    if (coupon?.code) {
      navigator.clipboard.writeText(coupon.code)
        .then(() => {
          setCopied(true);
          toast({
            title: "Code Copied!",
            description: `${coupon.code} has been copied to your clipboard.`,
          });
          
          setTimeout(() => setCopied(false), 3000);
        })
        .catch(err => {
          console.error('Failed to copy code: ', err);
          toast({
            title: "Copy Failed",
            description: "There was an error copying the code. Please try again.",
            variant: "destructive",
          });
        });
    }
  };
  
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
  
  if (!coupon || !salon) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Coupon Not Found</h1>
          <p className="text-gray-600 mb-8">The coupon you're looking for doesn't exist or has expired.</p>
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
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/coupons" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft size={18} className="mr-2" />
          Back to All Coupons
        </Link>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Coupon Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <div className="bg-white/20 inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {coupon.discount}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{coupon.title}</h1>
                  <Link to={`/salons/${salon.id}`} className="flex items-center text-white/90 hover:text-white">
                    <span className="mr-2">{salon.name}</span>
                    <MapPin size={16} className="mr-1" />
                    <span>{coupon.location}</span>
                  </Link>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center text-white/90 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>Expires: {coupon.expirationDate}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coupon Content */}
            <div className="md:flex">
              {/* Left Column */}
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="mb-10">
                  <h2 className="text-xl font-semibold mb-4">Deal Description</h2>
                  <p className="text-gray-700 mb-6">{coupon.description}</p>
                  <img 
                    src={coupon.image} 
                    alt={coupon.title} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div className="mb-10">
                  <h2 className="text-xl font-semibold mb-4">How to Redeem</h2>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Show this coupon to the nail salon staff when you arrive.</li>
                    {coupon.code && <li>Mention coupon code <strong>{coupon.code}</strong> when booking.</li>}
                    <li>Enjoy your discounted service!</li>
                  </ol>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Offer valid until {coupon.expirationDate}</li>
                    <li>Cannot be combined with other offers or promotions</li>
                    <li>Subject to availability</li>
                    <li>Valid only at {salon.name} ({coupon.location})</li>
                    <li>Limit one coupon per customer</li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="md:w-1/3 bg-gray-50 p-6 md:p-8">
                {coupon.code && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Coupon Code</h2>
                    <div className="bg-white border-2 border-dashed border-primary rounded-lg p-4 text-center">
                      <p className="font-mono text-lg font-bold text-primary mb-3">{coupon.code}</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={handleCopyCode}
                      >
                        {copied ? (
                          <>
                            <CheckCheck size={18} className="mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={18} className="mr-2" />
                            Copy Code
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Salon Information</h2>
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin size={18} className="text-gray-500 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600">
                          {salon.address}<br />
                          {salon.city}, {salon.state} {salon.zipCode}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone size={18} className="text-gray-500 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href={`tel:${salon.phone}`} className="text-gray-600 hover:text-primary">
                          {salon.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link to={`/salons/${salon.id}`}>
                  <Button className="w-full mb-4 bg-secondary hover:bg-secondary-dark text-white">
                    Visit Salon Page
                  </Button>
                </Link>
                
                <a 
                  href={`tel:${salon.phone}`} 
                  className="block w-full py-2 text-center bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
                >
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CouponDetailPage;
