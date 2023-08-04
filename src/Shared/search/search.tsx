import { useContext, ChangeEvent } from 'react';
import {
  IconButton,
  Card,
  CardHeader,
  CardContent,
  TextField,
  InputAdornment,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import Logo from '../../Assets/pitchers.logo.tsx';
import { SearchComponentProps } from './index.ts';
import {
  SearchContext,
  TSearchContext,
  DefaultSearchValues,
} from '../../Contexts/search/index.ts';

export default function SearchComponent({
  handleSearch,
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

  const clearInput = () => {
    setSearchContext(DefaultSearchValues);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Logo size="icon" />}
        // subheader={}
        action={
          <IconButton onClick={clearInput}>
            <CancelIcon color="action" fontSize="small" />
          </IconButton>
        }
      />
      <CardContent>
        <TextField
          fullWidth
          autoFocus
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
                <IconButton onClick={validateInput}>
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
