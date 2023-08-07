import { createContext } from 'react';
import { ISearch, TSearchContext } from './index.ts';

export const DefaultSearchValues: ISearch = {
  input: '',
  error: undefined,
  loading: false,
};

export const DefaultSearchContext: TSearchContext = {
  searchContext: DefaultSearchValues,
  setSearchContext(): void {
    throw new Error('Function not implemented.');
  },
};

export const SearchContext =
  createContext<TSearchContext>(DefaultSearchContext);
