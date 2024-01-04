import React, {useState, useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import DataContext from '../helpers/DataContext';
import Alert from "../common/Alert";

function LoginForm() {
  let history = useHistory();
  const [formErrors, setFormErrors] = useState([])
  const {login} = useContext(DataContext)
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });


  async function handleSubmit(e) {
    e.preventDefault();
    const result = await login(formData);
    if(result.sucess) {
      history.push("/")
    }else{
      setFormErrors(result.errors)
    }
  }


  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(data => ({...data, [name]:value}))
  }


  return (
    <div>
      {formErrors.length ? <Alert /> : null }
      <form onSubmit={handleSubmit} >
        <div>
          <label >Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm