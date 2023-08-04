import { Container, styled } from '@mui/material';
import { LayoutStyleProps } from './layout.types.ts';

const Layout = styled(Container)((props: LayoutStyleProps) => ({
  padding: '2rem 0rem',

  height: `${props.height || '100vh'}`,

  display: 'flex',
  flexFlow: `${props.layoutdirection}`,
  gap: '2rem',

  alignItems: 'space-evenly',
  justifyContent: 'center',
}));

export default Layout;
