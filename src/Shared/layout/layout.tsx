import StyledLayout from './layout.styles.ts';
import { ParentComponent } from '../../vite-env';

export default function Layout({ children }: ParentComponent) {
  return <StyledLayout container>{children}</StyledLayout>;
}
