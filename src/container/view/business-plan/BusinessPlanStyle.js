import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  businessPlan: {
    fontSize: 48,
    fontWeight: 700,
    color: '#557DA1',
    marginTop: '2em',
    marginBottom:'1em'
  },
  businessRadius: {
    borderRadius: 20,
    backgroundColor:'#F5F5F5'
  },
  planNumber: {
    fontSize: 24,
    fontWeight: 700,
    color:'#6C6C6C'
  },
  planDescription: {
    fontSize: 18,
    fontWeight: 400,
    color: '#4D4D4D'
  }
}));

