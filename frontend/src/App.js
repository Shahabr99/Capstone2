import React, {useState, useEffect} from "react";
import useLocalStorage from "../hooks/";
import tuneflowApi from "../api/api";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_ID = "tuneflow-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_ID)
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(function loadUsrInfo() {
  }, [token])
}

export default App;
