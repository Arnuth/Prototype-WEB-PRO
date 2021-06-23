import React from "react";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import ftLogo from "../assets/imgs/logo-footer.png";

const useStyles = makeStyles((theme) => ({    
    footer: {
      // borderTop: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      backgroundColor: 'var(--primary-lite)',      
      // [theme.breakpoints.up('sm')]: {
      //   paddingTop: theme.spacing(6),
      //   paddingBottom: theme.spacing(6),
      // },
    },
    footerDetail: {
      fontSize: '11px',
      "& *" : {fontSize: '11px', fontStyle: 'normal', color: 'var(--text-green)', textDecoration: 'none', fontFamily: 'Sarabun', lineHeight: '130%'},
      "& b" : {fontWeight: '700'}
    },
    footerCopy: { fontSize: '12px', color: 'var(--text-gray)', margin: '0'}
  }));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box container="true" maxWidth="xl" display="flex" component="footer" mx={-3} className={classes.footer}>
      <Box display="flex" justifyContent="start">
        <Box component={Link} to="/" mr={3}><img src={ftLogo} alt="CJ Promotion" height="53"></img></Box>
        <Box className={classes.footerDetail}>
        <Typography component="b">บริษัท ซี.เจ. เอ็กซ์เพรส กรุ๊ป จำกัด</Typography>
        <Typography component="address">393 อาคาร 393 สีลม ชั้น 5-6 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500</Typography>
        <Typography component="p">โทรศัพท์: <a href="tel:0 2235 3146">0 2235 3146</a> โทรสาร: <a href="tel:0 2235 3146">0 2267 8681</a></Typography>
        <Typography component="p">อีเมล์: <a href="mailto:info@cjexpress.co.th" title="info@cjexpress.co.th">info@cjexpress.co.th</a></Typography>
        </Box>
      </Box>
      <Box component="p" className={classes.footerCopy}>
        <span color="inherit">{"© "}CJEXPRESS.co.th Web Promotion{" "}
        {new Date().getFullYear()}
        </span>
      </Box>
    </Box>
  );
};

export default Footer;
