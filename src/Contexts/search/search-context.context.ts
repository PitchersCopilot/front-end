import { createContext } from 'react';
import { TSearchContext, ISearch } from './search-context.types.ts';

export const DefaultSearchState: TSearchContext = {
  searchContext: { input: '' } as ISearch,
  setSearchContext: () => {},
};

export const SearchContext = createContext<TSearchContext>(DefaultSearchState);
