import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Producto from './components/producto/Producto';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Registrar from './pages/registrar/Registrar';

function App() {
  return (
    <>
      <Menu />

      <Router>
        <Switch>
          {/* Pages */}
          <Route exact path='/' component={Home} />
          <Route path='/registrar' component={Registrar} />
        </Switch>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
