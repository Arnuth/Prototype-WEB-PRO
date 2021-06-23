import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import PromotionRecord from "./pages/promotion/PromotionRecord";
import HomePage from "./pages/home/HomePage";
import BlankPage from "./pages/BlankPage";
import Login from "./pages/login/Login";


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/promotion/create" component={PromotionRecord} />
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
