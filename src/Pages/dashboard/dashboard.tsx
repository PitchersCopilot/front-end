import { MouseEvent } from 'react';
import { Card } from '@mui/material';
import Layout from '../../Shared/layout/layout.tsx';
import SearchComponent from '../login/components/search.tsx';

export default function Dashboard() {
  // How could we type the search params?
  // This should be used
  // const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (event?: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  return (
    <Layout layoutdirection="column">
      <SearchComponent />
      <Card sx={{ flex: '1' }}>
        <h1> Dashboard page </h1>
      </Card>
    </Layout>
  );
}
