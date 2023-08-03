export interface LayoutProps extends ParentComponent {
  layoutdirection: 'row' | 'column';
}

export type LayoutStyleProps = Pick<LayoutProps, 'layoutdirection'>;
