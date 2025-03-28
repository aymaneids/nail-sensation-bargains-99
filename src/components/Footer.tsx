
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold">Nail Salons Coupons</span>
            </div>
            <p className="text-gray-600 text-sm">
              Find the best deals and coupons for nail salons in your area. Save money on your next manicure, pedicure, or nail treatment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/coupons" className="text-gray-600 hover:text-primary">Find Coupons</Link></li>
              <li><Link to="/salons" className="text-gray-600 hover:text-primary">Nail Salons</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li><Link to="/coupons?location=New York" className="text-gray-600 hover:text-primary">New York</Link></li>
              <li><Link to="/coupons?location=Los Angeles" className="text-gray-600 hover:text-primary">Los Angeles</Link></li>
              <li><Link to="/coupons?location=Chicago" className="text-gray-600 hover:text-primary">Chicago</Link></li>
              <li><Link to="/coupons?location=Miami" className="text-gray-600 hover:text-primary">Miami</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li><Link to="/coupons?service=Manicure" className="text-gray-600 hover:text-primary">Manicure</Link></li>
              <li><Link to="/coupons?service=Pedicure" className="text-gray-600 hover:text-primary">Pedicure</Link></li>
              <li><Link to="/coupons?service=Acrylics" className="text-gray-600 hover:text-primary">Acrylics</Link></li>
              <li><Link to="/coupons?service=Gel Polish" className="text-gray-600 hover:text-primary">Gel Polish</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2023 Nail Salons Coupons. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
