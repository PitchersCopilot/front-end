import { useContext, ChangeEvent } from 'react';
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
import Logo from '../../Assets/logos/logo.tsx';
import { SearchComponentProps } from './index.ts';
import { SearchContext } from '../../Contexts/search/index.ts';

export default function SearchComponent({
  handleSearch,
}: SearchComponentProps) {
  const { setSearchContext } = useContext(SearchContext);

  const inputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchContext({ input: event.target.value });
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
          autoFocus
          variant="filled"
          color="secondary"
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : undefined)}
          onChange={inputChange}
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
