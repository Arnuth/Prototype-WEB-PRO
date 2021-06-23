import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { yellow } from '@material-ui/core/colors';

// import { BsCalendar, BsThreeDots } from "react-icons/bs";
// import { FiEdit, FiSearch } from "react-icons/fi";
import "../../assets/css/Pro-Header.css";

const useStyles = makeStyles((theme) => ({
  wrapContent: {},
  // button: {
  //   marginRight: theme.spacing(3),
  // },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[200]),
    backgroundColor: yellow[200],
    "&:hover": {
      backgroundColor: yellow[500],
    },
  },
}))(Button);

const PromotionRecord = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" component="div" className={classes.wrapContent}>
        <Box className="head-line">
          <Typography component="h2" variant="h4">
            Inbox
          </Typography>
          <Typography component="p" variant="caption">
            CJ Promotion
          </Typography>
        </Box>
        <Box mt={2} style={{ minHeight: "150vh" }}>
          Contents
        </Box>
      </Container>
      <Box
        mt={3}
        position="sticky"
        bottom="0"
        display="flex"
        justifyContent="space-between"
        className="footer-bar"
      >
        <Box className="left">
          <Button
            variant="contained"
            color="default"
            className="btn-main"
            component={Link}
            to="/"
          >
            กลับ
          </Button>

          <ColorButton
            variant="contained"
            className="btn-main"
            // component={Link}
            // to="/"
            onClick={() => {
              alert("Save Draft");
            }}
          >
            บันทึกร่าง
          </ColorButton>
        </Box>
        <Box className="right">
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
            className="btn-main"
            component={Link}
            to="/promotion/create"
          >
            ต่อไป
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PromotionRecord;
