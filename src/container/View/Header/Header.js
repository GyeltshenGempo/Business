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
import {useHistory, useLocation} from 'react-router-dom';
import '../Style.scss';
import SearchAppBar from '../../../shared/Search/Search';

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
  const {pathname} = useLocation();

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar className={classes.header}>
        <Grid container spacing={'2'}>
          <Grid item lg={2}>
            <Toolbar className='hand-cursor' onClick={() => history.push('/')}>
              <img src={require('../../../assets/Image/logo.png').default} alt=""/>
            </Toolbar>
          </Grid>
          <Grid item lg={6}>
            <Toolbar className='hand-cursor' onClick={() => history.push('/')}>
              <SearchAppBar/>
            </Toolbar>
          </Grid>
          <Grid item lg={1} className='hand-cursor myFont menu-hover' >
            <Toolbar onClick={() => history.push('/')} className={(pathname === '/' ? "active" : '')}>
              Home
            </Toolbar>
          </Grid>
          <Grid item lg={1} className='hand-cursor myFont menu-hover'>
            <Toolbar onClick={() => history.push('/about')} className={(pathname === '/about' ? "active" : '')}>
              About
            </Toolbar>
          </Grid>
          <Grid item lg={1} className='hand-cursor myFont menu-hover'>
            <Toolbar className={(pathname === '/tt' ? "active" : '')}>
              Services
            </Toolbar>
          </Grid>
          <Grid item lg={1} className='hand-cursor myFont menu-hover'>
            <Toolbar onClick={() => history.push('/sign-in')} className={(pathname === '/sign-in' ? "active" : '')}>
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
