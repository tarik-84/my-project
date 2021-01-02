import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../../components/Axios/axiosWithAuth';
import {TextField, Button} from '@material-ui/core';
import './Login.css'

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });
const history = useHistory();

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", data)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        console.log('ter', response)
        history.push(`/protected`);
      })
      .catch(error => console.log(error));
  };

    return (
      <div className='container'>
        <div className='contain'>
          <h1>Welcome to Lambda How-To App!</h1>
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div className='sign'/>
              <TextField className='text'
                id="outlined-basic"
                onChange={handleChange}
                values={data.username}
                type="text"
                name="username"
                label="Username"
                variant="outlined"
              />
              <div className='sign'/>
                <TextField className='text'
                  id="outlined-basic"
                  onChange={handleChange}
                  values={data.password}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                />
              <div className='sign'/>
                <Button variant="contained" color="primary" type="submit">Login</Button>
          </form>
        </div><br/>OR <Link className='link' to='/sign-up'>SignUp</Link>
      </div>
      
    );
  }


export default Login;
