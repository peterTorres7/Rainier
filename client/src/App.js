import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Button} from '@material-ui/core';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import PopularItemGroup from './components/PopularItemGroup';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Details from './components/Details';
import ProfilePage from './components/ProfilePage';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderNav />
      <Switch>
        <Route exact path="/Login.js">
          <Login />
        </Route>
        <Route exact path="/SignUp.js">
          <SignUp />
        </Route>
        <Route exact path="/Details.js">
          <Details />
        </Route>
        <Route exact path="/ProfilePage.js">
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <PopularItemGroup></PopularItemGroup>
          <PopularItemGroup></PopularItemGroup>
        </Route>
      </Switch>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
