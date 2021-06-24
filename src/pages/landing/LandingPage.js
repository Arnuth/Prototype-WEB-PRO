import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";

import { BsCalendar, BsThreeDots } from "react-icons/bs";
import { FiEdit, FiSearch } from "react-icons/fi";
import "../../assets/css/landing.css";

const useStyles = makeStyles((theme) => ({
  wrapContentInline: { position: 'relative'},
  // button: {
  //   marginRight: theme.spacing(3),
  // },
}));

const top10Theme = [
  { title: "The ซีเจลดถล่มราคา 1", id: 1 },
  { title: "The ซีเจลดถล่มราคา 2", id: 2 },
  { title: "The Godfather: Part II", id: 1974 },
  { title: "The Dark Knight", id: 2008 },
  { title: "12 Angry Men", id: 1957 },
  { title: "Schindler's id", year: 1993 },
  { title: "Pulp Fiction", id: 1994 },
  { title: "The Lord of the Rings: The Return of the King", id: 2003 },
  { title: "The Good, the Bad and the Ugly", id: 1966 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", id: 2001 },
];

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="div" className={`wrapContent ${classes.wrapContentInline}`}>
      <Box className="head-line">
        <Typography component="h2" variant="h4">
          Inbox
        </Typography>
        <Typography component="p" variant="caption">
          CJ Promotion
        </Typography>
      </Box>
      <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className="btn-main"
            startIcon={<FiEdit />}
            component={Link}
            to="/promotion/create"
          >
            สร้าง Promotion record
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="small"
            className="btn-main"
            startIcon={<BsCalendar />}
            // component={Link}
            // to="/"
            onClick={() => {
              alert("Coming soon");
            }}
          >
            สร้าง Theme Period
          </Button>
      </Box>

      <Box className="sec-box" my={2}>
        <Box
          className="hd-topic"
          display="flex"
          mb={3}
          justifyContent="space-between"
        >
          <Typography component="h3" variant="h6">
            งานบันทึกร่าง / งานถูกตีกลับ
          </Typography>
          <Button
            component={Link}
            to="/header/listDraft"
            variant="contained"
            size="small"
          >
            ดูทั้งหมด
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid className="cardPromotion draft" item xs={12} sm={6} md={4} lg={3}>
            <Grid container spacing={0}>
              <Grid className="title" item xs={4}>
                <b>Theme</b>
                <Box>Theme Period</Box>
                <Box>Start Date</Box>
                <Box>End Date</Box>
              </Grid>
              <Grid className="detail" item xs={8} sm container>
                <b>ซีเจลดถล่มราคา</b>
                <Box>สงกรานต์</Box>
                <Box>10/04/2564 </Box>
                <Box color="#f00">20/04/2564</Box>
                <BsThreeDots className="btn-dot" />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="cardPromotion reject" item xs={12} sm={6} md={4} lg={3}>
            <Grid container spacing={0}>
              <Grid className="title" item xs={4}>
                <b>Theme</b>
                <Box>Theme Period</Box>
                <Box>Start Date</Box>
                <Box>End Date</Box>
              </Grid>
              <Grid className="detail" item xs={8} sm container>
                <b>ซีเจลดถล่มราคา <Button className="btn-status" variant="contained" size="small" color="secondary">ตีกลับ</Button></b>
                <Box>สงกรานต์</Box>
                <Box>10/04/2564 </Box>
                <Box color="#f00">20/04/2564</Box>
                <BsThreeDots className="btn-dot" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box className="sec-box" my={2}>
        <Box
          className="hd-topic"
          display="flex"
          mb={2}
          justifyContent="space-between"
        >
          <Typography component="h3" variant="h6">
            Promotion record
          </Typography>
          <Button
            component={Link}
            to="/header/listAll"
            variant="contained"
            size="small"
          >
            ดูทั้งหมด
          </Button>
        </Box>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box className="srh-card" component="form" display="flex">
              <Box flexGrow={1}>
                <Autocomplete
                  freeSolo
                  id="search-themes"
                  // disableClearable
                  options={top10Theme.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ค้นหา"
                      margin="none"
                      // variant="outlined"
                      InputProps={{ ...params.InputProps, type: "search" }}
                    />
                  )}
                />
              </Box>
              <IconButton
                type="submit"
                className="btn-search"
                aria-label="search"
              >
                <FiSearch />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Grid container spacing={3}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Grid key={index} className="cardPromotion" item xs={12} sm={6} md={4} lg={3}>
                <Grid container spacing={0}>
                  <Grid className="title" item xs={4}>
                    <b>Theme</b>
                    <Box>Theme Period</Box>
                    <Box>Start Date</Box>
                    <Box>End Date</Box>
                  </Grid>
                  <Grid className="detail" item xs={8} sm container>
                    <b>ซีเจลดถล่มราคา {index + 1}</b>
                    <Box>สงกรานต์</Box>
                    <Box>10/04/2564 </Box>
                    <Box color="#f00">20/04/2564</Box>
                    <BsThreeDots className="btn-dot" />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
