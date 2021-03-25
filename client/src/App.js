import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
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
        <Route exact path="/Details/:id">
          <Details/>
        </Route>
        <Route exact path="/CreateProduct">
          <CreateProduct />
        </Route>
        <Route exact path="/users/conversation">
          <ConversationProvider />
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
