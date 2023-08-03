import { Stack } from '@mui/material';
import CardTemplate from '../../../Shared/Cards/CardTemplate.tsx';

function CardWrapper({ property }) {
  if (!property) return <h1> none</h1>;
  return (
    <Stack sx={{ gap: '2rem', maxHeight: '100%', overflow: 'auto' }}>
      <CardTemplate
        id="1"
        image="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
        location="Bogotá, Colombia"
        address="Calle 168 No 8-40"
        description="Property Description:\n\nThis stunning single-family home is located at 716 W 231st St, Bronx, NY 10463. With a spacious living area of 4233 square feet, this property offers plenty"
        price={123.0}
        amenities={{
          bathrooms: '2 Bathrooms',
          bedrooms: '3 Bedrooms',
          meters: '120m',
        }}
        yearsAgo="20 years Ago"
      />
    </Stack>
  );
}

export default CardWrapper;
