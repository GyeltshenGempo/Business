import React from 'react';
import {Button, Container, Grid, Typography} from '@material-ui/core';
import {useStyles} from './BannerStyle';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

export default function Banner() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.root} spacing={2}>
        <Grid item lg={6} className={classes.textSpacing}>
          <Typography className={classes.title} variant={'h3'}>
            Business Bhutan
          </Typography>
          <Typography className={classes.description} variant={'h6'}>
            There are some things money can't <br/> buy.
            For everything else, there's <br/> MasterCard.
          </Typography>
          <Button className={classes.visitButton} variant={'contained'}>
            <DirectionsWalkIcon/>
            Visit Us
          </Button>
        </Grid>
        <Grid item lg={6}>
          <img src={require('../../../assets/Image/banner.png').default} alt=""/>
        </Grid>
      </Grid>
    </Container>
  );
}
