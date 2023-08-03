/* eslint-disable import/prefer-default-export */
import { styled, Card } from '@mui/material';

export const StyledCard = styled(Card)({
  display: 'flex',
  paddingRight: '2rem',
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: 'auto',
  },
});
