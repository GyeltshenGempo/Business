import React from 'react';
import {Card, Container, Grid, Typography} from '@material-ui/core';
import {useStyles} from './BusinessPlanStyle';

export default function BusinessPlan() {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.businessPlan} variant={'h5'}>
        Business Plan
      </Typography>
      <Grid container spacing={1}>
        <Grid item lg={'6'} md={6} xs={12}>
          <img src={require('../../../assets/Image/p1.png').default} alt=""/>
        </Grid>
        <Grid item lg={'6'} md={6} xs={12}>
          <Card className={classes.businessRadius}>
            <Typography className={classes.planNumber} variant={'h6'}>
              Plan 1
            </Typography>
            <Typography className={classes.planDescription}>
              Operational Planning. “Operational plans are about how <br/> things need to happen,” motivational
              leadership speaker <br/>
              Mack Story said at LinkedIn. <br/>

              Operational Planning. “Operational plans are about how <br/> things need to happen,” motivational
              leadership speaker <br/>
              Mack Story said at LinkedIn. <br/> <br/>

              Operational Planning. “Operational plans are about how <br/> things need to happen,” motivational
              leadership speaker <br/>
              Mack Story said at LinkedIn.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item lg={'6'} md={6} xs={12}>
          <Card className={classes.businessRadius}>
            <Typography className={classes.planNumber} variant={'h6'}>
              Plan 2
            </Typography>
            <Typography className={classes.planDescription}>
              Operational Planning. “Operational plans are about how <br/> things need to happen,” motivational
              leadership speaker <br/>
              Mack Story said at LinkedIn. <br/>

              Operational Planning. “Operational plans are about how <br/> things need to happen,” motivational
              leadership speaker <br/>
              Mack Story said at LinkedIn. <br/> <br/>

              Operational Planning. “Operational plans are about how <br/> things need to happen,” motivational
              leadership speaker <br/>
              Mack Story said at LinkedIn.
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={'6'} md={6} xs={12}>
          <img src={require('../../../assets/Image/p2.png').default} alt=""/>
        </Grid>
      </Grid>
    </Container>
  )
    ;
}