import { useParams } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import Layout from '../../Shared/layout/layout.styles.ts';

export default function Property() {
  const { propertyId } = useParams<string>();

  return (
    <Layout layoutdirection="row" maxWidth={false}>
      <Card sx={{ flex: '1' }}>
        <Typography variant="h1">Property</Typography>
      </Card>
      <Card sx={{ flex: '1' }}>
        <Typography variant="h1">description</Typography>
      </Card>
      <Card sx={{ flex: '1' }}>
        <Typography variant="h1">chat</Typography>
      </Card>
    </Layout>
  );
}
