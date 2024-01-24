export type Property = {
  id: number;
  type: "sale" | "rent";
  inWishlist: boolean;
  inCart: boolean;
  name: string;
  bedrooms: number;
  bathrooms: number;
  address: string;
  yearBuilt: number;
  size: number;
  isFeatured: false;
  images: string[];
  description: string;
  interiorDetails: string[];
  outdoorDetails: string[];
  utilities: string[];
  otherFeatures: string[];
  price: number;
  isAvailable: true;
  floors: number;
  parkingSpaces: number;
};

export type Post = {
  id: number;
  image: string;
  title: string;
  description: string;
  createdAt: string;
};
