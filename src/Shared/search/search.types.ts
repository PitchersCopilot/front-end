export interface SearchComponentProps extends Partial<ParentComponent> {
  handleSearch: () => Promise<void>;
  header?: React.ReactNode;
}
