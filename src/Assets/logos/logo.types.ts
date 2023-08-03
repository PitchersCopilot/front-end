export type SvgSizes = 'small' | 'medium' | 'large' | 'icon';

export type SvgProps = {
  size: SvgSizes;
};

export type Area = {
  width: number;
  height: number;
};

export type SvgSize = {
  [k in SvgSizes]: Area;
};
