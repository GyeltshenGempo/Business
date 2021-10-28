import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';

const config ={
  width: "400px",
  height: "500px",
  floating: true,
  botDelay: 2000,
  cache: true,
  enableMobileAutoFocus: true,
  hideBotAvatar: true,
  placeholder: 'Chat with me...'
};
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#557da1',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#557da1',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default function MyChatBot() {

  return (
    <div className='mt-3 mr-3' align='right'>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: 'intro',
              message: 'Do you agree to the Terms and Conditions?',
              trigger: 'intro-user',
            },
            {
              id: 'intro-user',
              options: [
                {value: 'y', label: 'Yes', trigger: 'yes-response'},
                {value: 'n', label: 'No', trigger: 'no-response'},
              ]
            },
            {
              id: 'yes-response',
              message: 'Great!',
              end: true,
            },
            {
              id: 'no-response',
              message: 'Sorry to hear that.',
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}
