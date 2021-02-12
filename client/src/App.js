import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import PopularItem from './components/PopularItem';
import PopularItemGroup from './components/PopularItemGroup';
import Footer from './components/Footer';
import CategoryNav from './components/CategoryNav';
import Login from './components/Login';
import Details from './components/Details';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <HeaderNav></HeaderNav>
        <CategoryNav></CategoryNav>
        <PopularItemGroup></PopularItemGroup>
        <PopularItemGroup></PopularItemGroup>
        <Footer></Footer>

        <Login/>


        <Details/>
        <ProfilePage/>



      </header>
    </div>
  );
}

export default App;
