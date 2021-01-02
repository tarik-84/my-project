import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import { axiosWithAuth } from '../../components/Axios/axiosWithAuth';
import './SignUp.css'
import { useHistory } from 'react-router-dom';



const initialUser = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    id: Date.now()
  };

const UserForm = () => {
  const [user, setUser] = useState(initialUser);
  const history = useHistory() 

  const changeHandler = e => {
      setUser({
          ...user,
          [ e.target.name ]: e.target.value
      });
  };

  const submitHandler = e => {
      e.preventDefault();
      axiosWithAuth()
      .post('/api/register', user)
      .then(res => {
          console.log('res', res)
          history.push('/')
      })
      .catch(err => console.log(err))
    }

      return (
          <div className='container'>
            <h1>Welcome to Lambda How-To App!</h1>
            <form onSubmit={submitHandler}>
              <div className='sign' />
                <TextField className='text'
                // id="outlined-basic"
                onChange={changeHandler}
                values={user.first_name}
                type="text"
                name="firstname"
                label="First Name"
                variant="outlined"
                />
              <div className='sign' />
                <TextField className='text'
                // id="outlined-basic"
                onChange={changeHandler}
                values={user.last_name}
                type="text"
                name="lastname"
                label="Last Name"
                variant="outlined"
                />
              <div className='sign' />
                <TextField className='text'
                // id="outlined-basic"
                onChange={changeHandler}
                values={user.email}
                type="text"
                name="email"
                label="Email"
                variant="outlined"
                />  
              <div className='sign' />
                <TextField className='text'
                // id="outlined-basic"
                onChange={changeHandler}
                values={user.username}
                type="text"
                name="username"
                label="Username"
                variant="outlined"
                />  
              <div className='sign' />
                <TextField className='text'
                // id="outlined-basic"
                onChange={changeHandler}
                values={user.password}
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                />
              <div className='sign'/>  
                <Button variant="contained" color="primary" type="submit">Sign Up</Button>            
            </form>  
          </div>
      )
}

export default UserForm;