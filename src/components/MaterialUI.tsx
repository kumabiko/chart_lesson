import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography color="secondary" variant="h1" gutterBottom>
        Hello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}> xs=12 </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}> xs=6 </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}> xs=6 </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}> xs=6 </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}> xs=6 </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}> xs=6 </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}> xs=6 </Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            Test
          </Grid>
        </Grid>
        <Grid item xs={12} justify="space-around" container>
          <Grid item xs={3}>
            Tailwind doesn't include pre-designed button styles out of the box,
            but they're easy to build using existing utilities. Here are a few
            examples to help you get an idea of how to build components like
            this using Tailwind.
          </Grid>
          <Grid item xs={3}>
            Tailwind doesn't include pre-designed button styles out of the box,
            but they're easy to build using existing utilities. Here are a few
            examples to help you get an idea of how to build components like
            this using Tailwind.
          </Grid>
          <Grid item xs={3}>
            Tailwind doesn't include pre-designed button styles out of the box,
            but they're easy to build using existing utilities. Here are a few
            examples to help you get an idea of how to build components like
            this using Tailwind.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
