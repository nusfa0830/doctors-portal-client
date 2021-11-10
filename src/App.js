import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LogIn/LogIn/PrivateRoute/PrivateRoute';
import ResponsiveDrawer from './Pages/Dashboard/Dashboard/ResponsiveDrawer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appoinment">
              <Appoinment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <ResponsiveDrawer />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
