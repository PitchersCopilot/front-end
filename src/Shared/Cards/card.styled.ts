/* eslint-disable import/prefer-default-export */
import { styled, Card } from '@mui/material';

export interface CardProps {
  layoutdirection: 'row' | 'column';
}

export const StyledCard = styled(Card)(({ layoutdirection }: CardProps) => ({
  display: 'flex',
  flexDirection: `${layoutdirection}`,
  height: '100%',
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: 'auto',
  },
}));
