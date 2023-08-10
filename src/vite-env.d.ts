/// <reference types="vite/client" />

type ParentComponent = {
  children: React.ReactNode;
};

type SearchBody = {
  query: string;
};

type Amenity = {
  bathrooms: number | string;
  bedrooms: string;
  meters: number | string;
};

type Property = {
  id: number | string;
  image: string;
  location: string;
  address: string;
  descriptor: string;
  price: number;
  amenities: Amenity[];
  yearsAgo: string;
  pitch?: string;
};
