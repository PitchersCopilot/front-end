import { useContext } from 'react';
import { Card } from '@mui/material';
import Layout from '../../Shared/layout/layout.tsx';
import SearchComponent from '../../Shared/search/search.tsx';
import { SearchContext, TSearchContext } from '../../Contexts/search/index.ts';

export default function Dashboard() {
  const { searchContext } = useContext<TSearchContext>(SearchContext);

  const handleSearch = () => {
    console.log(searchContext.input);
  };

  return (
    <Layout layoutdirection="column">
      <SearchComponent handleSearch={handleSearch} />
      <Card sx={{ flex: '1' }}>
        <h1> Dashboard page </h1>
      </Card>
    </Layout>
  );
}
