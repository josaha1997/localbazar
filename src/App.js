import React, { Component } from "react";
import Login from "./Login";
import Description from "./components/presentational/description";
import Register from "./registeration";
import ListProduct from "./listProduct";
import AddProduct from "./addproduct";
import AddBusiness from "./addBusiness";
import ListBusiness from "./listBusiness";
import ResetPassword from "./resetPassword";
import Master from "./masterPassword";
import Home from "./components/presentational/home";
//import createBrowserHistory from "history/createBrowserHistory";
import { Switch, Route } from "react-router-dom";

//import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
//const history = createBrowserHistory();
const App = () => (
  <Switch>
    <Route exact path="/" component={Register} />
    <Route path="/productdescription/:product_id" component={Description} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/addproduct" component={AddProduct} />
    <Route path="/listproduct" component={ListProduct} />
    <Route path="/addbusiness" component={AddBusiness} />
    <Route path="/listbusiness" component={ListBusiness} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/masterpassword" component={Master} />
  </Switch>
);

export default App;
