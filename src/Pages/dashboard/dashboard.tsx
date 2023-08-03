import { useContext } from 'react';
import { Card } from '@mui/material';
import Layout from '../../Shared/layout/layout.tsx';
import SearchComponent from '../../Shared/search/search.tsx';
import { SearchContext } from '../../Contexts/search/index.ts';
import CardWrapper from './components/cardwrapper.tsx';

export default function Dashboard() {
  const { searchContext } = useContext(SearchContext);

  const handleSearch = () => {
    console.log(searchContext.input);
  };

  return (
    <Layout layoutdirection="column">
      <SearchComponent handleSearch={handleSearch} />
      <Card sx={{ padding: '1.4rem', flex: '1' }}>
        <CardWrapper />
      </Card>
    </Layout>
  );
}
