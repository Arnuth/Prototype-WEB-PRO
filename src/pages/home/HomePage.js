import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  wrapContent: {
  },


}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" component="div" className={classes.wrapContent}>
      <Box>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
      Home Page
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        contents.
      </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
