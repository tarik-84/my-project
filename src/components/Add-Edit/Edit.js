import React, { useState, useEffect } from 'react';
import {TextField, Button} from '@material-ui/core';
import { axiosWithAuth } from '../Axios/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';


const initialList = {
  name: '',
  description: '',
  price: '',
  location_id: '',

}

const EditGuide = () => {
  
  const [edit, setEdit] = useState(initialList);
  const history = useHistory()
  const params = useParams()
  
  
  const fetchGuide = (id) => {
    axiosWithAuth()
    .get(`/api/items/${id}`)
    .then(res => {
      console.log('view', res)  
      setEdit(res.data[0])
  })
    .catch(err => console.log(err))
  }
 
  
  useEffect(() => {
   fetchGuide(params.id)
  }, [params.id])
  
  
  const editChangeHandler = e => {
    
    setEdit({
        ...edit,
        [e.target.name]: e.target.value
    })
}


  const editHowTo = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/items/${params.id}`, edit)
    .then(res => {
        console.log('res', res)
        history.push(`/protected`)
       
    })
    .catch(err => console.log(err))
 }

 return (
    <div>
      <h2>Update Your Guides</h2>    
      <form onSubmit={editHowTo}>
        <div className='edit' />  
          <TextField className='text'
          id="outlined-basic"
          onChange={editChangeHandler}
          value={edit.name}
          type="text"
          name="name"
          label="Name"
          />
        <div className='edit' />
          <TextField className='text'
          id="outlined-basic"
          onChange={editChangeHandler}
          value={edit.description}
          type="text"
          name="description"
          label="Description"
          />
        <div className='edit' />
          <TextField className='text'
          id="outlined-basic"
          onChange={editChangeHandler}
          value={edit.price}
          type="text"
          name="price"
          label="Price"
          />
          <div className='edit' />
          <TextField className='text'
          id="outlined-basic"
          onChange={editChangeHandler}
          value={edit.location_id}
          type="text"
          name="location_id"
          label="Location_id"
          />
        <div className='edit' />
          <Button variant="contained" color="primary" type="submit">Edit</Button>             
      </form>
    </div> 
 )
}
export default EditGuide;