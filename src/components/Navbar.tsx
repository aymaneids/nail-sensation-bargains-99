
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/coupons', label: 'Coupons' },
    { to: '/salons', label: 'Salons' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold">Nail Salons Coupons</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                to={link.to} 
                className="text-gray-700 hover:text-primary font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/coupons">
              <Button className="hidden sm:flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white">
                <Search size={18} />
                <span>Find Deals</span>
              </Button>
            </Link>

            {isMobile ? (
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <button className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">
                    <Menu className="h-6 w-6" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="h-[80vh]">
                  <DrawerHeader className="border-b pb-2">
                    <DrawerTitle className="flex items-center">
                      <Heart className="h-5 w-5 text-primary mr-2" />
                      <span>Nail Salons Coupons</span>
                    </DrawerTitle>
                    <DrawerClose className="absolute right-4 top-4">
                      <X className="h-5 w-5" />
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.label}
                        to={link.to} 
                        className="text-lg text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link 
                      to="/coupons" 
                      className="mt-4 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white">
                        <Search size={18} />
                        <span>Find Deals</span>
                      </Button>
                    </Link>
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <button className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
