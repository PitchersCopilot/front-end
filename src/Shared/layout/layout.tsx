import StyledLayout from './layout.styles.ts';
import { LayoutProps } from './layout.types.ts';

export default function Layout({ children, layoutdirection }: LayoutProps) {
  return (
    <StyledLayout layoutdirection={layoutdirection}>{children}</StyledLayout>
  );
}
