import { createContext } from 'react';
import { ISearch, TSearchContext } from './index.ts';

export const DefaultSearchContext: TSearchContext = {
  searchContext: { input: '' } as ISearch,
  setSearchContext(): void {
    throw new Error('Function not implemented.');
  },
};

export const DefaultSearchValues: ISearch = {
  input: '',
  error: undefined,
  loading: false,
};

export const SearchContext =
  createContext<TSearchContext>(DefaultSearchContext);
