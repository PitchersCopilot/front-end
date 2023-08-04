import { Typography } from '@mui/material';
import { EmptyLogo } from '../../Assets/index.ts';
import Layout from '../layout/layout.styles.ts';

export type EmptySatateProps = {
  label: string;
};

export default function EmptyState({ label }: EmptySatateProps) {
  return (
    <Layout
      layoutdirection="column"
      height="100%"
      sx={{ alignItems: 'center' }}
    >
      <EmptyLogo />
      <Typography variant="h4" color="primary.dark">
        {label}
      </Typography>
    </Layout>
  );
}
