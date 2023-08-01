export interface ISearch {
  input: string;
}

export type TSearchContext = {
  searchContext: ISearch;
  setSearchContext: React.Dispatch<React.SetStateAction<ISearch>>;
};
