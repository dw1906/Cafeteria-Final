import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewAppRouter from './NewAppRouter';
import AppNavbar from './AppNavBar';
import AppRouter from './AppRouter';
import NewAppNav from './NewAppNav';
import Footer from './footer';
function App() {
  return (
    <div className="App"> 
      <Router>
      <Switch>
      <Route path="/c">
          <NewAppNav/>
        <div className="container maincontainer" >
          <NewAppRouter />
        </div>
        </Route>
        <Route path="/">
          <AppNavbar />
        <div className="container maincontainer" >
          <AppRouter />
        </div>
        </Route>
      </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
