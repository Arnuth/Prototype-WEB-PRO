import React, {useState} from "react";
import { Link } from "react-router-dom";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import PropTypes from "prop-types";

// import clsx from 'clsx';
import clsx from 'clsx';
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
import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import TextField from "@material-ui/core/TextField";
import { RiErrorWarningFill, RiCloseCircleFill, RiMessage3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoTrash } from "react-icons/io5";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  textCounterResult: {
    color: "var(--primary)",
    fontWeight: 500,
    fontStyle: "normal",
    marginLeft: theme.spacing(2),
  },
  checkBox: {
    color:"#fff",
    '&$checked': {
      color: "#5FA900",
    },
  },
  modal: {
    color: "var(--black)",
    textAlign: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "& .MuiPaper-root": { borderRadius: "12px", },
    "& .MuiDialogTitle-root": { 
      backgroundColor: "var(--primary)", 
      color:"#fff",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      "& .MuiIconButton-root": { 
        position: "absolute",
        top:0,
        right:0
      }
    },
    "& .MuiDialogContent-root": {
      width:"calc(50vh - 100px)",
      minHeight:"calc(50vh - 100px)",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center", 
      color:"#222",
      "& .MuiTypography-root": { color: "#222"}
    }
  },
  warning: {
    "& .MuiDialogTitle-root": { 
      backgroundColor: "#FCB017", 
      color:"#fff",
    }
  },
  error: {
    "& .MuiDialogTitle-root": { 
      backgroundColor: "#C93D3D", 
      color:"#fff",
    }
  },
  err404: {
    "& .MuiDialogTitle-root": { 
      backgroundColor: "#C93D3D", 
      color:"#fff",
    }
  },
  circularColor: {
    color: "var(--primary-lite)",
    marginBottom: "1.8rem",
  },

}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  createData('20000573', '108shop1000g', '8850002022225 / PC / 1', '08850002022225 / CAR / 12', 0, '0000100184', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', '90100', '108shop', '90103', '', 67, 'A'),
  createData('20000572', '108shop3500g', '8850002022232 / PC / 1', '08850002022232 / CAR / 4', 0, '0000100452', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', '90100', '108shop', '90103', '', 51, 'CP'),
  createData('20002829', 'Ecกูนน์เทปRG M16lair', '8858947811003 / PAC / 1', '18858947811000 / CAR / 8', 0, '0000100951', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', 'J0900', 'กูนน์', 'J0910', 'กูนน์เทป', 24, 'A'),
  createData('20013022', 'กูนน์เฟรนด์แพ้นท์S18', '8858947823525 / PAC / 1', '18858947823522 / CAR / 12', 0, '0000100951', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', 'J0900', 'กูนน์', 'J0904', 'กูนน์เฟรนด์', 24, 'A'),
  createData('20030091', 'คิเรอิคิเรอิเจลล้างมือ50ml', '8850002023390 / PC / 1', '8850002023406 / PAC / 6', '08850002023390 / CAR / 24', '0000100184', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', '30700', 'คิเรอิ', '30708', 'คิเรอิโฟมล้างมือ', 49, 'A'),
  createData('20001331', 'คิเรอิโฟมล้างมือ250ml', '8850002020238 / PC / 1', '08850002020238 / CAR / 24', 0, '0000100184', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', '30700', 'คิเรอิ', '30706', 'คิเรอิโฟมล้างมือ', 87, 'N'),
  createData('20023288', 'คิเรอิโฟมล้างมือถุง200ml', '8850002020245 / PC / 1', '8850002023321 / PAC / 3', '08850002020245 / CAR / 24', '0000100184', 'บริษัท สหพัฒนพิบูล จำกัด (มหาชน)', '30700', 'คิเรอิ', '30706', 'คิเรอิโฟมล้างมือ', 37, 'C'),
  createData('00037511', 'เลย์คลาสสิคโนริสาหร่าย50g', '8850718801886 / PC / 1', '8850718701889 / PAC / 6', '8850718901883 / CAR / 48', '0000100089', 'บริษัท เป๊ปซี่-โคล่า (ไทย)เทรดดิ้ง จำกัด', 'E0300', 'เลย์', 'E0302', 'เลย์คลาสสิค', 94, 'N'),
  createData('00051812', 'เลย์คลาสสิคพริกเผ็ดซี๊ด48g ', '8850718813711 / PC / 1', '8850718711468 / PAC / 6', '8850718916474 / CAR / 48', '0000100089', 'บริษัท เป๊ปซี่-โคล่า (ไทย)เทรดดิ้ง จำกัด', 'E0300', 'เลย์', 'E0302', 'เลย์คลาสสิค', 65, 'A'),
  createData('00039213', 'เลย์คลาสสิคมันฝรั่งแท้13gx12', '8850718801152 / PC / 1', '8850718701155 / PAC / 12', '8850718909957 / CAR / 144', '0000100089', 'บริษัท เป๊ปซี่-โคล่า (ไทย)เทรดดิ้ง จำกัด', 'E0300', 'เลย์', 'E0302', 'เลย์คลาสสิค', 98, 'CP'),
  createData('00031814', 'เลย์คลาสสิคมันฝรั่งแท้50g', '8850718801473 / PC / 1', '8850718701476 / PAC / 6', '8850718901470 / CAR / 48', '0000100089', 'บริษัท เป๊ปซี่-โคล่า (ไทย)เทรดดิ้ง จำกัด', 'E0300', 'เลย์', 'E0302', 'เลย์คลาสสิค', 81, 'A'),
  createData('00036015', 'เลย์คลาสสิคเมี่ยงคำครบรส50g', '8850718807925 / PC / 1', '8850718707690 / PAC / 6', '8850718908417 / CAR / 48', '0000100089', 'บริษัท เป๊ปซี่-โคล่า (ไทย)เทรดดิ้ง จำกัด', 'E0300', 'เลย์', 'E0302', 'เลย์คลาสสิค', 9, 'N'),
  createData('20034695', 'เลย์แมกซ์ รสพริกปีศาจ 48g ', '8850718815289 / PC / 1', '8850718712298 / PAC / 6', '8850718918188 / CAR / 48', '0000100089', 'บริษัท เป๊ปซี่-โคล่า (ไทย)เทรดดิ้ง จำกัด', 'E0300', 'เลย์', 'E0302', 'เลย์แมกซ์', 63, 'C'),
  
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

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

const headCells = [
  { id: 'ProID', numeric: false, disablePadding: true, label: 'รหัสสินค้า', maxWidth: 50, },
  { id: 'Name', numeric: false, disablePadding: false, label: 'ชื่อสินค้า', maxWidth: 100, },
  { id: 'Bar1', numeric: false, disablePadding: false, label: 'บาร์โค้ด 1', checkHead: true },
  { id: 'Bar2', numeric: false, disablePadding: false, label: 'บาร์โค้ด 2', checkHead: true },
  { id: 'Bar3', numeric: false, disablePadding: false, label: 'บาร์โค้ด 3', checkHead: true },
  { id: 'SupID', numeric: true, disablePadding: false, label: 'รหัส Sup', maxWidth: 60, },
  { id: 'SupName', numeric: false, disablePadding: false, label: 'ชื่อ Sup' },
  { id: 'CatID', numeric: true, disablePadding: false, label: 'รหัส Category', maxWidth: 60, },
  { id: 'CatName', numeric: false, disablePadding: false, label: 'ชื่อ Category' },
  { id: 'SubCatCode', numeric: true, disablePadding: false, label: 'Sub Category Code',maxWidth: 70, },
  { id: 'SubCatName', numeric: false, disablePadding: false, label: 'Sub Category Name' },
  { id: 'NR', numeric: true, disablePadding: false, label: 'N-N/R)', maxWidth: 40, },
  { id: 'Status', numeric: true, disablePadding: false, label: 'สถานะสินค้า' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, onSelectAllBar1Click, onSelectAllBar2Click, onSelectAllBar3Click, numSelected, numBar1Selected, numBar2Selected, numBar3Selected, rowCount } = props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ maxWidth: 50 }} padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
            style={{padding:"0",opacity:"0"}}
          />
        </TableCell>
        <TableCell style={{ maxWidth: 50 }} padding="checkbox">
          No.
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            // sortDirection={orderBy === headCell.id ? order : false}
            style={{ maxWidth: headCell.maxWidth }}
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
            {
            headCell.checkHead ?
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon style={{color:"#fff"}} />}
                  checkedIcon={<CheckBoxIcon style={{color:"#fff"}} />}
                  indeterminate={
                    headCell.id === "Bar1" ?
                    numBar1Selected > 0 && numBar1Selected < rowCount
                    : headCell.id === "Bar2" ?
                    numBar2Selected > 0 && numBar2Selected < rowCount
                    : headCell.id === "Bar3" &&
                    numBar3Selected > 0 && numBar3Selected < rowCount

                  }
                  checked={
                    headCell.id === "Bar1" ?
                    rowCount > 0 && numBar1Selected === rowCount
                    : headCell.id === "Bar2" ?
                    rowCount > 0 && numBar2Selected === rowCount
                    : headCell.id === "Bar3" &&
                    rowCount > 0 && numBar3Selected === rowCount
                  }
                  onChange={
                    headCell.id === "Bar1" ?
                    onSelectAllBar1Click
                    : headCell.id === "Bar2" ?
                    onSelectAllBar2Click
                    : headCell.id === "Bar3" &&
                    onSelectAllBar3Click
                    
                  }
                  style={{marginLeft:".2rem"}}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              }
              label={headCell.label}
            />
            : headCell.label
            }
            
            
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
  onSelectAllBar1Click: PropTypes.func.isRequired,
  onSelectAllBar2Click: PropTypes.func.isRequired,
  onSelectAllBar3Click: PropTypes.func.isRequired,
  // order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  // orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


  //state table

  // const [order, setOrder] = useState('asc');
  // const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [bar1Selected, setBar1Selected] = useState([]);
  const [bar2Selected, setBar2Selected] = useState([]);
  const [bar3Selected, setBar3Selected] = useState([]);
  // const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredPosts.map((n) => n.ProID);
      setSelected(newSelecteds);
      setBar1Selected(newSelecteds);
      setBar2Selected(newSelecteds);
      setBar3Selected(newSelecteds);
      return;
    }
    setSelected([]);
    setBar1Selected([]);
    setBar2Selected([]);
    setBar3Selected([]);
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
    // alert(newSelected) ยังมี Bug เมื่อกด check ให้ทั้ง barcode 1 2 3 All แต่ ไปรีเซ็ทที่ Row อื่นด้วย!!!
    setBar1Selected(newSelected);
    setBar2Selected(newSelected);
    setBar3Selected(newSelected);
    // ยังมี Bug เมื่อกด check ให้ทั้ง barcode 1 2 3 All แต่ ไปรีเซ็ทที่ Row อื่นด้วย!!!
  };

  const handleSelectAllBar1Click = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredPosts.map((n) => n.ProID);
      setBar1Selected(newSelecteds);
      return;
    }
    setBar1Selected([]);
  };

  const handleBar1Click = (event, Bar1) => {
    const selectedIndex = bar1Selected.indexOf(Bar1);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(bar1Selected, Bar1);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(bar1Selected.slice(1));
    } else if (selectedIndex === bar1Selected.length - 1) {
      newSelected = newSelected.concat(bar1Selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        bar1Selected.slice(0, selectedIndex),
        bar1Selected.slice(selectedIndex + 1),
      );
    }
    setBar1Selected(newSelected);
  };

  const handleSelectAllBar2Click = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredPosts.map((n) => n.ProID);
      setBar2Selected(newSelecteds);
      return;
    }
    setBar2Selected([]);
  };
  const handleBar2Click = (event, Bar2) => {
    const selectedIndex = bar2Selected.indexOf(Bar2);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(bar2Selected, Bar2);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(bar2Selected.slice(1));
    } else if (selectedIndex === bar2Selected.length - 1) {
      newSelected = newSelected.concat(bar2Selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        bar2Selected.slice(0, selectedIndex),
        bar2Selected.slice(selectedIndex + 1),
      );
    }
    setBar2Selected(newSelected);
  };

  const handleSelectAllBar3Click = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredPosts.map((n) => n.ProID);
      setBar3Selected(newSelecteds);
      return;
    }
    setBar3Selected([]);
  };
  const handleBar3Click = (event, Bar3) => {
    const selectedIndex = bar3Selected.indexOf(Bar3);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(bar3Selected, Bar3);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(bar3Selected.slice(1));
    } else if (selectedIndex === bar3Selected.length - 1) {
      newSelected = newSelected.concat(bar3Selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        bar3Selected.slice(0, selectedIndex),
        bar3Selected.slice(selectedIndex + 1),
      );
    }
    setBar3Selected(newSelected);
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
  const isBar1Selected = (Bar1) => bar1Selected.indexOf(Bar1) !== -1;
  const isBar2Selected = (Bar2) => bar2Selected.indexOf(Bar2) !== -1;
  const isBar3Selected = (Bar3) => bar3Selected.indexOf(Bar3) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // const btnLeft = document.getElementById('left-button');
  // const btnRight = document.getElementById('right-button');
  // const dsTable = document.querySelector(".MuiDataGrid-window");
  // const dsTable = document.querySelector(".MuiPaper-root");
 

  const dsTable = React.useRef(null);

  const btnLeft = () => {
    scrollLeft(dsTable, -dsTable.current.scrollWidth, 300);   
    document
          .querySelector(".displayTable")
          .classList.remove("fix-head");
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
          .querySelector(".displayTable")
          .classList.add("fix-head");
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



  const [qProID, setQProID] = useState("")
  const [qName, setQName] = useState("")
  const [qBarcode, setQBarcode] = useState("")
  const [qSupID, setQSupID] = useState("")
  const [qSupName, setQSupName] = useState("")

  const [qCatID, setQCatID] = useState("")
  const [qSubCatID, setQSubCatID] = useState("")
  const [qCatName, setQCatName] = useState("")
  const [qSubCatName, setQSubCatName] = useState("")

  const [filteredPosts, setFilteredPosts] = useState([]);

  function clearInput() {
    setQProID("");
    setQName("");
    setQBarcode("");
    setQSupID("");
    setQSupName("");

    setQCatID("");
    setQSubCatID("");
    setQCatName("");
    setQSubCatName("");
  }
//ProID, Name, Bar1, Bar2, Bar3, SupID, SupName, CatID, CatName, SubCatCode, SubCatName, NR, Status
  React.useEffect(() => {
    setFilteredPosts(
      rows.filter(
        (rows) =>
          rows.ProID === qProID ||
          rows.Name.toLowerCase().includes(qName !== "" && qName) ||
          rows.Bar1.toLowerCase().includes(qBarcode !== "" && qBarcode) ||
          rows.Bar2.toLowerCase().includes(qBarcode !== "" && qBarcode) ||
          rows.Bar3 === qBarcode !== "" && qBarcode ||
          rows.SupID.toLowerCase().includes(qSupID !== "" && qSupID) ||
          rows.SupName.toLowerCase().includes(qSupName !== "" && qSupName) ||
          rows.CatID === qCatID ||
          rows.CatName.toLowerCase().includes(qCatName !== "" && qCatName) ||
          rows.SubCatCode === qSubCatID ||
          rows.SubCatName.toLowerCase().includes(qSubCatName !== "" && qSubCatName)
      )
    );
    
  }, [qName, qProID, qBarcode, qSupID, qSupName, qCatID, qCatName, qSubCatID, qSubCatName]);

  // console.log(qProID);
  // Modal
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [warning, setWarning] = React.useState(true);
  const [err404, setErr404] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <Button 
                className={classes.btnSaearch} 
                variant="contained"
                onClick={handleClickOpen}
                // onClick={() => {
                //   setModalShow(true)
                // }}
              >
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
                  เลือกสินค้าจำนวน {bar1Selected.length + bar2Selected.length + bar3Selected.length } รายการ
                </Box>
              </Typography>
              <Box display="flex">
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedMaster}
                      // onChange={handleChange}
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      icon={<CheckBoxOutlineBlankIcon style={{color:"rgba(0, 0, 0, 0.54)"}} />}
                      checkedIcon={<CheckBoxIcon style={{color:"#5FA900"}} />}
                      onChange={handleSelectAllClick}
                      name="checkedMaster"
                      color="default"
                    />
                  }
                  label="เลือกทั้งหมด"
                />
                <Button 
                  variant="text"
                  onClick={() => clearInput()}
                >
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
              // ref={dsTable}
            >
                <div className="hiddenScroll" 
                // style={{width:"150vw",}}
                style={{overflow:'hidden'}}  
                >
              <Paper className={classes.root} style={{marginBottom:'-16px'}} >
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer 
                style={{maxHeight:"calc(100vh - 300px)"}}  // Remove when table scroll-Y
                ref={dsTable}
                >
                  <Table
                    stickyHeader
                    className={`tableContent ${classes.table}`}
                    style={{width:"150vw"}}
                    aria-labelledby="tableTitle"
                    // size={dense ? "small" : "medium"}
                    aria-label="sticky table"
                  >
                    {
                      filteredPosts.length > 0 &&
                      <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        numBar1Selected={bar1Selected.length}
                        numBar2Selected={bar2Selected.length}
                        numBar3Selected={bar3Selected.length}
                        // order={order}
                        // orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onSelectAllBar1Click={handleSelectAllBar1Click}
                        onSelectAllBar2Click={handleSelectAllBar2Click}
                        onSelectAllBar3Click={handleSelectAllBar3Click}
                        // onRequestSort={handleRequestSort}
                        rowCount={filteredPosts.length}
                      />
                    }
                    <TableBody>
                      {/* {stableSort(rows, getComparator(order, orderBy))
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ) */}
                        
                        {filteredPosts.map((row, index) => {
                          const isItemSelected = isSelected(row.ProID);
                          const labelId = `enhanced-table-checkbox-${index}`;
                          
                          const isItemBar1Selected = isBar1Selected(row.ProID);
                          const labelBar1Id = `bar1-checkbox-${index}`;
                          const isItemBar2Selected = isBar2Selected(row.ProID);
                          const labelBar2Id = `bar2-checkbox-${index}`;
                          const isItemBar3Selected = isBar3Selected(row.ProID);
                          const labelBar3Id = `bar3-checkbox-${index}`;

                          return (
                            <TableRow
                              // hover
                              // onClick={(event) => handleClick(event, row.ProID)}
                              role="checkbox"
                              // aria-checked={isItemSelected}
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
                                  icon={<CheckBoxOutlineBlankIcon style={{color:"rgba(0, 0, 0, 0.54)"}} />}
                                  checkedIcon={<CheckBoxIcon style={{color:"#5FA900"}} />}
                                  style={{padding:"0"}}
                                  checked={isItemSelected}
                                  onClick={(event) => handleClick(event, row.ProID)}
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
                                style={{ maxWidth: 30 }}
                              >
                                {row.ProID}
                              </TableCell>
                              <TableCell align="left">
                                {row.Name}
                              </TableCell>
                              <TableCell align="left">
                                <Checkbox
                                  icon={<CheckBoxOutlineBlankIcon style={{color:"rgba(0, 0, 0, 0.54)"}} />}
                                  checkedIcon={<CheckBoxIcon style={{color:"#5FA900"}} />}
                                  style={{padding:"0", marginRight:".5rem"}}
                                  checked={isItemBar1Selected}
                                  onClick={(event) => handleBar1Click(event, row.ProID)}
                                  id={labelBar1Id}
                                  />
                                <label htmlFor={labelBar1Id}>{row.Bar1}</label>
                              </TableCell>
                              <TableCell align="left">
                                <Checkbox
                                  icon={<CheckBoxOutlineBlankIcon style={{color:"rgba(0, 0, 0, 0.54)"}} />}
                                  checkedIcon={<CheckBoxIcon style={{color:"#5FA900"}} />}
                                  style={{padding:"0", marginRight:".5rem"}}
                                  checked={isItemBar2Selected}
                                  onClick={(event) => handleBar2Click(event, row.ProID)}
                                  id={labelBar2Id}
                                  />
                                <label htmlFor={labelBar2Id}>{row.Bar2}</label>
                              </TableCell>
                              <TableCell align="left">

                                  <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon style={{color:"rgba(0, 0, 0, 0.54)"}} />}
                                    checkedIcon={<CheckBoxIcon style={{color:"#5FA900"}} />}
                                    style={{padding:"0", marginRight:".5rem"}}
                                    checked={isItemBar3Selected}
                                    onClick={(event) => handleBar3Click(event, row.ProID)}
                                    id={labelBar3Id}
                                    disabled={row.Bar3 == 0}
                                    />
                                  <label 
                                  htmlFor={labelBar3Id}
                                  className={row.Bar3 == 0 ? 'disabled' : null}
                                  >{row.Bar3}</label>
                                 
                                {/* <Checkbox
                                  style={{padding:"0", marginRight:".5rem"}}
                                  checked={isItemSelected}
                                  inputProps={{ "aria-labelledby": labelBar3Id }}
                                  />
                                <label 
                                htmlFor={labelBar3Id}
                                >{row.Bar3}</label> */}
                              </TableCell>

                              <TableCell align="center" style={{ maxWidth: 40 }}>
                                {row.SupID}
                              </TableCell>
                              <TableCell align="left">{row.SupName}</TableCell>
                              <TableCell align="center" style={{ maxWidth: 40 }}>{row.CatID}</TableCell>
                              <TableCell align="left">{row.CatName}</TableCell>

                              <TableCell align="center">
                                {row.SubCatCode}
                              </TableCell>
                              <TableCell align="left">{row.SubCatName}</TableCell>
                              <TableCell align="center" style={{ maxWidth: 20 }}>{row.NR}</TableCell>
                              <TableCell align="center">{row.Status}</TableCell>
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

                </Paper>

                </div>

            </div>

          </Box>

          <Dialog
            open={open}
            error={error}
            warning={warning}
            err404={err404}
            className={clsx(classes.modal, {
              [classes.error]: error,
              [classes.warning]: warning,
              [classes.err404]: err404,
            })}
            // onClose={handleClose}
            // fullWidth
            maxWidth="xs"
            TransitionComponent={Transition}
            aria-labelledby="max-width-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {
                error ? "ไม่พบข้อมูล" 
                : err404 ? "404 Error"
                : warning ? "แจ้งเตือน"
                : "กำลังค้นหา"
              }
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {
                  error ? <RiCloseCircleFill 
                  size="7rem" 
                  color="#C93D3D"
                  style={{marginBottom:"1.5rem"}}
                />
                  : err404 ? <RiMessage3Fill 
                  size="7rem" 
                  color="#C93D3D"
                  style={{marginBottom:"1.5rem"}}
                />
                  : warning ? <RiErrorWarningFill 
                  size="7rem" 
                  color="#FCB017"
                  style={{marginBottom:"1.5rem"}}
                />
                  : <CircularProgress 
                  size="7rem" 
                  thickness={7}
                  className={classes.circularColor} 
                />
              }
              
              
              
              <DialogContentText id="alert-dialog-description">
                  {
                    error ? <span onClick={()=>{setError(false); 
                      setErr404(true);
                    }}>Not Found</span> 
                    : err404 ? <span onClick={()=>{setErr404(false);
                      setWarning(true);}}>Page Not Found :(</span>
                    : warning ? <span onClick={()=>setWarning(false)}>กรุณากรอกข้อมูลเพื่อค้นหา</span>
                    : <span onClick={()=>setError(true)}>กำลังค้นหา</span>
                  }
              </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions> */}
          </Dialog>

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
            disabled={bar1Selected.length + bar2Selected.length + bar3Selected.length > 0 ? false : true}
          >
            เพิ่มสินค้า
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductSearch;
