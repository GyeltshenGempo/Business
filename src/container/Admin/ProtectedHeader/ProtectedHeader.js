import * as React from 'react';
import './Header.scss'
import {useHistory} from "react-router-dom";
import {AppBar, Slide} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function HideOnScroll(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const ProtectedHeader = () => {
  const history = useHistory();
  return (
    <AppBar>
      <Toolbar className="barHeader">
        <Grid container spacing={2}>
          <Grid item lg={1} md={1} xs={1}>
            <Typography sx={{color: '#000'}}> Hamburger </Typography>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <img src={require('../../../assets/Image/logo.png').default} className="adminLogo hand-cursor" alt=""
                 onClick={() => history.push('/')}/>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
