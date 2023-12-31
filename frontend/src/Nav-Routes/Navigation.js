import {Link, NavLink} from "react-router-dom";
import React, {useContext} from 'react';
import DataContext from "../helpers/DataContext";


function Navigation(logout) {

  const {currentUser} = useContext(DataContext)

  function loggedIn() {
    return (
      <ul>
        <li>
          <NavLink to="/playlists">
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <Link to="/" onClick={logout} >Logout</Link>
        </li>
      </ul>
    )
  }


  function loggedOut() {
    return (
      <ul>
        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            Register
          </NavLink>
        </li>
      </ul>
    )
  }


  return(
    <nav>
      <Link to="/">Tuneflow</Link>
      {currentUser ? loggedIn() : loggedOut()}
    </nav>
  )
}

export default Navigation;