import React from 'react';
import {Card, Container, Grid, Typography} from '@material-ui/core';
import {useStyles} from './FooterStyle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Typography className={classes.footerTitle}>
                About Business
              </Typography>
              <Typography className={classes.footerDescription}>
                Wix.com is a leading cloud-based <br/> development platform with millions <br/> of users worldwide. We
                make it easy <br/>
                for everyone to create a beautiful, <br/> professional web presence.
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography className={classes.footerTitle}>
                Quick links
              </Typography>
              <div className={classes.socialIcon}>
                <FacebookIcon/>
                <Typography>
                  Facebook
                </Typography>
              </div>
              <div className={classes.socialIcon}>
                <TwitterIcon/>
                <Typography>
                  Twitter
                </Typography>
              </div>
              <div className={classes.socialIcon}>
                <InstagramIcon/>
                <Typography>
                  Instagram
                </Typography>
              </div>
              <div className={classes.socialIcon}>
                <LinkedInIcon/>
                <Typography>
                  LinkedIn
                </Typography>
              </div>
            </Grid>

          </Grid>
        </Container>
      </Card>
    </div>
  );
}
