import {makeStyles} from '@material-ui/core';

export const useStyles=makeStyles(theme=>({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  header: {
    backgroundColor: "#557da1",
    boxShadow: 'none'
  }
}))
