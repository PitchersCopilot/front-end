import { useState } from 'react';
import { ParentComponent } from '../../vite-env';
import { TSearchContext } from './search-context.types.ts';
import { DefaultSearchState, SearchContext } from './search-context.context.ts';

export default function SearchContextComponent({ children }: ParentComponent) {
  const [searchContext, setSearchContext] =
    useState<TSearchContext>(DefaultSearchState);

  // TODO: Wrapp context inside a use memoo!

  return (
    <SearchContext.Provider value={{ searchContext, setSearchContext }}>
      {children}
    </SearchContext.Provider>
  );
}
