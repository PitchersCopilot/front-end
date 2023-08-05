import { Container, styled } from '@mui/material';
import { LayoutStyleProps } from './layout.types.ts';

const Layout = styled(Container)((props: LayoutStyleProps) => ({
  padding: '1.2rem 0rem',

  height: `${props.height || '100vh'}`,

  display: 'flex',
  flexFlow: `${props.layoutdirection}`,
  gap: '1rem',

  alignItems: 'space-evenly',
  justifyContent: 'center',
}));

export default Layout;
