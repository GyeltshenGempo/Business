import React from 'react';
import config from '../../../utils/Config';
import MessageParser from '../../../utils/MessageParser';
import ActionProvider from '../../../utils/ActionProvider';
import {Chatbot} from 'react-chatbot-kit';
import Grid from '@material-ui/core/Grid';

export const MyChatBot = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </Grid>
    </Grid>
  );
};
