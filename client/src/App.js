import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import PopularItemGroup from './components/PopularItemGroup';
//import Footer from './components/Footer';
//import CategoryNav from './components/CategoryNav';
import Login from './components/Login';
import Details from './components/Details';
import ProfilePage from './components/ProfilePage';
import {
  BrowserRouter,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <HeaderNav/>
      <Switch>
        <Route path="/item/:id">
          <Details></Details>
        </Route>
        <Route path="/users">
          <ProfilePage></ProfilePage>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <PopularItemGroup></PopularItemGroup>
          <PopularItemGroup></PopularItemGroup>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
