import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import PopularItemGroup from './components/PopularItemGroup';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Details from './components/Details';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderNav />
      <Switch>
        <Route path="/Login.js">
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
    </BrowserRouter>
  );
}

export default App;
