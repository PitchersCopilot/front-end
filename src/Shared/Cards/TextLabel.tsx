import React from 'react';
import Typography from '@mui/material/Typography';

interface TextLabelProps {
  Icon?: React.ElementType;
  label: string | undefined | number;
}

function TextLabel({ Icon, label }: TextLabelProps) {
  return (
    <Typography
      gutterBottom
      variant="body2"
      sx={{
        alignItems: 'center',
        display: 'flex',
        gap: '0.2rem',
      }}
      color="text.disabled"
    >
      {Icon && <Icon />}

      {label}
    </Typography>
  );
}

TextLabel.defaultProps = {
  Icon: undefined,
};
export default TextLabel;
