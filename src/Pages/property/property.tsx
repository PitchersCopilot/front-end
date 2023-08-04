import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Layout from '../../Shared/layout/layout.styles.ts';
import Logo from '../../Assets/pitchers.logo.tsx';

export default function Property() {
  const { propertyId } = useParams<string>();

  const navigation = useNavigate();
  const handleGoBack = () => navigation(-1);

  return (
    <Layout
      layoutdirection="column"
      disableGutters
      sx={{
        alignItems: 'flex-start',
      }}
    >
      <Stack direction="row" width="100%">
        <Button
          variant="text"
          startIcon={<NavigateBeforeIcon />}
          onClick={handleGoBack}
        >
          search
        </Button>
        <Box
          flexGrow="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Logo size="small" />
        </Box>
      </Stack>
      <Stack direction={{ lg: 'row', sm: 'column' }} gap="1rem" flex="1">
        <Card sx={{ flex: '1' }}>
          <Typography variant="h1">{propertyId}</Typography>
        </Card>
        <Card sx={{ flex: '1' }}>
          <Typography variant="h1">Pitch</Typography>
        </Card>
        <Card sx={{ flex: '1' }}>
          <Typography variant="h1">chat</Typography>
        </Card>
      </Stack>
    </Layout>
  );
}
