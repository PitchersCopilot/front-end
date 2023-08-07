import { useCallback, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Layout from '../../Shared/layout/layout.styles.ts';
import { Scrollable } from '../../Shared/scrollable/scrollable.styled.ts';
import { PitchersLogo } from '../../Assets/index.ts';
import StyledSection from './components/section.styled.ts';
import {
  TSearchContext,
  SearchContext,
  DefaultSearchValues,
} from '../../Contexts/search/index.ts';
import { API, HttpClient } from '../../Network/index.ts';
import {
  ChatMessageProps,
  QueryMessage,
  ChatResponse,
  Message,
} from './components/chat/chat.types.ts';
import Chat from './components/chat/chat.tsx';

export default function Property() {
  const { propertyId } = useParams<string>();
  const { searchContext, setSearchContext } =
    useContext<TSearchContext>(SearchContext);
  const [chatMessages, setChatMessages] = useState<ChatMessageProps[]>([]);
  const chatHttpClient = useCallback(
    () => new HttpClient<QueryMessage, ChatResponse>(API.CHAT_API),
    [],
  );

  const navigation = useNavigate();
  const handleGoBack = () => navigation(-1);

  const handleSearch = async () => {
    setSearchContext({ ...searchContext, loading: true });
    const tempChatMessages: ChatMessageProps[] = [...chatMessages].concat([
      new Message({ message: searchContext.input }),
      new Message({ loading: true, timeout: 1000, isResponse: true }),
    ]);
    setChatMessages(tempChatMessages);
    try {
      const searchBody: QueryMessage = {
        message: searchContext.input,
      };
      const { response }: ChatResponse = await chatHttpClient().post(
        searchBody,
        {
          url: '2c055ae9-8b30-4484-b1b6-283055be1242' || propertyId,
        },
      );
      const tempChat = [...tempChatMessages.slice(0, -1)].concat([
        new Message({ message: response, isResponse: true }),
      ]);
      setChatMessages(tempChat);
    } catch (error) {
      setSearchContext({
        ...DefaultSearchValues,
        error: 'Something went wrong, try again',
      });
      return;
    }
    setSearchContext(DefaultSearchValues);
  };

  return (
    // TODO: Extract the header into a separate component
    <Layout layoutdirection="column" disableGutters>
      <Stack direction="row" width="100%">
        <Button
          variant="text"
          startIcon={<NavigateBeforeIcon />}
          onClick={handleGoBack}
        >
          search
        </Button>
        <Box
          flexGrow="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <PitchersLogo size="small" />
        </Box>
      </Stack>
      <Stack direction={{ lg: 'row', sm: 'column' }} gap="1rem" flex="1">
        <StyledSection>
          <Typography variant="h1">{propertyId}</Typography>
        </StyledSection>
        <StyledSection>
          <Layout layoutdirection="column" height="100%">
            <Typography variant="h3">Selling pitch</Typography>
            <Stack
              direction="row"
              gap="0.5rem"
              maxWidth="100%"
              useFlexGap
              flexWrap="wrap"
            >
              <Chip label="House" size="small" />
              <Chip label="House" size="small" />
              <Chip label="House" size="small" />
              <Chip label="House" size="small" />
            </Stack>
            <Scrollable flex="1" sx={{ padding: '0' }}>
              {/* TODO: This scrolable component is not working as expected */}
              <Typography padding="0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                eius facilis autem. Eveniet inventore perspiciatis hic. Placeat
                incidunt ipsum et cupiditate accusamus dolores exercitationem.
                Iure est iste quibusdam eos cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laudantium earum sapiente, et
                error accusamus, inventore explicabo harum culpa doloremque,
                eveniet excepturi ab. Voluptate veritatis perspiciatis
              </Typography>
            </Scrollable>
          </Layout>
        </StyledSection>
        <Chat chatMessages={chatMessages} handleSearch={handleSearch} />
      </Stack>
    </Layout>
  );
}
