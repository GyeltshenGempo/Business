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
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                title="Contemplative Reptile"
              >
                <img className={classes.featureImage} src={require('../../../assets/Image/b1.png').default} alt="pic1"/>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Group Work
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
