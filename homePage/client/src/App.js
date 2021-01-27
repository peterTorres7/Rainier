import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import PopularItemGroup from './components/PopularItemGroup';
import Footer from './components/Footer';
import CategoryNav from './components/CategoryNav';
import Details from './components/Details'
import ItemImage from './components/ItemImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <HeaderNav></HeaderNav>
        <CategoryNav></CategoryNav>
        <PopularItemGroup></PopularItemGroup>
        <PopularItemGroup></PopularItemGroup>
        <ItemImage></ItemImage>
        <Details></Details>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
