import React from 'react';
import {Grid, Typography} from '@material-ui/core';

export default function Banner() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Typography variant={"h5"}>
            Business Bhutan
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <img src={require("../../../assets/Image/banner.png").default} alt=""/>
        </Grid>

      </Grid>
    </div>
  );
}
