import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
