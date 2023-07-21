import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes.tsx';

const CustomRouter = createBrowserRouter(CustomRoutes);

export default function Router() {
  return <RouterProvider router={CustomRouter} />;
}
