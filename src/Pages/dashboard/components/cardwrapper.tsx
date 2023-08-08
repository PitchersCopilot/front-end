import { lazy, useContext } from 'react';
import CardTemplate from '../../../Shared/cards/cardtemplate.tsx';
import { Scrollable } from '../../../Shared/scrollable/scrollable.styled.ts';
import { TSearchContext } from '../../../Contexts/search/search-context.types.ts';
import { SearchContext } from '../../../Contexts/search/search-context.context.ts';
import Loading from '../../../Shared/loading.tsx';
import { GrowTransition } from '../../../Shared/transitions/index.ts';

const EmptyState = lazy(() => import('../../../Shared/search/empty-state.tsx'));

export interface CardWrapperProps {
  properties: Array<Property> | undefined;
  onCardClick: (property: Property) => unknown;
}

function CardWrapper({ properties, onCardClick }: CardWrapperProps) {
  const { searchContext } = useContext<TSearchContext>(SearchContext);

  if (searchContext.loading) return <Loading />;

  // No searches yet
  if (properties === undefined)
    return <EmptyState label="Nothing to show yet" />;

  // Empty search results
  if (properties.length === 0)
    return <EmptyState label="No properties found" />;

  return (
    // Property list
    <Scrollable rowGap="2rem">
      {properties?.map((p: Property, index) => (
        <GrowTransition timeout={index * 800}>
          <CardTemplate
            key={p.id}
            id={p.id}
            onClick={() => onCardClick(p)}
            image="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
            location="Bogotá, Colombia"
            address="Calle 168 No 8-40"
            descriptor={p.descriptor.slice(0, 200)}
            price={123453.0}
            amenities={{
              bathrooms: '2 Bathrooms',
              bedrooms: '3 Bedrooms',
              meters: '120m',
            }}
            yearsAgo="20 years Ago"
          />
        </GrowTransition>
      ))}
    </Scrollable>
  );
}

export default CardWrapper;
