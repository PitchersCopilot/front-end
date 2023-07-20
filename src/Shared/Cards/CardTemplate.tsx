import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import {
  Place as PlaceIcon,
  Hotel as HotelIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
} from '@mui/icons-material';
import TextLabel from './Components/TextLabel';

function CardTemplate() {
  const cardStyles = {
    maxWidth: 1440,
    display: 'flex',
    backgroundColor: '#232323',
    minHeight: 168,
    borderRadius: '0.5rem',
    paddingRight: '2rem',
  };

  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        image="https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg"
        alt="green iguana"
        sx={{ maxWidth: 150 }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          paddingY: '1.5rem',
          flexGrow: 1,
          width: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <TextLabel label="Colombia" Icon={PlaceIcon} />
          <TextLabel label="Usaquen" />
        </Box>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="text.primary"
        >
          12 Sunderland Ave, Oxford OX2 8DX
        </Typography>
        <Typography gutterBottom variant="body1" color="text.disabled">
          ntroducing a modern and stylish apartment in the heart of Bogots
          vibrant Chapinero neighborhood! This well-designed 2-bedroom,
          2-bathroom apartment offers a comfortable and contemporary living
          space spanning 60 square meters.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <TextLabel label="92m" Icon={SquareFootIcon} />
          <TextLabel label="3 bedrooms" Icon={HotelIcon} />
          <TextLabel label="3 bathroom" Icon={BathtubIcon} />
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
        <Chip label="25 years ago" variant="outlined" />
        <Typography variant="h4" color="secondary">
          USD 119,898
        </Typography>
      </Box>
    </Card>
  );
}

export default CardTemplate;
