import { useContext, useState } from 'react';
import { Card } from '@mui/material';
import Layout from '../../Shared/layout/layout.styles.ts';
import SearchComponent from '../../Shared/search/search.tsx';
import { SearchContext } from '../../Contexts/search/index.ts';
import { HttpClient } from '../../Network/http-client.interface.ts';
import Loading from '../../Shared/loading.tsx';
import CardWrapper from './components/cardwrapper.tsx';

export default function Dashboard() {
  const { searchContext, setSearchContext } = useContext(SearchContext);
  const [properties, setProperties] = useState<Array<Property>>();
  const propertyHttpClient = new HttpClient<Property>();

  const handleSearch = async () => {
    setSearchContext({ ...searchContext, loading: true });
    const body: SearchBody = { query: searchContext.input };
    const response: Array<Property> = await propertyHttpClient.post(body);
    setProperties(response);
    console.log(response);
    setSearchContext({ ...searchContext, loading: false });
  };

  return (
    <Layout layoutdirection="column">
      <SearchComponent handleSearch={handleSearch} />
      <Card sx={{ flex: '1' }}>
        {searchContext.loading ? (
          <Loading />
        ) : (
          <CardWrapper properties={properties} />
        )}
      </Card>
    </Layout>
  );
}
