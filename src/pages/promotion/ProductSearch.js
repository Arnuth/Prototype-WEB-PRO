import React from "react";
import { Link } from "react-router-dom";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import PropTypes from 'prop-types';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import TextField from "@material-ui/core/TextField";
import { FiSearch } from "react-icons/fi";
import { IoTrash } from "react-icons/io5";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

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
    "&:hover": { backgroundColor: "var(--yellow)" },
  },
  footerBarInline: {
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
  },
}));


const ProductSearch = () => {
  const classes = useStyles();
  // checkAll
  const [state, setState] = React.useState({
    checkedMaster: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //Data Grid
  const [type, setType] = React.useState('Commodity');
  const [size, setSize] = React.useState(100);


  const { loading, data } = useDemoData({
    dataSet: type,
    rowLength: size,
    maxColumns: 15,
    // editable: true,
  });

  // const [pagination, setPagination] = React.useState({
  //   pagination: false,
  //   autoPageSize: false,
  //   pageSize: undefined,
  // });

  //scroll
  // const ref = React.useRef(null);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  //   alert(scrollOffset)
  // };

  // const btnLeft = document.getElementById('left-button');
  // const btnRight = document.getElementById('right-button');
  const dsTable = document.querySelector('.MuiDataGrid-window');

  const btnLeft = () => {
    scrollLeft(dsTable, -400, 100);   
    // alert("scrollLeft -300")
 }
 
  const btnRight = () => {
    scrollLeft(dsTable, 400, 100);   
    // alert("scrollLeft 300")
 }
     
 function scrollLeft(element, change, duration) {
     var start = element.scrollLeft,
         currentTime = 0,
         increment = 20;
         
         console.log(start)
         
     var animateScroll = function(){        
         currentTime += increment;
         var val = Math.easeInOutQuad(currentTime, start, change, duration);
         element.scrollLeft = val;
         if(currentTime < duration) {
             setTimeout(animateScroll, increment);
         }
     };
     animateScroll();
 }
 
 //t = current time
 //b = start value
 //c = change in value
 //d = duration
 Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
   if (t < 1) return c/2*t*t + b;
   t--;
   return -c/2 * (t*(t-2) - 1) + b;
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
          <Grid className="StickySrh" container spacing={2} alignItems="flex-start">
            <Grid item sm className={classes.mainSaearch}>
              <Grid
                container
                spacing={2}
                // className={state.checkedB === true ? 'enable' : 'disabled'}
              >
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="รหัสสินค้า" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="ชื่อสินค้า" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="ชื่อสินค้า" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="รหัส Supplier" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="ชื่อ Supplier" />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="รหัส Category" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="รหัส Sub Category" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="ชื่อ Category" />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-id" label="ชื่อ Sub Category" />
                </Grid>
                <Grid item xs={12} sm={3} md></Grid>
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
            <Box
              className="StickBarCtrl"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="p">ผลการค้นหาสินค้า</Typography>
              <Box display="flex">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedMaster}
                      onChange={handleChange}
                      name="checkedMaster"
                      color="default"
                    />
                  }
                  label="เลือกทั้งหมด"
                />
                <Button variant="text">
                  <IoTrash color="#f00" style={{marginRight:".3rem"}} />
                  ลบทั้งหมด
                </Button>
                <Box ml={2} id="left-button" 
                onClick={btnLeft}
                  // onClick={() => scroll(300)}
                >
                  <IoIosArrowDropleftCircle size="2rem" />
                </Box>
                <Box ml={1} id="right-button" 
                onClick={btnRight}
                  // onClick={() => scroll(-300)}
                >
                  <IoIosArrowDroprightCircle size="2rem" />
                </Box>
              </Box>
            </Box>

            <div id="dsTable" className={classes.root} 
            // style={{ height: '80vh', width: '100%' }}
            >
              {/* <SettingsPanel
                onApply={handleApplyClick}
                size={size}
                type={type}
                theme={getActiveTheme()}
              /> */}
              <DataGrid
                // className={isAntDesign ? antDesignClasses.root : undefined}
                autoHeight
                style={{overflowX: 'scroll'}}
                {...data}
                components={{
                  Toolbar: GridToolbar,
                }}
                // columns={data.columns.map((column) => ({
                //   ...column,
                //   filterable: false,
                // }))}
                loading={loading}
                checkboxSelection
                disableSelectionOnClick
                // ref={ref}
                // rowsPerPageOptions={[]}
                // {...pagination}
              />
            </div>
            

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
