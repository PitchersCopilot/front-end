import { Suspense } from 'react';
import Router from '../Router/router.config.tsx';
import Loading from '../Shared/loading.tsx';

export default function App() {

  // Here will be all the logic for the entry point of the application
  // ie: Authentication logic and protected routes

  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
}
