import {Link} from "react-router-dom";
import React, {useContext} from 'react';
import DataContext from "../helpers/DataContext"


function Navigation(logout) {

  const {currentUser} = useContext(DataContext)

  function loggedIn() {
    return (
      <ul>
        <li>Home</li>
        <li>Playlists</li>
        <li>Profile</li>
      </ul>
    )
  }


  function loggedOut() {
    return (
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    )
  }


  return(
    <nav>
      <Link>Tuneflow</Link>
      {currentUser ? loggedIn : loggedOut}
    </nav>
  )
}

export default Navigation;