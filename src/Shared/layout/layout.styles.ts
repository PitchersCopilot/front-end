import { Container, styled } from '@mui/material';
import { LayoutStyleProps } from './layout.types.ts';

const StyledLayout = styled(Container)((props: LayoutStyleProps) => ({
  padding: '2rem 0rem',

  height: '100vh',

  display: 'flex',
  flexFlow: `${props.layoutdirection} nowrap`,
  rowGap: '2rem',
  columnGap: '1rem',

  alignItems: 'space-evenly',
  justifyContent: 'center',
}));

export default StyledLayout;
