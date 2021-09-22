import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import {useStyles} from './BusinessIdeaStyle';

export default function BusinessIdea() {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.business} variant={'h5'}>
        Business Idea
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={3} md={3} xs={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                title="Contemplative Reptile"
              >
                <img className={classes.featureImage} src={require('../../../assets/Image/b1.png').default} alt="pic1"/>
              </CardMedia>
              <CardContent>
                <Typography className={classes.featureTitle} gutterBottom variant="h5" component="h2">
                  Group Work
                </Typography>
                <Typography className={classes.featureDescription} variant="body2" color="textSecondary" component="p">
                  Just add our Simple Store and connect to PayPal or Stripe. Start making sales and getting paid,
                  immediately.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={3} md={12} xs={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                title="Contemplative Reptile"
              >
                <img className={classes.featureImage} src={require('../../../assets/Image/b2.png').default} alt="pic1"/>
              </CardMedia>
              <CardContent>
                <Typography className={classes.featureTitle} gutterBottom variant="h5" component="h2">
                  Group Work
                </Typography>
                <Typography className={classes.featureDescription} variant="body2" color="textSecondary" component="p">
                  Just add our Simple Store and connect to PayPal or Stripe. Start making sales and getting paid,
                  immediately.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={3} md={12} xs={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                title="Contemplative Reptile"
              >
                <img className={classes.featureImage} src={require('../../../assets/Image/b3.png').default} alt="pic1"/>
              </CardMedia>
              <CardContent>
                <Typography className={classes.featureTitle} gutterBottom variant="h5" component="h2">
                  Group Work
                </Typography>
                <Typography className={classes.featureDescription} variant="body2" color="textSecondary" component="p">
                  Just add our Simple Store and connect to PayPal or Stripe. Start making sales and getting paid,
                  immediately.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={3} md={12} xs={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                title="Contemplative Reptile"
              >
                <img className={classes.featureImage} src={require('../../../assets/Image/b4.png').default} alt="pic1"/>
              </CardMedia>
              <CardContent>
                <Typography className={classes.featureTitle} gutterBottom variant="h5" component="h2">
                  Group Work
                </Typography>
                <Typography className={classes.featureDescription} variant="body2" color="textSecondary" component="p">
                  Just add our Simple Store and connect to PayPal or Stripe. Start making sales and getting paid,
                  immediately.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
