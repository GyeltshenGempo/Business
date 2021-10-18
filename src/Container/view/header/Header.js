import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {useStyles} from './HeaderStyle';
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

function ScrollTop(props) {
  const {children, window} = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar className={classes.header}>
        <Grid container spacing={'2'}>
          <Grid item lg={8}>
            <Toolbar className='hand-cursor' onClick={() => history.push('/')}>
              <img src={require('../../../assets/Image/logo.png').default} alt=""/>
            </Toolbar>
          </Grid>
          <Grid item lg={1}>
            <Toolbar className='hand-cursor menu-hover' onClick={() => history.push('/')}>
              Home
            </Toolbar>
          </Grid>
          <Grid item lg={1}>
            <Toolbar className='hand-cursor menu-hover' onClick={() => history.push('/about')}>
              About
            </Toolbar>
          </Grid>
          <Grid item lg={1}>
            <Toolbar className='hand-cursor menu-hover'>
              Services
            </Toolbar>
          </Grid>
          <Grid item lg={1}>
            <Toolbar className='hand-cursor menu-hover' onClick={() => history.push('/sign-in')}>
              Logout
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Toolbar id="back-to-top-anchor">

      </Toolbar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
