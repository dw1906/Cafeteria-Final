import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home'
import Menu from './screens/Menu'
import CheckOut from './screens/CheckOut'
import Final from './screens/Final'

class NewAppRouter extends Component{
  render(){
    return(
        <>
            <Router>
             <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/c/home" component={Home} exact />
               <Route path="/c/menu" component={Menu} exact />
               <Route path="/c/checkout" component={CheckOut} exact />
               <Route path="/c/Final" component={Final} exact />
             </Switch>
           </Router>
        </>
    );
  }
}
export default NewAppRouter;