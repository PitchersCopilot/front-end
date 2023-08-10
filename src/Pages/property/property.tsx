import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Layout from '../../Shared/layout/layout.styles.ts';
import { Scrollable } from '../../Shared/scrollable/scrollable.styled.ts';
import { PitchersLogo } from '../../Assets/index.ts';
import CardTemplate from '../../Shared/Cards/CardTemplate.tsx';
import StyledSection from './components/section.styled.ts';
import Chat from './components/chat/chat.tsx';
import { HttpClient, API } from '../../Network/index.ts';
import Loading from '../../Shared/loading.tsx';

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
  const [propertyRequest, setPropertyRequest] = useState<PropertyRequest>(
    DefaultPropertyRequest,
  );
  const propertyHttpClient = useCallback(
    () => new HttpClient<string, Property>(API.PROPERTY_API),
    [],
  );

  useEffect(() => {
    propertyHttpClient()
      .getById(propertyId!)
      .then((response: Property) => {
        setPropertyRequest({
          ...propertyRequest,
          isLoading: false,
          data: response,
        });
      })
      .catch((err) => {
        setPropertyRequest({
          ...DefaultPropertyRequest,
          error: 'Something went wrong',
        });
        throw err;
      });
  }, [propertyId]);

  return (
    // TODO: Extract the header into a separate component
    <Layout layoutdirection="column" maxWidth="xl" sx={{ padding: '1rem 0' }}>
      {propertyRequest.isLoading ? (
        <Loading />
      ) : (
        <>
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
                id={propertyId!}
                image={propertyRequest.data.image}
                location={propertyRequest.data.location}
                address={propertyRequest.data.address}
                descriptor={propertyRequest.data.descriptor.slice(0, 350)}
                price={propertyRequest.data.price}
                amenities={propertyRequest.data.amenities}
                yearsAgo={propertyRequest.data.yearsAgo}
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
                  {propertyRequest.data.pitch?.split('\n').map((p) => (
                    <Typography padding="0">{p}</Typography>
                  ))}
                </Scrollable>
              </Layout>
            </StyledSection>
            <Chat />
          </Stack>
        </>
      )}
    </Layout>
  );
}
