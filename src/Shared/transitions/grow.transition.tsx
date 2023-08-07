/* eslint-disable react/destructuring-assignment */
import { Box, Grow, GrowProps } from '@mui/material';

export type GrowTransitionProps = { children: React.ReactNode } & Omit<
  GrowProps,
  'children'
>;

export default function GrowTransition(props: GrowTransitionProps) {
  return (
    <Grow in timeout={props.timeout || 'auto'}>
      <Box>{props.children}</Box>
    </Grow>
  );
}
