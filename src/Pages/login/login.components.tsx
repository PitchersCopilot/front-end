/* eslint-disable import/prefer-default-export */
import { styled, Card } from '@mui/material';

export const StyledForm = styled(Card)({
  borderRadius: '20px',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  '& .MuiCardContent-root': {
    height: '10rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },
});
