import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register.jsx'
import Menu from './screens/Menu'
import Success from './screens/Success'
class AppRouter extends Component{
  render(){
    return(
        <>
            <Router>
             <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/home" component={Home} exact />
               <Route path="/menu" component={Menu} exact />
               <Route path="/login" component={Login} exact />
               <Route path="/register" component={Register} exact />
               <Route path="/success" component={Success} exact />
             </Switch>
           </Router>
        </>
    );
  }
}
export default AppRouter;