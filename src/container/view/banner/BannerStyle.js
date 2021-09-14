import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '9em'
  },
  textSpacing: {
    marginTop: '7em',
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