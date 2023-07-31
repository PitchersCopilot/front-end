export type SvgSizes = 'small' | 'medium' | 'large';

export type SvgProps = {
  size: SvgSizes;
};

export type SvgSize = {
  [k in SvgSizes]: number;
};
