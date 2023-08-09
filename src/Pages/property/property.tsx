import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useCallback, useState, useEffect } from 'react';
import useSWR from 'swr';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Layout from '../../Shared/layout/layout.styles.ts';
import { Scrollable } from '../../Shared/scrollable/scrollable.styled.ts';
import { PitchersLogo } from '../../Assets/index.ts';
import CardTemplate from '../../Shared/cards/CardTemplate.tsx';
import StyledSection from './components/section.styled.ts';
import Chat from './components/chat/chat.tsx';
import { PropertyResponse } from '../dashboard/dashboard.tsx';
import { HttpClient, API } from '../../Network/index.ts';

export interface PropertyRequest {
  data: Property;
  isLoading: boolean;
  error: string;
}
const DefaultPropertyRequest = {
  data: {} as Property,
  isLoading: true,
  error: '',
};
export default function Property() {
  const navigation = useNavigate();
  const handleGoBack = () => navigation(-1);
  const { propertyId } = useParams<string>();
  const [property, setProperty] = useState<PropertyRequest>(
    DefaultPropertyRequest,
  );
  const propertyHttpClient = () =>
    new HttpClient<SearchBody, Property>(API.PROPERTY_API);

  /*   const { data, isLoading, error } = useSWR(API.PROPERTY_API, (url) =>
    propertyHttpClient().get(propertyId, {
      url,
    }),
  ); */
  useEffect(() => {
    propertyHttpClient().get(propertyId).then();
  }, [propertyId]);

  if (isLoading) return <div>loading...</div>;
  return (
    // TODO: Extract the header into a separate component

    <Layout layoutdirection="column" maxWidth="xl" sx={{ padding: '1rem 0' }}>
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
      <Stack
        direction={{ lg: 'row', sm: 'column' }}
        gap="1rem"
        flex="1"
        maxHeight="95%"
        paddingBottom="0"
      >
        <StyledSection>
          <CardTemplate
            key={propertyId}
            id={1}
            image={data.image}
            location={data.location}
            address={data.address}
            descriptor={'data?.descriptor'}
            price={'data?.price'}
            priceFormated="132123"
            amenities={['data?.amenities']}
            yearsAgo={'data?.yearsAgo'}
            layoutDirection="column"
            pitch=""
          />
        </StyledSection>
        <StyledSection>
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
                Iure est iste quibusdam eos cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laudantium earum sapiente, et
                error accusamus, inventore explicabo harum culpa doloremque,
                eveniet excepturi ab. Voluptate veritatis perspiciatis Placeat
                incidunt ipsum et cupiditate accusamus dolores exercitationem.
                Iure est iste quibusdam eos cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laudantium earum sapiente, et
                error accusamus, inventore explicabo harum culpa doloremque,
                eveniet excepturi ab. Voluptate veritatis perspiciatis Placeat
                incidunt ipsum et cupiditate accusamus dolores exercitationem.
                Iure est iste quibusdam eos cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laudantium earum sapiente, et
                error accusamus, inventore explicabo harum culpa doloremque,
                eveniet excepturi ab. Voluptate veritatis perspiciatis Placeat
                incidunt ipsum et cupiditate accusamus dolores exercitationem.
                Iure est iste quibusdam eos cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laudantium earum sapiente, et
                error accusamus, inventore explicabo harum culpa doloremque,
                eveniet excepturi ab. Voluptate veritatis perspiciatis
              </Typography>
            </Scrollable>
          </Layout>
        </StyledSection>
        <Chat />
      </Stack>
    </Layout>
  );
}
