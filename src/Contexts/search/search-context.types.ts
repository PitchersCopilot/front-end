export interface ISearch {
  input: string;
  error?: string;
}

export type TSearchContext = {
  searchContext: ISearch;
  setSearchContext: React.Dispatch<React.SetStateAction<ISearch>>;
};
