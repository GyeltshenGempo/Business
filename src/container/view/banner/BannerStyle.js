import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '9em'
  },
  bannerImg: {
    [theme.breakpoints.down('xs')]: {
      width: 400,
      marginTop: '20%'
    }
  },
  textSpacing: {
    marginTop: '7em',
    [theme.breakpoints.down('xs')]: {}
  },
  title: {
    color: '#557DA1',
    fontWeight: 800,
    fontSize: 48
  },
  description: {
    color: '#4D4D4D',
    marginTop: '2em',
    fontWeight: 400,
    fontSize: 18
  },
  visitButton: {
    marginTop: '1em',
    color: '#FFFFFF',
    backgroundColor: '#E56934',
    borderRadius: 25,
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#E56934',
    }
  }
}));