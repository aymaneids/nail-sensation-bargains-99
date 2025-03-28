
// Mock salon data
export interface Salon {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  email?: string;
  rating: number;
  reviewCount: number;
  services: string[];
  images: string[];
  location: {
    lat: number;
    lng: number;
  };
}

// Export the Coupon interface from this module
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

export const salonData: Salon[] = [
  {
    id: "salon1",
    name: "Glamour Nails & Spa",
    description: "Luxury nail salon offering top-quality manicures, pedicures, and nail extensions in a relaxing atmosphere.",
    address: "123 Beauty Blvd",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    phone: "(212) 555-1234",
    website: "https://glamournailsspa.com",
    email: "info@glamournailsspa.com",
    rating: 4.7,
    reviewCount: 253,
    services: ["Manicure", "Pedicure", "Gel Polish", "Acrylics", "Nail Art"],
    images: [
      "https://images.unsplash.com/photo-1610992015793-5e310c9d2e83?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1607779097040-813a50e31cfb?ixlib=rb-4.0.3"
    ],
    location: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "salon2",
    name: "Polished Perfect",
    description: "A premium nail studio specializing in gel designs and nail art with eco-friendly products.",
    address: "456 Fashion Street",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    phone: "(323) 555-6789",
    website: "https://polishedperfect.com",
    rating: 4.9,
    reviewCount: 187,
    services: ["Manicure", "Pedicure", "Gel Extensions", "Nail Art", "Paraffin Treatment"],
    images: [
      "https://images.unsplash.com/photo-1610992015796-3b554e3ab12a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3"
    ],
    location: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  {
    id: "salon3",
    name: "Chic Nails Boutique",
    description: "Trendy nail salon with the latest designs and techniques, perfect for the fashion-forward client.",
    address: "789 Trendy Avenue",
    city: "Chicago",
    state: "IL",
    zipCode: "60007",
    phone: "(312) 555-9012",
    email: "hello@chicnails.com",
    rating: 4.5,
    reviewCount: 142,
    services: ["Manicure", "Pedicure", "Dip Powder", "Chrome Nails", "3D Nail Art"],
    images: [
      "https://images.unsplash.com/photo-1604903363297-320cd8111085?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3"
    ],
    location: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
];

// Mock coupon data
export const couponData: Coupon[] = [
  {
    id: "coupon1",
    salonId: "salon1",
    salonName: "Glamour Nails & Spa",
    title: "30% Off First-Time Gel Manicure",
    description: "Enjoy 30% off your first gel manicure with us! Long-lasting shine and color for up to two weeks.",
    discount: "30% OFF",
    code: "FIRST30",
    expirationDate: "June 30, 2023",
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b2b9?ixlib=rb-4.0.3",
    location: "New York, NY"
  },
  {
    id: "coupon2",
    salonId: "salon2",
    salonName: "Polished Perfect",
    title: "Mani-Pedi Combo Special",
    description: "Get both a manicure and pedicure for just $50! Regular price $75. Perfect for a complete refresh.",
    discount: "$25 OFF",
    expirationDate: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1610992015782-9a8b42d5966e?ixlib=rb-4.0.3",
    location: "Los Angeles, CA"
  },
  {
    id: "coupon3",
    salonId: "salon3",
    salonName: "Chic Nails Boutique",
    title: "Buy One, Get One 50% Off",
    description: "Bring a friend and get 50% off the second service. Valid for any nail service of equal or lesser value.",
    discount: "BOGO 50%",
    code: "FRIEND50",
    expirationDate: "August 1, 2023",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3",
    location: "Chicago, IL"
  },
  {
    id: "coupon4",
    salonId: "salon1",
    salonName: "Glamour Nails & Spa",
    title: "Free Nail Art with Full Set",
    description: "Get complimentary nail art on two fingers when you book a full set of acrylics or gel extensions.",
    discount: "FREE ART",
    expirationDate: "July 30, 2023",
    image: "https://images.unsplash.com/photo-1632344549935-7103500b3153?ixlib=rb-4.0.3",
    location: "New York, NY"
  },
  {
    id: "coupon5",
    salonId: "salon2",
    salonName: "Polished Perfect",
    title: "15% Off for Students",
    description: "Students get 15% off any service with valid student ID. Perfect for looking your best without breaking the bank.",
    discount: "15% OFF",
    code: "STUDENT15",
    expirationDate: "September 1, 2023",
    image: "https://images.unsplash.com/photo-1604902396859-23971104edd8?ixlib=rb-4.0.3",
    location: "Los Angeles, CA"
  },
  {
    id: "coupon6",
    salonId: "salon3",
    salonName: "Chic Nails Boutique",
    title: "Weekday Special: $10 Off Pedicures",
    description: "Visit us Monday through Thursday and enjoy $10 off any pedicure service. Treat your feet for less!",
    discount: "$10 OFF",
    expirationDate: "August 31, 2023",
    image: "https://images.unsplash.com/photo-1608257896740-45f8f95a09c7?ixlib=rb-4.0.3",
    location: "Chicago, IL"
  },
];

export const getCouponById = (id: string): Coupon | undefined => {
  return couponData.find(coupon => coupon.id === id);
};

export const getSalonById = (id: string): Salon | undefined => {
  return salonData.find(salon => salon.id === id);
};

export const getSalonCoupons = (salonId: string): Coupon[] => {
  return couponData.filter(coupon => coupon.salonId === salonId);
};

export const searchCoupons = (location?: string, service?: string): Coupon[] => {
  if (!location && !service) return couponData;
  
  return couponData.filter(coupon => {
    const matchesLocation = !location || 
      coupon.location.toLowerCase().includes(location.toLowerCase());
    
    const salon = getSalonById(coupon.salonId);
    const matchesService = !service || 
      (salon?.services.some(s => s.toLowerCase().includes(service.toLowerCase())));
      
    return matchesLocation && matchesService;
  });
};
