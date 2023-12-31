import { lazy, useContext } from 'react';
import CardTemplate from '../../../Shared/Cards/CardTemplate.tsx';
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

  if (properties === undefined)
    return <EmptyState label="Nothing to show yet" />;

  if (properties.length === 0)
    return <EmptyState label="No properties found" />;

  return (
    <Scrollable rowGap="1.3rem">
      {properties.map((p: Property, index) => (
        <GrowTransition timeout={index * 800} key={p.id}>
          <CardTemplate
            key={p.id}
            id={p.id}
            onClick={() => onCardClick(p)}
            image={p.image}
            location={p.location}
            address={p.address}
            descriptor={p.descriptor.slice(0, 300)}
            price={p.price}
            amenities={p.amenities}
            yearsAgo={p.yearsAgo}
          />
        </GrowTransition>
      ))}
    </Scrollable>
  );
}

export default CardWrapper;
