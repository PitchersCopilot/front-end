type Amenity = {
  bathrooms: number | string;
  bedrooms: string;
  meters: number | string;
};

export interface CardTemplateProps {
  id: number | string;
  onClick?: () => void;
  image: string;
  location: string;
  address: string;
  description: string;
  price: number;
  amenities: Amenity;
  yearsAgo: string;
}
