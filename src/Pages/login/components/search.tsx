import { MouseEvent } from 'react';
import {
  IconButton,
  Card,
  CardHeader,
  Typography,
  CardContent,
  TextField,
  InputAdornment,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';

export type SearchContext = {
  searchInput: string;
};

export default function SearchComponent() {
  // const searhContext = useContext<unknown>();

  const handleSearch = (event?: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Logo size="icon" />}
        subheader={
          <Typography variant="body1" color="secondary">
            Companion
          </Typography>
        }
        action={
          <IconButton>
            <CancelIcon color="action" fontSize="small" />
          </IconButton>
        }
      />
      <CardContent>
        <TextField
          fullWidth
          variant="filled"
          color="secondary"
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : undefined)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SendIcon color="secondary" fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
}
