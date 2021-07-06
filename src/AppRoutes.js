import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import PromotionRecord from "./pages/promotion/PromotionRecord";
import ProductSearch from "./pages/promotion/ProductSearch";
import ProductSearchTable from "./pages/promotion/ProductSearchTable";
import HomePage from "./pages/home/HomePage";
import BlankPage from "./pages/BlankPage";
import Login from "./pages/login/Login";



const AppRoutes = ({updateTitle, updateSubTitle}) => {

  // const [updateTitle, setGetTitle] = React.useState(updateTitle)
  // const [updateSubTitle, setGetSubTitle] = React.useState(updateSubTitle)

  // const handleChangeHeadTitle = React.useCallback((name) => {
  //   setGetTitle(name);
  // }, []);
  // const handleChangeHeadSubTitle = React.useCallback((name) => {
  //   setGetSubTitle(name);
  // }, []);


  // React.useEffect(() => {
  //   updateTitle(updateTitle);
  //   updateTitle(updateSubTitle);
  // }, [updateTitle, updateSubTitle]);

  // console.log(updateTitle)
  // console.log(updateSubTitle)

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route 
        path="/promotion/create" 
        component={PromotionRecord} 
      />
      <Route 
        path="/promotion/productsearch2" 
        component={ProductSearch} 
      />
      <Route 
        path="/promotion/productsearch" 
        component={ProductSearchTable} 
      />
      <Route path="/home" component={HomePage} />
      <Route path="/page/:id/title/:title" component={BlankPage} />
      <Route path="/login" component={Login} />

      {/* <PrivateRoute path="/member">
        <MemberPage />
      </PrivateRoute> */}
      
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
