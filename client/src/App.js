import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Details from './components/Details';
import ProfilePage from './components/ProfilePage';
import CreateProduct from './components/CreateProduct';
import PopularItemProvider from './components/PopularItemProvider';
import ConversationProvider from './components/Messaging/ConversationProvider';

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
        <Route exact path="/users/conversation">
          <ConversationProvider>Conversations should be here :(</ConversationProvider>
        </Route>
        <Route exact path="/users/:id">
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <PopularItemProvider />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
