import CardTemplate from '../../../Shared/Cards/CardTemplate.tsx';
import { Scrollable } from '../../../Shared/scrollable/scrollable.styled.ts';

export interface CardWrapperProps {
  properties: Property[] | undefined;
}

function CardWrapper({ properties }: CardWrapperProps) {
  if (!properties || properties.length === 0)
    return <h1> TODO: Component should be here </h1>;

  return (
    <Scrollable rowGap="2rem">
      {properties?.map(({ id, descriptor }) => (
        <CardTemplate
          key={id}
          id={id}
          image="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
          location="Bogotá, Colombia"
          address="Calle 168 No 8-40"
          descriptor={descriptor.slice(0, 200)}
          price={123.0}
          amenities={{
            bathrooms: '2 Bathrooms',
            bedrooms: '3 Bedrooms',
            meters: '120m',
          }}
          yearsAgo="20 years Ago"
        />
      ))}
    </Scrollable>
  );
}

export default CardWrapper;
