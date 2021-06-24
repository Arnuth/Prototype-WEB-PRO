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
  wrapContentInline: {},
  footerBarInline: {
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
  }
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
      <Container maxWidth="xl" component="div" className={`wrapContent ${classes.wrapContentInline}`}>
        <Box className="head-line">
          <Typography component="h2" variant="h4">
            Create
          </Typography>
          <Typography component="p" variant="caption">
            กำหนด Header
          </Typography>
        </Box>
        <Box mt={2} style={{ minHeight: "150vh" }}>
          Contents
        </Box>
      </Container>
      <Box
        my={0}
        pt={2}
        py={2}
        pl={3}
        pr={3}
        position="sticky"
        bottom="0"
        display="flex"
        justifyContent="space-between"
        className={`footer-bar ${classes.footerBarInline}`}
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
            to="/promotion/createStep2"
            disabled // remove when Add Content
          >
            ต่อไป
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PromotionRecord;
