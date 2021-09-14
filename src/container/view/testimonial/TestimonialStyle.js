import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  testimonial: {
    fontSize: 36,
    fontWeight: 700,
    color: '#fff',
    marginBottom: '2em'
  },
  testimonialRadius: {
    borderRadius: 0,
    backgroundColor: '#E56934',
    marginTop: '7em',
    padding: '3em'
  },
  testimonialDescription: {
    color: '#FFFFFF',
    marginTop: '1em',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.2
  }
}))