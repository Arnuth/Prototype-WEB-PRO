import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  wrapContent: {
  },


}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" component="div" className={classes.wrapContent}>
      <Box mt={5}>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
      Dashboard
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Welcome Username<br/>
        Quickly build an effective pricing table for your potential customers with this layout.
        It&apos;s built with default Material-UI components with little customization.
      </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;
