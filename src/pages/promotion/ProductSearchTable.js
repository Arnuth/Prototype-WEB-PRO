import React, {useState} from "react";
import { Link } from "react-router-dom";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import PropTypes from "prop-types";

// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import Grid from "@material-ui/core/Grid";
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
  
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  textCounterResult: {
    color: "var(--primary)",
    fontWeight: 500,
    fontStyle: "normal",
    marginLeft: theme.spacing(2),
  }
}));

const ProductSearch = () => {
  const classes = useStyles();
  // checkAll
  // const [state, setState] = useState({
  //   checkedMaster: false,
  // });
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  

  //Test Table

function createData(ProID, Name, Bar1, Bar2, Bar3, SupID, SupName, CatID, CatName, SubCatCode, SubCatName, NR, Status) {
  return { ProID, Name, Bar1, Bar2, Bar3, SupID, SupName, CatID, CatName, SubCatCode, SubCatName, NR, Status };
}


const rows = [
  createData('000305', 'Cupcake', 3.7, 67, 4.3, 305, 3.7, 67, 4.3, 305, 3.7, 67, 4.3),
  createData('000452', 'Donut', 25.0, 51, 4.9, 452, 25.0, 51, 4.9, 452, 25.0, 51, 4.9),
  createData('000262', 'Eclair', 16.0, 24, 6.0, 262, 16.0, 24, 6.0, 262, 16.0, 24, 6.0),
  createData('000159', 'Frozen yoghurt', 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
  createData('000356', 'Gingerbread', 16.0, 49, 3.9, 356, 16.0, 49, 3.9, 356, 16.0, 49, 3.9),
  createData('000408', 'Honeycomb', 3.2, 87, 6.5, 408, 3.2, 87, 6.5, 408, 3.2, 87, 6.5),
  createData('000237', 'Ice cream sandwich', 9.0, 37, 4.3, 237, 9.0, 37, 4.3, 237, 9.0, 37, 4.3),
  createData('000375', 'Jelly Bean', 0.0, 94, 0.0, 375, 0.0, 94, 0.0, 375, 0.0, 94, 0.0),
  createData('000518', 'KitKat', 26.0, 65, 7.0, 518, 26.0, 65, 7.0, 518, 26.0, 65, 7.0),
  createData('000392', 'Lollipop', 0.2, 98, 0.0, 392, 0.2, 98, 0.0, 392, 0.2, 98, 0.0),
  createData('000318', 'Marshmallow', 0, 81, 2.0, 318, 0, 81, 2.0, 318, 0, 81, 2.0),
  createData('000360', 'Nougat', 19.0, 9, 37.0, 360, 19.0, 9, 37.0, 360, 19.0, 9, 37.0),
  createData('000437', 'Oreo', 18.0, 63, 4.0, 437, 18.0, 63, 4.0, 437, 18.0, 63, 4.0),
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'ProID', numeric: false, disablePadding: true, label: 'รหัสสินค้า', minWidth: 10, },
  { id: 'Name', numeric: false, disablePadding: false, label: 'ชื่อสินค้า', minWidth: 80, },
  { id: 'Bar1', numeric: false, disablePadding: false, label: 'บาร์โค้ด 1', checkHead: true },
  { id: 'Bar2', numeric: false, disablePadding: false, label: 'บาร์โค้ด 2', checkHead: true },
  { id: 'Bar3', numeric: false, disablePadding: false, label: 'บาร์โค้ด 3', checkHead: true },
  { id: 'SupID', numeric: true, disablePadding: false, label: 'รหัส Sup' },
  { id: 'SupName', numeric: true, disablePadding: false, label: 'ชื่อ Sup' },
  { id: 'CatID', numeric: true, disablePadding: false, label: 'รหัส Category' },
  { id: 'CatName', numeric: true, disablePadding: false, label: 'ชื่อ Category' },
  { id: 'SubCatCode', numeric: true, disablePadding: false, label: 'Sub Category Code' },
  { id: 'SubCatName', numeric: true, disablePadding: false, label: 'Sub Category Name' },
  { id: 'NR', numeric: true, disablePadding: false, label: 'N-N/R)' },
  { id: 'Status', numeric: true, disablePadding: false, label: 'สถานะสินค้า' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ maxWidth: 30 }} padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
            style={{padding:"0",opacity:"0"}}
          />
        </TableCell>
        <TableCell style={{ maxWidth: 30 }} padding="checkbox">
          No.
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ minWidth: headCell.minWidth }}
            // width="200px"
          >
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel> */}
            {headCell.checkHead ?
              <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
              style={{padding:"0"}}
            />
            : null
            }
            
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


  //state table

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  // const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.ProID);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, ProID) => {
    const selectedIndex = selected.indexOf(ProID);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, ProID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (ProID) => selected.indexOf(ProID) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // const btnLeft = document.getElementById('left-button');
  // const btnRight = document.getElementById('right-button');
  // const dsTable = document.querySelector(".MuiDataGrid-window");
  // const dsTable = document.querySelector(".MuiPaper-root");
 

  const dsTable = React.useRef(null);

  const btnLeft = () => {
    scrollLeft(dsTable, -dsTable.current.scrollWidth, 300);   
    document
          .querySelector("#left-button")
          .classList.add("disabled");
    document
          .querySelector("#right-button")
          .classList.remove("disabled");
 }
 
  const btnRight = () => {
    scrollLeft(dsTable, dsTable.current.scrollWidth, 300);
    document
          .querySelector("#left-button")
          .classList.remove("disabled");   
    document
          .querySelector("#right-button")
          .classList.add("disabled");
 }
     
 function scrollLeft(element, change, duration) {
     var start = element.current.scrollLeft,
         currentTime = 0,
         increment = 20;
         
         console.log(start)
         
     var animateScroll = function(){        
         currentTime += increment;
         var val = Math.easeInOutQuad(currentTime, start, change, duration);
         element.current.scrollLeft = val;
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

// const ref = React.useRef(null);

// const scroll = (scrollOffset) => {
//   ref.current.scrollLeft += scrollOffset;
// };


  React.useEffect(() => {
    // updateScroll()
    // const dsTable = document.querySelector('.MuiDataGrid-window');
  }, []);

  const [qProID, setQProID] = useState("")
  const [qName, setQName] = useState("")
  const [qBarcode, setQBarcode] = useState("")
  const [qSupID, setQSupID] = useState("")
  const [qSupName, setQSupName] = useState("")

  const [qCatID, setQCatID] = useState("")
  const [qSubCatID, setQSubCatID] = useState("")
  const [qCatName, setQCatName] = useState("")
  const [qSubCatName, setQSubCatName] = useState("")

  // console.log(qProID);

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

        <Box className="wrapSearch">
          <Grid
            className="StickySrh"
            container
            spacing={2}
            alignItems="flex-start"
          >
            <Grid item sm className={classes.mainSaearch}>
              <Grid
                container
                spacing={2}
                // className={state.checkedB === true ? 'enable' : 'disabled'}
              >
                <Grid item xs={12} sm={3} md>
                  <TextField 
                    id="search-id" 
                    label="รหัสสินค้า"
                    value={qProID}
                    onChange={(e) => {
                      setQProID(e.target.value);
                    }}
                   />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField 
                  id="search-name" 
                  label="ชื่อสินค้า"
                  value={qName}
                    onChange={(e) => {
                      setQName(e.target.value);
                    }}
                   />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField 
                  id="search-barcode" 
                  label="บาร์โค้ด" 
                  value={qBarcode}
                    onChange={(e) => {
                      setQBarcode(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-supID" label="รหัส Supplier"
                  value={qSupID}
                    onChange={(e) => {
                      setQSupID(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-supName" label="ชื่อ Supplier" 
                  value={qSupName}
                    onChange={(e) => {
                      setQSupName(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-catID" label="รหัส Category" 
                  value={qCatID}
                    onChange={(e) => {
                      setQCatID(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-subCatID" label="รหัส Sub Category" 
                  value={qSubCatID}
                    onChange={(e) => {
                      setQSubCatID(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-catName" label="ชื่อ Category"
                  value={qCatName}
                    onChange={(e) => {
                      setQCatName(e.target.value);
                    }} 
                  />
                </Grid>
                <Grid item xs={12} sm={3} md>
                  <TextField id="search-subCatName" label="ชื่อ Sub Category"
                  value={qSubCatName}
                    onChange={(e) => {
                      setQSubCatName(e.target.value);
                    }} 
                  />
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
              <Typography component="p">
                ผลการค้นหาสินค้า
                <Box component="em" className={classes.textCounterResult}>
                  เลือกสินค้าจำนวน 6 รายการ
                </Box>
              </Typography>
              <Box display="flex">
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedMaster}
                      // onChange={handleChange}
                      onChange={handleSelectAllClick}
                      name="checkedMaster"
                      color="default"
                    />
                  }
                  label="เลือกทั้งหมด"
                />
                <Button variant="text">
                  <IoTrash color="#f00" style={{ marginRight: ".3rem" }} />
                  ลบทั้งหมด
                </Button>
                <Box
                  ml={2}
                  id="left-button"
                  className="disabled"
                  onClick={btnLeft}
                  // onClick={() => scroll(-400)}
                >
                  <IoIosArrowDropleftCircle size="2rem" />
                </Box>
                <Box
                  ml={1}
                  id="right-button"
                  onClick={btnRight}
                  // onClick={() => scroll(400)}
                >
                  <IoIosArrowDroprightCircle size="2rem" />
                </Box>
              </Box>
            </Box>

            <div 
              id="dsTable"
              className="displayTable MuiDataGrid-window" 
              style={{overflowX:"hidden"}}
              ref={dsTable}
            >
                <div className="MuiDataGrid-dataContainer" style={{width:"150vw",}}>

                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer style={{overflow:"visible"}}>
                  <Table
                    stickyHeader
                    className={`tableContent ${classes.table}`}
                    style={{overflow:"hidden"}}
                    aria-labelledby="tableTitle"
                    // size={dense ? "small" : "medium"}
                    aria-label="sticky table"
                  >
                    <EnhancedTableHead
                      classes={classes}
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {stableSort(rows, getComparator(order, orderBy))
                        // .slice(
                        //   page * rowsPerPage,
                        //   page * rowsPerPage + rowsPerPage
                        // )
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.ProID);
                          const labelId = `enhanced-table-checkbox-${index}`;
                          
                          const labelBar1Id = `bar1-checkbox-${index}`;
                          const labelBar2Id = `bar2-checkbox-${index}`;
                          const labelBar3Id = `bar3-checkbox-${index}`;

                          return (
                            <TableRow
                              // hover
                              onClick={(event) => handleClick(event, row.ProID)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.ProID}
                              selected={isItemSelected}
                            >
                              <TableCell 
                              padding="checkbox"
                              style={{ maxWidth: 30 }}
                              align="center"
                              >
                                <Checkbox
                                  style={{padding:"0"}}
                                  checked={isItemSelected}
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </TableCell>
                              <TableCell 
                              padding="checkbox"
                              style={{ maxWidth: 30 }}
                              align="center"
                              >
                              {index+1}
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.ProID}
                              </TableCell>
                              <TableCell align="left">
                                {row.Name}
                              </TableCell>
                              <TableCell align="left">
                                <Checkbox
                                  style={{padding:"0"}}
                                  checked={isItemSelected}
                                  inputProps={{ "aria-labelledby": labelBar1Id }}
                                  />
                                <label 
                                htmlFor={labelBar1Id}
                                >{row.Bar1}</label>
                              </TableCell>
                              <TableCell align="left">
                                <Checkbox
                                  style={{padding:"0"}}
                                  checked={isItemSelected}
                                  inputProps={{ "aria-labelledby": labelBar2Id }}
                                  />
                                <label 
                                htmlFor={labelBar2Id}
                                >{row.Bar2}</label>
                              </TableCell>
                              <TableCell align="left">
                                <Checkbox
                                  style={{padding:"0"}}
                                  checked={isItemSelected}
                                  inputProps={{ "aria-labelledby": labelBar3Id }}
                                  />
                                <label 
                                htmlFor={labelBar3Id}
                                >{row.Bar3}</label>
                              </TableCell>

                              <TableCell align="right">
                                {row.SupID}
                              </TableCell>
                              <TableCell align="right">{row.SupName}</TableCell>
                              <TableCell align="right">{row.CatID}</TableCell>
                              <TableCell align="right">{row.CatName}</TableCell>

                              <TableCell align="right">
                                {row.SubCatCode}
                              </TableCell>
                              <TableCell align="right">{row.SubCatName}</TableCell>
                              <TableCell align="right">{row.NR}</TableCell>
                              <TableCell align="right">{row.Status}</TableCell>
                            </TableRow>
                          );
                        })}
                      {/* {emptyRows > 0 && (
                        <TableRow
                          style={{ height: (dense ? 33 : 53) * emptyRows }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )} */}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* <TablePagination
                  // rowsPerPageOptions={[5, 10, 25]}
                  rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}

                </div>

            </div>

            {/* <div
              id="dsTable"
              className="displayTable"
              // style={{ height: '80vh', width: '100%' }}
            >
              table
            </div> */}
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
