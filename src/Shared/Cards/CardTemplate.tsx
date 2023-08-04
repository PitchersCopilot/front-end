import {
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import {
  Place as PlaceIcon,
  Hotel as HotelIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
} from '@mui/icons-material';
import TextLabel from './TextLabel.tsx';
import { CardTemplateProps } from './cards.types.ts';
import { StyledCard } from './card.styled.ts';

function CardTemplate({
  onClick,
  image,
  location,
  address,
  descriptor,
  price,
  amenities,
  yearsAgo,
}: CardTemplateProps) {
  const { bathrooms, bedrooms, meters } = amenities;

  return (
    <CardActionArea onClick={onClick}>
      <StyledCard sx={{ backgroundColor: 'primary.light' }}>
        <CardMedia component="img" image={image} sx={{ maxWidth: 150 }} />
        <CardContent>
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <TextLabel label={location} Icon={PlaceIcon} />
          </Box>
          <Typography gutterBottom variant="h6" component="div">
            {address}
          </Typography>
          <Typography gutterBottom variant="body1" color="text.disabled">
            {descriptor}
          </Typography>
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <TextLabel label={meters} Icon={SquareFootIcon} />
            <TextLabel label={bedrooms} Icon={HotelIcon} />
            <TextLabel label={bathrooms} Icon={BathtubIcon} />
          </Box>
        </CardContent>
        <Box
          sx={{
            paddingY: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '40%',
          }}
        >
          <Chip label={yearsAgo} variant="outlined" />
          <Typography variant="h4" color="secondary">
            USD {price}
          </Typography>
        </Box>
      </StyledCard>
    </CardActionArea>
  );
}

export default CardTemplate;
