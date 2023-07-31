import { useParams } from 'react-router-dom';

export default function Property() {
  const { propertyId } = useParams<string>();

  return <h1>Property Page: {propertyId}</h1>;
}
