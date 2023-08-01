import { RouterProvider, createHashRouter } from 'react-router-dom';
import CustomRoutes from './routes.tsx';

const CustomRouter = createHashRouter(CustomRoutes);

export default function Router() {
  return <RouterProvider router={CustomRouter} />;
}
