import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import PopularItemGroup from './components/PopularItemGroup';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Details from './components/Details';
import ProfilePage from './components/ProfilePage';
import CreateProduct from './components/CreateProduct';
import Transaction from './components/Transactions';
import { useAuth0 } from '@auth0/auth0-react';
import PopularItemProvider from './components/PopularItemProvider';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/Details">
          <Details/>
        </Route>
        <Route exact path="/CreateProduct">
          <CreateProduct />
        </Route>
        <Route exact path="/ProfilePage">
          <ProfilePage />
        </Route>
        <Route exact path="/Transactions">
          <Transaction />
        </Route>
        <Route exact path="/">
          <PopularItemProvider />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
