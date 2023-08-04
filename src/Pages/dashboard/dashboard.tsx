import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import Layout from '../../Shared/layout/layout.styles.ts';
import SearchComponent from '../../Shared/search/search.tsx';
import { SearchContext } from '../../Contexts/search/index.ts';
import { HttpClient } from '../../Network/http-client.interface.ts';
import Loading from '../../Shared/loading.tsx';
import CardWrapper from './components/cardwrapper.tsx';
import { API } from '../../Network/api.ts';

export type Dict<T> = { [k: string]: T };

export default function Dashboard() {
  const { searchContext, setSearchContext } = useContext(SearchContext);
  const [properties, setProperties] = useState<Array<Property>>();
  const propertyHttpClient = useCallback(
    () => new HttpClient<Array<Property>>(),
    [],
  );
  const navigation = useNavigate();

  const handleSearch = async () => {
    setSearchContext({ ...searchContext, loading: true });
    const body: SearchBody = { query: searchContext.input };
    const response: Array<Property> = await propertyHttpClient().post(body, {
      url: API.SEARCH_API,
    });
    setProperties(response);
    setSearchContext({ ...searchContext, loading: false });
  };

  const handleDetailedProperty = (property: Property) => {
    navigation(`/property/${property.id}`);
  };

  return (
    <Layout layoutdirection="column" disableGutters>
      <SearchComponent handleSearch={handleSearch} />
      <Card sx={{ flex: '1' }}>
        <CardWrapper
          properties={properties}
          onCardClick={handleDetailedProperty}
        />
      </Card>
    </Layout>
  );
}
