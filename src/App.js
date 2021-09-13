import logo from './logo.svg';
import './App.css';
import Header from './container/view/header/Header';
import Banner from './container/view/banner/Banner';
import Footer from './container/view/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
