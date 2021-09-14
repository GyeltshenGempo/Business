import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300
  },
  featureImage: {
   width: 296,
    height: 165,
    objectFit: 'cover'
  },
  business:{
    fontSize:48,
    fontWeight:800,
    color: '#557DA1',
    marginTop: '2em',
    marginBottom: '1em'
  },
  featureTitle: {
    color: '#557DA1',
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'left'
  },
  featureDescription: {
    color: "#4D4D4D",
    fontSize: 13,
    textAlign: 'left'
  }
}))
