export type SvgSizes = 'small' | 'medium' | 'large' | 'icon';

export type SvgProps = {
  size: SvgSizes;
};

export type SvgSize = {
  [k in SvgSizes]: number;
};
