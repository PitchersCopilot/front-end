import { styled, Card } from '@mui/material';

const ChatMessage = styled(Card)({
  '& .MuiCardHeader-root': {
    paddingTop: '1rem',
    paddingBottom: '0',
  },
  '& .MuiCardContent-root': {
    paddingTop: '0',
    paddingBottom: '1rem',
  },
});

export default ChatMessage;
