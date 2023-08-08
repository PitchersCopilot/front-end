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
import CardTemplate from '../../Shared/cards/cardtemplate.tsx';

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
          <CardTemplate
            key={propertyId}
            id={1}
            image="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
            location="Bogotá, Colombia"
            address="Calle 168 No 8-40"
            descriptor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            price={123456.0}
            amenities={{
              bathrooms: '2 Bathrooms',
              bedrooms: '3 Bedrooms',
              meters: '120m',
            }}
            yearsAgo="20 years Ago"
            layoutDirection="column"
          />
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
