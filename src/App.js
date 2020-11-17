import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import HouseRentDetails from './Component/Home/Home/HouserentDetails/HouserentDetails';
import { createContext, useState } from 'react';
import Login from './Component/Login/Login';
import Navbar from './Component/Home/Navbar/Navbar';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Sidebar from './Component/Shared/Sidebar/Sidebar';
import AdminControlRent from './Component/AdminDashboard/AdminControlRent/AdminControlRent';


export const UserContext = createContext();

function App() {

  const [signInUser, setSignInUser] = useState({});

  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/houserentdetails/:id">
            <HouseRentDetails></HouseRentDetails>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Sidebar></Sidebar>
          </PrivateRoute>

          <PrivateRoute exact path="/admin/controlRent">
            <AdminControlRent></AdminControlRent>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
