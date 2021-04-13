import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import Footer_bottom from './component/Footer_bottom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <di>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        
        <Footer/>
        <Footer_bottom/>
      </Router>
    
    </di>
  )
}

export default App;
