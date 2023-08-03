export interface ISearch {
  input: string;
  loading: boolean;
  error?: string;
}

export type TSearchContext = {
  searchContext: ISearch;
  setSearchContext: React.Dispatch<React.SetStateAction<ISearch>>;
};
