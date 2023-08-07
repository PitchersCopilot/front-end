import { CardHeader, CardContent, Typography } from '@mui/material';
import Loading from '../../../../Shared/loading.tsx';
import { Scrollable } from '../../../../Shared/scrollable/scrollable.styled.ts';
import { GrowTransition } from '../../../../Shared/transitions/index.ts';
import Layout from '../../../../Shared/layout/layout.styles.ts';
import SearchComponent from '../../../../Shared/search/index.ts';
import PitchersIcon from '../../../../Assets/pitchers.icon.tsx';
import { ChatMessageProps } from './chat.types.ts';
import ChatMessage from './chat.styled.ts';

export type ChatProps = {
  chatMessages: Array<ChatMessageProps>;
  handleSearch: () => Promise<void>;
};

export default function Chat({ chatMessages, handleSearch }: ChatProps) {
  return (
    <Layout
      layoutdirection="column"
      height="100%"
      sx={{ flex: '1', padding: '0' }}
    >
      <Scrollable flex="1" rowGap="1.3rem" sx={{ padding: '0' }}>
        {chatMessages.length !== 0 ? (
          chatMessages.map((message) => (
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
          ))
        ) : (
          <Typography variant="h4">Hello! How can I help you today?</Typography>
        )}
      </Scrollable>
      <SearchComponent handleSearch={handleSearch} />
    </Layout>
  );
}
