import {
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  Stack,
} from '@mui/material';
import {
  Place as PlaceIcon,
  Hotel as HotelIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
} from '@mui/icons-material';
import TextLabel from './textlabel.tsx';
import { CardTemplateProps } from './cards.types.ts';
import { StyledCard } from './card.styled.ts';

function CardTemplate({
  onClick,
  image,
  location,
  address,
  descriptor,
  priceFormated,
  amenities,
  yearsAgo,
  layoutDirection = 'row',
}: CardTemplateProps) {
  const { bathrooms, bedrooms, meters } = amenities;
  const priceLayout = layoutDirection === 'column' ? 'row' : 'column';

  return (
    //
    <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
      <StyledCard
        layoutdirection={layoutDirection}
        sx={{ backgroundColor: 'primary.light' }}
      >
        <Box sx={{ flex: '1' }}>
          <CardMedia component="img" image={image} sx={{ height: '100%' }} />
        </Box>
        <CardContent sx={{ flex: '4' }}>
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <TextLabel label={location} Icon={PlaceIcon} />
          </Box>
          <Typography gutterBottom variant="h6" component="div">
            {address}
          </Typography>
          <Typography gutterBottom variant="body1" color="text.disabled">
            {descriptor}
          </Typography>
          <Stack direction="row" alignItems="center" gap="1rem">
            <TextLabel label={meters} Icon={SquareFootIcon} />
            <TextLabel label={bedrooms} Icon={HotelIcon} />
            <TextLabel label={bathrooms} Icon={BathtubIcon} />
          </Stack>
        </CardContent>
        <Stack
          direction={priceLayout}
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{
            padding: '1.5rem 2rem',
            width: 'auto',
          }}
        >
          <Chip label={yearsAgo} variant="outlined" />
          <Typography variant="h4" color="secondary">
            USD {priceFormated}
          </Typography>
        </Stack>
      </StyledCard>
    </CardActionArea>
  );
}

export default CardTemplate;
