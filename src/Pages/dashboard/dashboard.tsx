import { useContext, useState } from 'react';
import { Stack, Card } from '@mui/material';
import Layout from '../../Shared/layout/layout.styles.ts';
import SearchComponent from '../../Shared/search/search.tsx';
import CardTemplate from '../../Shared/cards/CardTemplate.tsx';
import { SearchContext } from '../../Contexts/search/index.ts';
import { HttpClient } from '../../Network/http-client.interface.ts';
import Loading from '../../Shared/loading.tsx';

export default function Dashboard() {
  const { searchContext, setSearchContext } = useContext(SearchContext);
  const [properties, setProperties] = useState<Array<Property>>();
  const propertyHttpClient = new HttpClient<Property>();

  const handleSearch = async () => {
    setSearchContext({ ...searchContext, loading: true });
    const body: SearchBody = { query: searchContext.input };
    const response: Array<Property> = await propertyHttpClient.post(body);
    setProperties(response);
    setSearchContext({ ...searchContext, loading: false });
  };

  return (
    <Layout layoutdirection="column">
      <SearchComponent handleSearch={handleSearch} />
      <Card sx={{ flex: '1' }}>
        {searchContext.loading ? (
          <Loading />
        ) : (
          <Layout
            layoutdirection="column"
            sx={{ minHeight: '100%', maxHeight: 'inherit', overflow: 'auto' }}
          >
            {properties?.map((property) => (
              <CardTemplate
                key={property.id}
                id={property.id}
                image="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
                location="Bogotá, Colombia"
                address="Calle 168 No 8-40"
                description={property.descriptor.slice(0, 200)}
                price={123.0}
                amenities={{
                  bathrooms: '2 Bathrooms',
                  bedrooms: '3 Bedrooms',
                  meters: '120m',
                }}
                yearsAgo="20 years Ago"
              />
            ))}
          </Layout>
        )}
      </Card>
    </Layout>
  );
}
