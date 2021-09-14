import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140
  },
  featureImage: {
    objectFit: 'cover'
  },
  business:{
    fontSize:48,
    fontWeight:800,
    color: '#557DA1'
  }
}))