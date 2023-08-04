import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Chip,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Layout from '../../Shared/layout/layout.styles.ts';
import { Scrollable } from '../../Shared/scrollable/scrollable.styled.ts';
import { PitchersLogo } from '../../Assets/index.ts';

export const Section = styled(Card)({
  flex: '1',
});

export default function Property() {
  const { propertyId } = useParams<string>();

  const navigation = useNavigate();
  const handleGoBack = () => navigation(-1);

  return (
    // TODO: Extract the header into a separate component
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
          <PitchersLogo size="small" />
        </Box>
      </Stack>
      <Stack direction={{ lg: 'row', sm: 'column' }} gap="1rem" flex="1">
        <Section>
          <Typography variant="h1">{propertyId}</Typography>
        </Section>
        <Section>
          <Layout layoutdirection="column" height="100%">
            <Typography variant="h3">Selling pitch</Typography>
            <Stack
              direction="row"
              gap="0.5rem"
              maxWidth="100%"
              useFlexGap
              flexWrap="wrap"
            >
              <Chip label="House" size="small" />
              <Chip label="House" size="small" />
              <Chip label="House" size="small" />
              <Chip label="House" size="small" />
            </Stack>
            <Scrollable flex="1" sx={{ padding: '0' }}>
              <Typography padding="0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                eius facilis autem. Eveniet inventore perspiciatis hic. Placeat
                incidunt ipsum et cupiditate accusamus dolores exercitationem.
                Iure est iste quibusdam eos cumque?
              </Typography>
            </Scrollable>
          </Layout>
        </Section>
        <Section>
          <Typography variant="h1">chat</Typography>
        </Section>
      </Stack>
    </Layout>
  );
}
