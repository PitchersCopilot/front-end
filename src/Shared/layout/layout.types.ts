export interface LayoutProps extends ParentComponent {
  layoutdirection: 'row' | 'column';
  height?: string;
}

export type LayoutStyleProps = Pick<LayoutProps, 'layoutdirection' | 'height'>;
