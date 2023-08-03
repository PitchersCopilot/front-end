import { Container, styled } from '@mui/material';
import { LayoutStyleProps } from './layout.types.ts';

const Layout = styled(Container)((props: LayoutStyleProps) => ({
  padding: '2rem 0rem',

  height: '100vh',

  display: 'flex',
  flexFlow: `${props.layoutdirection} nowrap`,
  gap: '2rem',

  alignItems: 'space-evenly',
  justifyContent: 'center',
}));

export default Layout;
