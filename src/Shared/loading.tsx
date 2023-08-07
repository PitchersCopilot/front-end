import { CircularProgress } from '@mui/material';
import Layout from './layout/layout.styles.ts';

export default function Loading() {
  return (
    <Layout
      layoutdirection="row"
      maxWidth={false}
      height="100%"
      sx={{ alignItems: 'center' }}
    >
      <CircularProgress size="3rem" />
    </Layout>
  );
}
