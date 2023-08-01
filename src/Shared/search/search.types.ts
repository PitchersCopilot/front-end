import { ParentComponent } from '../../vite-env';

export interface SearchComponentProps extends Partial<ParentComponent> {
  handleSearch: () => void;
}
