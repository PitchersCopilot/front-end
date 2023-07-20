import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import CardTemplate from '../Shared/Cards/CardTemplate.tsx';

export default function App() {
  useEffect(() => {
    console.log('test');
  }, []);

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Typography variant="h1">Pitchers</Typography>
      <Typography variant="h1">click</Typography>
      <Typography variant="body1">click</Typography>
      <button type="button" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
      <CardTemplate />
    </>
  );
}
