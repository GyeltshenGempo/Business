import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding:'3em',
    backgroundColor: '#4D4D4D',
    borderRadius: 0
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: '#fff',
    marginBottom: '1em'
  },
  footerDescription: {
    color: '#fff'
  },
  socialIcon: {
    display:'flex',
    justifyContent: 'left',
    color: '#FFFFFF',
    marginLeft: '7em'

  }
}))