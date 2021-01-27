import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import PopularItemGroup from './components/PopularItemGroup';
import Footer from './components/Footer';
import CategoryNav from './components/CategoryNav';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <HeaderNav></HeaderNav>
        <CategoryNav></CategoryNav>
        <Login></Login>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
