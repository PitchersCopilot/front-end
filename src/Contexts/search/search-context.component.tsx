import { useMemo, useState } from 'react';
import { ParentComponent } from '../../vite-env';
import { ISearch, TSearchContext, SearchContext } from './index.ts';

export default function SearchContextComponent({ children }: ParentComponent) {
  const DefaultSearchState: ISearch = { input: '' };
  const [searchContext, setSearchContext] =
    useState<ISearch>(DefaultSearchState);

  const cachedSearchContext = useMemo<TSearchContext>(
    () => ({ searchContext, setSearchContext }),
    [searchContext],
  );

  return (
    <SearchContext.Provider value={cachedSearchContext}>
      {children}
    </SearchContext.Provider>
  );
}
