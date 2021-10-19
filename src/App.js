import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './pages/About/About/About';
import DoctorDetails from './pages/DoctorDetails/DoctorDetails';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/news/:newsId">
              <NewsDetail></NewsDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
