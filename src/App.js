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


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/houserentdetails">
            <HouseRentDetails></HouseRentDetails>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
