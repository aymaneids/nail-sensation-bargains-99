
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Coupon {
  id: string;
  salonId: string;
  salonName: string;
  title: string;
  description: string;
  discount: string;
  code?: string;
  expirationDate: string;
  image: string;
  location: string;
}

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img src={coupon.image} alt={coupon.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <Link to={`/salons/${coupon.salonId}`} className="text-gray-700 hover:text-primary font-medium">
            {coupon.salonName}
          </Link>
          <span className="bg-accent text-primary text-sm px-2 py-1 rounded-full font-medium">
            {coupon.discount}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{coupon.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{coupon.description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{coupon.location}</span>
        </div>
        
        {coupon.code && (
          <div className="bg-gray-50 border border-gray-200 rounded p-2 mb-4 flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-500">Coupon Code:</span>
              <span className="ml-2 font-mono font-medium">{coupon.code}</span>
            </div>
            <button className="text-xs text-primary hover:text-primary-dark">Copy</button>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar size={14} className="mr-1" />
            <span>Expires: {coupon.expirationDate}</span>
          </div>
          <Link to={`/coupons/${coupon.id}`}>
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              View Deal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
