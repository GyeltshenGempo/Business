import React from 'react';
import {Card, Container, Grid, Typography} from '@material-ui/core';
import {useStyles} from './TestimonialStyle';

export default function Testimonial() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.testimonialRadius}>
        <Typography className={classes.testimonial} variant={'h5'}>
          Testimonial
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <img src={require('../../../assets/Image/t1.png').default} alt=""/>
            <Typography className={classes.testimonialDescription}>
              Wix.com is a leading cloud-based <br/> development platform with millions of <br/> users worldwide. We
              make it easy for <br/> everyone to create a beautiful, professional web presence.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <img src={require('../../../assets/Image/t2.png').default} alt=""/>
            <Typography className={classes.testimonialDescription}>
              Wix.com is a leading cloud-based <br/> development platform with millions of <br/> users worldwide. We
              make it easy for <br/> everyone to create a beautiful, professional web presence.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <img src={require('../../../assets/Image/t3.png').default} alt=""/>
            <Typography className={classes.testimonialDescription}>
              Wix.com is a leading cloud-based <br/> development platform with millions of <br/> users worldwide. We
              make it easy for <br/> everyone to create a beautiful, professional web presence.
            </Typography>
          </Grid>

        </Grid>
      </Card>
    </div>
  );
}