
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = "",
  placeholder = "Enter city or zip code..." 
}) => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/coupons?location=${encodeURIComponent(location.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex w-full max-w-3xl ${className}`}>
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder={placeholder}
          className="search-input pl-10"
        />
      </div>
      <Button 
        type="submit" 
        className="ml-2 bg-primary hover:bg-primary-dark text-white px-6"
      >
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
