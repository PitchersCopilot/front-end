import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Layout from '../../Shared/layout/layout.styles.ts';
import SearchComponent from '../../Shared/search/search.tsx';
import {
  DefaultSearchValues,
  SearchContext,
} from '../../Contexts/search/index.ts';
import CardWrapper from './components/cardwrapper.tsx';
import { HttpClient, API } from '../../Network/index.ts';
import { PitchersLogo } from '../../Assets/index.ts';

export type PropertyResponse<T> = {
  values: T;
};

export default function Dashboard() {
  const { searchContext, setSearchContext } = useContext(SearchContext);
  const [properties, setProperties] = useState<Array<Property>>();
  const propertyHttpClient = useCallback(
    () => new HttpClient<SearchBody, PropertyResponse<Array<Property>>>(),
    [],
  );
  const navigation = useNavigate();

  const handleSearch = async () => {
    setSearchContext({ ...searchContext, loading: true });
    try {
      const body: SearchBody = { query: searchContext.input };
      const { values }: PropertyResponse<Array<Property>> =
        await propertyHttpClient().post(body, {
          url: API.SEARCH_API,
        });
      setProperties(values);
      setSearchContext({ ...searchContext, loading: false });
    } catch (error: unknown) {
      setSearchContext({
        ...DefaultSearchValues,
        error: 'Something went wrong, try again',
      });
    }
  };

  const handleDetailedProperty = (property: Property) => {
    navigation(`/property/${property.id}`);
  };

  const clearInput = () => {
    setSearchContext(DefaultSearchValues);
  };

  return (
    <Layout layoutdirection="column" disableGutters>
      <SearchComponent
        header={
          <CardHeader
            avatar={<PitchersLogo size="icon" />}
            action={
              <IconButton onClick={clearInput}>
                <CancelIcon color="action" fontSize="small" />
              </IconButton>
            }
          />
        }
        handleSearch={handleSearch}
      />
      <Card sx={{ flex: '1' }}>
        <CardWrapper
          properties={properties}
          onCardClick={handleDetailedProperty}
        />
      </Card>
    </Layout>
  );
}
