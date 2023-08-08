import { useContext, ChangeEvent } from 'react';
import {
  IconButton,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SearchComponentProps } from './index.ts';
import { SearchContext, TSearchContext } from '../../Contexts/search/index.ts';

export default function SearchComponent({
  handleSearch,
  header,
}: SearchComponentProps) {
  const { searchContext, setSearchContext } =
    useContext<TSearchContext>(SearchContext);

  const inputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchContext({
      ...searchContext,
      error: undefined,
      input: event.target.value,
    });
  };

  const validateInput = async () => {
    if (!searchContext.input || searchContext.input.length === 0) {
      setSearchContext({ ...searchContext, error: "Search could't be empty" });
      return;
    }

    await handleSearch();
  };

  return (
    <Card>
      {header && header}
      <CardContent>
        <TextField
          fullWidth
          autoFocus
          disabled={!!searchContext.loading}
          error={!!searchContext.error}
          label={searchContext.error as string}
          variant="filled"
          color="secondary"
          onKeyDown={(e) => (e.key === 'Enter' ? validateInput() : undefined)}
          onChange={inputChange}
          value={searchContext.input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disabled={!!searchContext.loading}
                  onClick={validateInput}
                >
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
