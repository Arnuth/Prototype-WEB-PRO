import React from "react";
import { Link } from "react-router-dom";
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
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsCalendar, BsClock } from "react-icons/bs";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import Radio from "@material-ui/core/Radio";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import "../../assets/css/Pro-Header.css";
import ActiveDay from "../../components/ActiveDay";

const useStyles = makeStyles((theme) => ({
  wrapContentInline: {},
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

const PromotionRecord = () => {
  const classes = useStyles();
  //select
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    setSelectedStartDate('15-06-2564')
    setSelectedEndDate('20-06-2564')
  };

  const [selectedStartDate, setSelectedStartDate] = React.useState('');
  const [selectedEndDate, setSelectedEndDate] = React.useState('');

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
    { title: "จันทร์", id: 1 },
    { title: "อังคาร", id: 2 },
    { title: "พุธ", id: 3 },
    { title: "พฤ", id: 4 },
    { title: "ศุกร์", id: 5 },
    { title: "เสาร์", id: 6 },
    { title: "อาทิตย์", id: 7 },
  ];

  return (
    <>
    
      <Container
        maxWidth="xl"
        component="div"
        className={`wrapContent ${classes.wrapContentInline}`}
      >
        <Box className="head-line">
          <Typography component="h2" variant="h4">
            Create
          </Typography>
          <Typography component="p" variant="caption">
            กำหนด Header
          </Typography>
        </Box>
        <Box mt={2} className="box-input">
        
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="age-native-required">Theme</InputLabel>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectBox}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {/* <MenuItem value="" disabled>
                    Theme *
                  </MenuItem> */}
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={age}
                  onChange={handleChange}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
                className="text-date"
                id="input-with-icon-textfield"
                label="TextField"
                value={selectedStartDate}
                style={{width:'100%'}}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <BsCalendar color="#909090" style={{marginLeft:'.5rem'}} />
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
                style={{width:'100%'}}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <BsCalendar color="#909090" style={{marginLeft:'.5rem'}} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">
                  Store Format
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={age}
                  onChange={handleChange}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">
                  Main/In-store
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={age}
                  onChange={handleChange}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        
        </Box>
        <Box mt={2} className="box-day-option">
          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSFill />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  เลือกวันที่เล่นโปร
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Box display="flex" justifyContent="start" alignItems="center">
                <Box component="span" mr={3}>
                  วันที่เล่นโปร
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
                <label htmlFor="pro-day-all" className="toggleDays">
                  <Button component="a" variant="contained">
                    ทุกวัน
                  </Button>
                </label>
                <Box component="span" mx={3}>
                  หรือเลือก
                </Box>
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
                  <Box component="ul" display="flex">
                    {dataDays.map((item) => (
                      <ActiveDay key={item.id} name={item.title} />
                    ))}
                  </Box>
                </label>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box mt={2} display="flex" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleCheckChange}
                  name="checkedA"
                  color="default"
                />
              }
              label="เล่นทุกสินค้า"
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
              label="ช่วงเวลานาทีทอง"
            />
          </Box>

          <Box display="flex" alignItems="center">
            <Box>
            สาขาที่เล่นโปรโมชั่น
            <Button className="btn-branch" size="small" variant="contained">ทุกสาขา <BsThreeDotsVertical /></Button>
            </Box>
            <Box display="flex" alignItems="center">
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    เริ่ม *
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="input-with-icon-grid" 
                      // label="Start time"
                      style={{width:'100%'}}
                      value="00:00:00"
                      disabled
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsClock color="#909090" style={{marginLeft:'.5rem'}} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    สิ้นสุด *
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="input-with-icon-grid" 
                      // label="Start time"
                      style={{width:'100%'}}
                      value="23:59:59"
                      disabled
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsClock color="#909090" style={{marginLeft:'.5rem'}} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Box>
            <Box>
            <TextField id="standard-basic" label="กลุ่มสินค้ายกเว้น" />
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
            เลือก Division
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
