import logo from './logo.svg';
import './App.css';
import Header from './container/view/header/Header';
import Banner from './container/view/banner/Banner';
import Footer from './container/view/footer/Footer';
import BusinessIdea from './container/view/business-idea/BusinessIdea';
import BusinessPlan from './container/view/business-plan/BusinessPlan';
import Testimonial from './container/view/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <BusinessIdea/>
      <BusinessPlan/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
