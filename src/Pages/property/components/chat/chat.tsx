import { useCallback, useContext, useState } from 'react';
import { CardHeader, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Loading from '../../../../Shared/loading.tsx';
import { Scrollable } from '../../../../Shared/scrollable/scrollable.styled.ts';
import { GrowTransition } from '../../../../Shared/transitions/index.ts';
import Layout from '../../../../Shared/layout/layout.styles.ts';
import SearchComponent from '../../../../Shared/search/index.ts';
import PitchersIcon from '../../../../Assets/pitchers.icon.tsx';
import {
  ChatMessageProps,
  ChatResponse,
  Message,
  QueryMessage,
} from './chat.types.ts';
import ChatMessage from './chat.styled.ts';
import {
  DefaultSearchValues,
  SearchContext,
  TSearchContext,
} from '../../../../Contexts/search/index.ts';
import { API, HttpClient } from '../../../../Network/index.ts';

export const DefaultChatMessages: Array<ChatMessageProps> = [
  new Message({
    message: 'Hello there, how can I assist you today?',
    isResponse: true,
    timeout: 1000,
  }),
];

export default function Chat() {
  const { propertyId } = useParams<string>();
  const { searchContext, setSearchContext } =
    useContext<TSearchContext>(SearchContext);
  const [chatMessages, setChatMessages] =
    useState<ChatMessageProps[]>(DefaultChatMessages);
  const chatHttpClient = useCallback(
    () => new HttpClient<QueryMessage, ChatResponse>(API.CHAT_API),
    [],
  );

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
    <Layout
      layoutdirection="column"
      disableGutters
      height="100%"
      sx={{ flex: '1', padding: '0' }}
    >
      <Scrollable flex="1" rowGap="1.3rem" sx={{ padding: '0' }}>
        {chatMessages.map((message) => (
          <GrowTransition timeout={message.timeout} key={message.id}>
            <ChatMessage key={message.id}>
              <CardHeader
                avatar={message.isResponse && <PitchersIcon size="icon" />}
                subheader={message.time}
              />
              <CardContent>
                {message.loading ? (
                  <Loading />
                ) : (
                  <Typography>{message.message}</Typography>
                )}
              </CardContent>
            </ChatMessage>
          </GrowTransition>
        ))}
      </Scrollable>
      <SearchComponent handleSearch={handleSearch} />
    </Layout>
  );
}
