import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BsCalendar, BsClock } from "react-icons/bs";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import Radio from "@material-ui/core/Radio";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "../../assets/css/Pro-Header.css";
import ActiveDay from "../../components/ActiveDay";

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
      textDecoration: "none"
    },
    "& p": {
      color: "#000",
      fontWeight: "bold"
    },
  },
  footerBarInline: {
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectBox: {
    // marginTop: theme.spacing(2),
  },
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

const PromotionRecord = ({updateTitle, updateSubTitle}) => {
  const classes = useStyles();
  //update Title ,Sub Title
  const newTitle = "Create";
  const newSubTitle = "??????????????? Header";

  // function LoadUpdateHeadTitle(newTitle) {
  //   updateTitle(newTitle);
  // }

  // console.log(updateTitle)
  // console.log(updateSubTitle)
  // console.log(newTitle)


  React.useEffect(() => {
    console.log(newTitle)
    console.log(newSubTitle)
    const load = () => {updateTitle()}
    // updateTitle(newTitle);
  }, []);

  //select
  const [theme, setTheme] = React.useState("");
  const [period , setPeriod ] = React.useState("");
  const [format, setFormat] = React.useState("");
  const [instore, setInstore] = React.useState("");

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };
  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
    setSelectedStartDate("15-06-2564");
    setSelectedEndDate("20-06-2564");
  };
  const handleChangeFormat = (event) => {
    setFormat(event.target.value);
  };
  const handleChangeInstore = (event) => {
    setInstore(event.target.value);
  };

  const [selectedStartDate, setSelectedStartDate] = React.useState("");
  const [selectedEndDate, setSelectedEndDate] = React.useState("");

  //toggle Select type day
  const [selectedValue, setSelectedValue] = React.useState("All");
  const handleChangeDay = (event) => {
    setSelectedValue(event.target.value);
  };

  //checkbox
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });
  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //toogle division
  const [alignment, setAlignment] = React.useState("");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const dataDays = [
    { title: "??????????????????", id: 1 },
    { title: "??????????????????", id: 2 },
    { title: "?????????", id: 3 },
    { title: "??????", id: 4 },
    { title: "???????????????", id: 5 },
    { title: "???????????????", id: 6 },
    { title: "?????????????????????", id: 7 },
  ];

  return (
    <>
      <Container
        maxWidth="xl"
        component="div"
        className={`wrapContent ${classes.wrapContentInline}`}
      >
        {/* <Box className="head-line">
          <Typography component="h2" variant="h4">
            Create
          </Typography>
          <Typography component="p" variant="caption">
            ??????????????? Header
          </Typography>
        </Box> */}
        <Breadcrumbs className={classes.breadCrumbs} separator=">" aria-label="breadcrumb">
          <Link as={Link} color="inherit" to="/">
            Home
          </Link>
          {/* <Link color="inherit" to="/promotion/create">
            Core
          </Link> */}
          <Typography color="textPrimary">??????????????? Header</Typography>
        </Breadcrumbs>
        <Box mt={2} className="box-input">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="theme-required">Theme</InputLabel>
                <Select
                  value={theme}
                  onChange={handleChangeTheme}
                  displayEmpty
                  className={classes.selectBox}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {/* <MenuItem value="" disabled>
                    Theme *
                  </MenuItem> */}
                  <MenuItem value={10}>?????????????????????????????????????????????</MenuItem>
                  <MenuItem value={20}>??????????????????????????????????????????</MenuItem>
                  <MenuItem value={30}>7 ????????????????????????</MenuItem>
                  <MenuItem value={40}>?????????????????????????????????????????????</MenuItem>
                  <MenuItem value={50}>?????????????????????????????????????????????????????????</MenuItem>
                  <MenuItem value={60}>????????????????????????????????????</MenuItem>
                  <MenuItem value={70}>??????????????????????????????????????????</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="period-required-label">
                  Theme Period
                </InputLabel>
                <Select
                  labelId="period-required-label"
                  id="period-required"
                  value={period}
                  onChange={handleChangePeriod}
                  className={classes.selectBox}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Jun 2021</MenuItem>
                  <MenuItem value={20}>Jul 2021</MenuItem>
                  <MenuItem value={30}>Aug 2021</MenuItem>
                  <MenuItem value={40}>Sep 2021</MenuItem>
                  <MenuItem value={50}>Oct 2021</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                className="text-date"
                id="input-with-icon-textfield"
                label="TextField"
                value={selectedStartDate}
                style={{ width: "100%" }}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <BsCalendar
                        color="#909090"
                        style={{ marginLeft: ".5rem" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                className="text-date"
                id="input-with-icon-textfield"
                label="TextField"
                value={selectedEndDate}
                style={{ width: "100%" }}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <BsCalendar
                        color="#909090"
                        style={{ marginLeft: ".5rem" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="format-required-label">
                  Store Format
                </InputLabel>
                <Select
                  labelId="format-required-label"
                  id="format-required"
                  value={format}
                  onChange={handleChangeFormat}
                  className={classes.selectBox}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>NINE</MenuItem>
                  <MenuItem value={20}>Express</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="Instore-required-label">
                  Main/In-store
                </InputLabel>
                <Select
                  labelId="Instore-required-label"
                  id="Instore-required"
                  value={instore}
                  onChange={handleChangeInstore}
                  className={classes.selectBox}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Main</MenuItem>
                  <MenuItem value={20}>in/store</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4} className="box-day-option">
          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSFill />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div>
                <Typography>
                  ??????????????????????????????????????????????????????
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="flex"
                pt={1}
                justifyContent="start"
                alignItems="center"
                flexWrap="wrap"
              >
                <Box
                  display="flex"
                  mt={1}
                  justifyContent="start"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Box component="span" mr={3}>
                    ???????????????????????????????????????
                  </Box>
                  <Radio
                    checked={selectedValue === "All"}
                    onChange={handleChangeDay}
                    value="All"
                    name="ProDay"
                    id="pro-day-all"
                    inputProps={{ "aria-label": "A" }}
                    style={{
                      visibility: "hidden",
                      position: "absolute",
                      opacity: "0.5",
                    }}
                  />
                  <label htmlFor="pro-day-all" className="toggleAll">
                    <Button component="a" variant="contained">
                      ??????????????????
                    </Button>
                  </label>
                  <Box component="span" mx={3}>
                    ???????????????????????????
                  </Box>
                </Box>
                <Box
                  display="flex"
                  mt={1}
                  justifyContent="start"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Radio
                    checked={selectedValue === "Custom"}
                    onChange={handleChangeDay}
                    value="Custom"
                    name="ProDay"
                    id="pro-day-custom"
                    inputProps={{ "aria-label": "B" }}
                    style={{
                      visibility: "hidden",
                      position: "absolute",
                      opacity: "0.5",
                    }}
                  />
                  <label htmlFor="pro-day-custom" className="toggleDays">
                    <Box component="ul" display="flex" flexWrap="wrap">
                      {dataDays.map((item) => (
                        <ActiveDay key={item.id} name={item.title} />
                      ))}
                    </Box>
                  </label>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box
            mt={1}
            className="box-luckytime"
            display="flex"
            alignItems="flex-end"
            flexWrap="wrap"
          >
            <Box mr={1} pt={3} display="flex" justifyContent="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleCheckChange}
                    name="checkedA"
                    color="default"
                  />
                }
                label="???????????????????????????????????????"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleCheckChange}
                    name="checkedB"
                    color="default"
                  />
                }
                label="?????????????????????????????????????????????"
              />
            </Box>
            <Box className="lucky-opt" ml={2} display="flex" alignItems="center">
              <Box mr={2}>
                <Grid container spacing={2} alignItems="flex-end" className={state.checkedB === true ? 'enable' : 'disabled'}>
                  <Grid item>??????????????? *</Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="????????????"
                      style={{ width: "100%" }}
                      value="00:00:00"
                      
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsClock
                              color="#909090"
                              style={{ marginLeft: ".5rem" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mr={2}>
                <Grid container spacing={2} alignItems="flex-end" className={state.checkedB === true ? 'enable' : 'disabled'}>
                  <Grid item>????????????????????? *</Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="????????????"
                      style={{ width: "100%" }}
                      value="23:59:59"
                      
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsClock
                              color="#909090"
                              style={{ marginLeft: ".5rem" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box ml={3} display="flex" alignItems="center" className="excluded-pro" style={{width:'25%', minWidth:'200px'}}>
              <TextField id="standard-basic" label="???????????????????????????????????????????????????" style={{width:'100%'}} />
            </Box>
          </Box>

          <Box display="flex" className="box-set-branch" mt={3} alignItems="center">
            <Box>
              <Box component="span" mr={2}>
                ????????????????????????????????????????????????????????????
              </Box>
              <Button className="btn-branch" size="small" variant="contained">
                ????????????????????? <BsThreeDotsVertical color="#fff" style={{marginLeft: '.5rem'}} />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          mt={3}
          ml={-6}
          mr={-6}
          pt={3}
          pb={3}
          style={{ backgroundColor: "#E8E8E8" }}
          className="box-division"
        >
          <Box component="h2" m={0} variant="h4" textAlign="center">
            ??????????????? Division
          </Box>
          <Box
            p={3}
            display="flex"
            justifyContent="center"
            className="selectDivision"
          >
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
            >
              <ToggleButton value="food1" aria-label="food 1">
                FOOD 1
              </ToggleButton>
              <ToggleButton value="food2" aria-label="food 2">
                FOOD 2
              </ToggleButton>
              <ToggleButton value="food3" aria-label="food 3">
                FOOD 3
              </ToggleButton>
            </ToggleButtonGroup>
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
            to="/"
          >
            ????????????
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
            ??????????????????????????????
          </ColorButton>
        </Box>
        <Box className="right">
          <Button
            variant="contained"
            color="primary"
            className="btn-main"
            component={Link}
            to="/promotion/productsearch"
            disabled={alignment !== "" ? false : true} // remove when Add Content
          >
            ???????????????
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PromotionRecord;
