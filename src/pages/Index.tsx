
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CouponCard from '@/components/CouponCard';
import { couponData } from '@/utils/mockData';

const categoryItems = [
  { name: 'Manicure', image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b2b9?ixlib=rb-4.0.3', link: '/coupons?service=Manicure' },
  { name: 'Pedicure', image: 'https://images.unsplash.com/photo-1601233216647-3775f3eaea06?ixlib=rb-4.0.3', link: '/coupons?service=Pedicure' },
  { name: 'Gel Polish', image: 'https://images.unsplash.com/photo-1535908484823-d5d4b952bcee?ixlib=rb-4.0.3', link: '/coupons?service=Gel%20Polish' },
  { name: 'Acrylics', image: 'https://images.unsplash.com/photo-1612387491821-9443258942bd?ixlib=rb-4.0.3', link: '/coupons?service=Acrylics' },
];

const popularCities = [
  { name: 'New York', link: '/coupons?location=New%20York' },
  { name: 'Los Angeles', link: '/coupons?location=Los%20Angeles' },
  { name: 'Chicago', link: '/coupons?location=Chicago' },
  { name: 'Miami', link: '/coupons?location=Miami' },
  { name: 'Houston', link: '/coupons?location=Houston' },
  { name: 'Dallas', link: '/coupons?location=Dallas' },
];

const Index = () => {
  // Display only the first 3 coupons for the featured section
  const featuredCoupons = couponData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Nail Salon Coupons
              <span className="block mt-2 text-white/90">Discover Amazing Deals Near You!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80 animate-fade-up">
              Find exclusive discounts and promotions at nail salons in your area. 
              Save money on your next manicure, pedicure, or nail treatment.
            </p>
            
            <div className="animate-fade-up">
              <SearchBar />
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {popularCities.map((city) => (
                <Link 
                  key={city.name} 
                  to={city.link}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors duration-300"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-heading mb-4">Browse by Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect deal for your next nail treatment. Browse by service category to discover the best offers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryItems.map((category) => (
              <Link 
                key={category.name} 
                to={category.link}
                className="group block rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Coupons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold gradient-heading mb-4">Featured Deals</h2>
              <p className="text-gray-600 max-w-2xl">
                Check out these amazing offers from top-rated nail salons. Limited time offers you don't want to miss!
              </p>
            </div>
            <Link to="/coupons" className="hidden md:flex items-center text-primary hover:text-primary-dark font-medium">
              <span>View All</span>
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/coupons">
              <Button className="bg-primary hover:bg-primary-dark text-white px-6">
                View All Coupons
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Nail Salons Coupons</h2>
            <p className="text-gray-700 mb-8 text-lg">
              At Nail Salons Coupons, we're committed to helping you find the best deals on nail salon services in your area. 
              We partner with top-rated salons to bring you exclusive discounts and promotions on manicures, pedicures, 
              nail extensions, and more. Save money while treating yourself to beautiful nails!
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <span className="ml-2 font-semibold">Trusted by 10,000+ users</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
