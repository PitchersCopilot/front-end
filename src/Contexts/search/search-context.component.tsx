import { useMemo, useState } from 'react';
import { ISearch, TSearchContext, SearchContext } from './index.ts';

export default function SearchContextComponent({ children }: ParentComponent) {
  const DefaultSearchState: ISearch = {
    input: '',
    loading: false,
  };
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
