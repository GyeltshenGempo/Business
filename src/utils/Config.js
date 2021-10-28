import {createChatBotMessage} from 'react-chatbot-kit';
import DogPicture from './DogPicture';

// export default {
//   API_URL: process.env['REACT_APP_API_URL']
// };

const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
