import React from "react";
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import { RiFileList3Line } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  wrapContent: {
  },


}));

const BlankPage = () => {
    const { id, title } = useParams()
    const classes = useStyles();
  return (
    <Container maxWidth="lg" component="div" className={classes.wrapContent}>
      <Box>
      <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
      {title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Page {id}<br/>
        Quickly build an effective pricing table for your potential customers with this layout.
        It&apos;s built with default Material-UI components with little customization.
      </Typography>
      </Box>
    </Container>
    
  );
};

export default BlankPage;
