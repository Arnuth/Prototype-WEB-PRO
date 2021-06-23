import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import "./App.css";
import AppRoutes from './AppRoutes';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: '0',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    "&>[class*=wrapContent]" : {minHeight: 'calc(100vh - 76px - 81px)',}
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },

}));


const App = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      {/* <CssBaseline /> */}
      <Header 
        toggle={handleDrawerOpen} 
        open={open} 
        className={clsx("", {
          [classes.contentShift]: open,
        })}
      />
      <Sidebar
        toggleClose={handleDrawerClose} 
        open={open} 
      />
      {/* main content */}
      
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <AppRoutes />
        {/* Footer */}
        <Footer />
        {/* End footer */}
      </main>
      
    </Router>
  );
}

export default App;