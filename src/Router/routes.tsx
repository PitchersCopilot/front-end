import { lazy } from 'react';
import { RouteObject, Route, createRoutesFromElements } from 'react-router-dom';

const Dashboard = lazy(() => import('../Pages/dashboard/dashboard.tsx'));
const Login = lazy(() => import('../Pages/login/login.tsx'));
const Property = lazy(() => import('../Pages/property/property.tsx'));

const CustomRoutes: RouteObject[] = createRoutesFromElements(
  <>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/property/:propertyId" element={<Property />} />
  </>,
);

export default CustomRoutes;
