
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold">Nail Salons Coupons</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/coupons" className="text-gray-700 hover:text-primary font-medium">Coupons</Link>
            <Link to="/salons" className="text-gray-700 hover:text-primary font-medium">Salons</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/coupons">
              <Button className="hidden sm:flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white">
                <Search size={18} />
                <span>Find Deals</span>
              </Button>
            </Link>
            <button className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
