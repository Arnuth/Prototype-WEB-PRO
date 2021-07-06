import React from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/imgs/logo.png";
import avatar from "../assets/imgs/demo/avatar.png";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  wrapLogo: {},
  menuButton: {
    marginRight: theme.spacing(2),
    color: "rgba(0, 161, 74, 1)",
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: "0.5rem",
    "&:hover" : { backgroundColor: "rgba(255,255,255,0.7)",}
  },
  hide: {
    display: 'none',
  },
  appBar: {
    //   borderBottom: `1px solid ${theme.palette.divider}`,
    padding: "0",
    backgroundColor: "#00A14A",
    boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.2) inset"
  },
  toolbar: {
    flexWrap: "wrap",
    alignItems: "center",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  logo: {
    maxHeight: "60px",
    "& img": { display: "block"}
  },
  logoTitle: { color: '#fff'},
  wrapNav: {},
  link: {
    display: 'block',
    margin: 0,
    color: '#fff',
    padding: '1.5px',
    background: 'linear-gradient(180deg, #00FF96 0%, #FCB017 100%)',
    transform: 'rotate(-45deg)',
    borderRadius: '100%',
    "& img": { display: 'block',transform: 'rotate(45deg)', border: '3px solid #fff',borderRadius: '100%', maxHeight: '40px'}
  },
  button: {
    height:'40px',
    borderColor: '#fff',
    borderRadius: '0',
    color: '#fff'
  },
}));

const Header = ({ toggle, open, title, subtitle/*, updateTitle*/ }) => {
  const classes = useStyles();

  // const newTitle = "Welcome to Thailand2";

  // React.useEffect(() => {
  //   updateTitle(newTitle);
  // }, [updateTitle]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar 
        className={clsx(classes.toolbar, {
          [classes.contentShift]: open,
        })}
        // className={classes.toolbar}
      >
        <Box display="flex" alignItems="center" className={classes.wrapLogo}>
          <IconButton
              aria-label="open drawer"
              onClick={toggle}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
          </IconButton>
          <Box component="h1" display="flex" alignItems="center" m={0} py={1} className={classes.logo}>
            <Button component={Link} to="/dashboard">
              <img src={logo} alt="Logo" height="60" />
            </Button>
            <Box ml={2} className={classes.logoTitle}>
                <Box component="h2" m={0} mb={.5} fontSize={18} className="title">{title}</Box>
                <Box fontSize={14} fontWeight={300} className="statePath">{subtitle}</Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" className={classes.wrapNav}>
        <Box mr={2}>
          <Link
            variant="button"
            color="#fff"
            to="/profile/username"
            title="Username"
            className={classes.link}
          >
            <img src={avatar} alt="Username" height="44" /> <span hidden>Username</span>
          </Link>
          
        </Box>
        <Button
          component={Link}
          to="/"
          ccolor="secondary"
          variant="outlined"
          className={classes.button}
        >
          ออกจากระบบ
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
