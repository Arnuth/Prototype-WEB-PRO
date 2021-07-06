import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from "@material-ui/core/TextField";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from "react-icons/io";

import "../../assets/css/Pro-Search.css";

const useStyles = makeStyles((theme) => ({
  wrapContentInline: {},
  breadCrumbs: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-6),
    marginRight: theme.spacing(-6),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    backgroundColor: "#f0f3f7",
    "& a": {
      color: "#00A14A",
      textDecoration: "none",
    },
    "& p": {
      color: "#000",
      fontWeight: "bold",
    },
  },
  mainSaearch: {
    position: "relative",
    "& .MuiFormControl-root": {
        width: "100%",
      },
  },
  btnSaearch: {
    borderRadius: "5rem",
    marginTop: theme.spacing(2),
    backgroundColor: "var(--yellow)",
    minWidth: "148px",
    boxShadow: "none",
    "&:hover": {backgroundColor: "var(--yellow)",}
  },
  footerBarInline: {
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
  },
}));

const ProductSearch = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedMaster: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Container
        maxWidth="xl"
        component="div"
        className={`wrapContent ${classes.wrapContentInline}`}
      >
        <Box className="head-line">
          <Typography component="h2" variant="h4">
            Search
          </Typography>
          <Typography component="p" variant="caption">
            ค้นหาสินค้า
          </Typography>
        </Box>

        <Box mr={2} className="wrapSearch">
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item sm className={classes.mainSaearch}>
                <Grid container 
                spacing={2} 
                // className={state.checkedB === true ? 'enable' : 'disabled'}
                >
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="รหัสสินค้า" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="ชื่อสินค้า" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="ชื่อสินค้า" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="รหัส Supplier" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="ชื่อ Supplier" />
                    </Grid>
                </Grid>

                <Grid container 
                spacing={2} 
                >
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="รหัส Category" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="รหัส Sub Category" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="ชื่อ Category" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg>
                    <TextField id="search-id" label="ชื่อ Sub Category" />
                    </Grid>
                    <Grid item xs={12} sm={3} md={4} lg></Grid>

                </Grid>
            </Grid>
            <Grid item>
              <Button className={classes.btnSaearch} variant="contained">
                <FiSearch size="1.2rem" style={{ marginRight: ".5rem" }} />
                ค้นหา
              </Button>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="p">
                ผลการค้นหาสินค้า
                </Typography>
                <Box display="flex">
                    <FormControlLabel
                        control={
                            <Checkbox checked={state.checkedMaster} 
                            onChange={handleChange} 
                            name="checkedMaster"
                            color="default"
                            />
                        }
                        label="เลือกทั้งหมด"
                    />
                    <Button variant="text">
                        ลบทั้งหมด
                    </Button>
                    <Box id="prev-table">
                        <IoIosArrowDropleftCircle size="2rem" />
                    </Box>
                    <Box id="Next-table">
                        <IoIosArrowDroprightCircle size="2rem" />
                    </Box>
                </Box>
            </Box>
          </Box>
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
            to="/promotion/create"
          >
            กลับ
          </Button>
        </Box>
        <Box className="right">
          <Button
            variant="contained"
            color="primary"
            className="btn-main"
            component={Link}
            to="/promotion/Step3"
            // disabled={alignment !== "" ? false : true}
          >
            เพิ่มสินค้า
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductSearch;
