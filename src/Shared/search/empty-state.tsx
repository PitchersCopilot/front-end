import { Typography } from '@mui/material';
import { EmptyLogo } from '../../Assets/index.ts';
import Layout from '../layout/layout.styles.ts';
import GrowTransition from '../transitions/grow.transition.tsx';

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
      <GrowTransition>
        <EmptyLogo />
        <Typography variant="h4" color="primary.dark">
          {label}
        </Typography>
      </GrowTransition>
    </Layout>
  );
}
