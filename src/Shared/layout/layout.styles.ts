import { Container, styled } from '@mui/material';
import { LayoutStyleProps } from './layout.types.ts';

const Layout = styled(Container)((props: LayoutStyleProps) => ({
  padding: '2rem 0rem',

  height: '100vh',

  display: 'flex',
  flexFlow: `${props.layoutdirection} nowrap`,
<<<<<<< Updated upstream
  rowGap: '2rem',
  columnGap: '1rem',
=======
  gap: '2rem',
>>>>>>> Stashed changes

  alignItems: 'space-evenly',
  justifyContent: 'center',
}));

export default Layout;
