import { Dispatch, SetStateAction } from 'react';

export interface ISearch {
  input: string;
}

export type TSearchContext = {
  searchContext: ISearch;
  setSearchContext: Dispatch<SetStateAction<ISearch>>;
};
