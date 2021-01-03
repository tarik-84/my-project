import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { axiosWithAuth } from '../Axios/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const initialList = {
  name: '',
  description: '',
  price: '',
  location_id: '',

}

const AddGuide = () => {

  const [add, setAdd] = useState(initialList);
  // const [image, setImage] = useState('')

  const history = useHistory()

  // const uploadImage = async e => {
  //   const files = e.target.files
  //   const data = new FormData()
  //   data.append('file', files[0])
  //   data.append('upload_preset', 'tarik84')

  //   const res = await fetch(
  //     '	https://api.cloudinary.com/v1_1/dxzeyyerm/image/upload',
  //     {
  //       method: 'POST',
  //       body: data
  //     }
  //   )
  //   const file = await res.json()

  //   setImage(file.secure_url)
  // }

  const changeHandler = e => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value
    })
  }

  const addHowTo = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/items', add)
      .then(res => {
        console.log('res', res)
        history.push(`/protected`)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='add-container'>
      <h2>Add New Guides</h2>
      <div className='card'>
        {/* <div className="image">
          <label>
            <input style={{ display: 'none' }}
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            /> Upload Image</label>
          <img src={image} style={{ width: '200px' }} alt='' />
        </div> */}
        <form onSubmit={addHowTo}>
          <div className='add' />
          <TextField className='text'
            id="outlined-basic"
            onChange={changeHandler}
            values={add.name}
            type="text"
            name="name"
            label="Name"
          />
          <div className='add' />
          <TextField className='text'
            id="outlined-basic"
            onChange={changeHandler}
            values={add.description}
            type="text"
            name="description"
            label="Description"
          />
          <div className='add' />
          <TextField className='text'
            id="outlined-basic"
            onChange={changeHandler}
            values={add.price}
            type="text"
            name="price"
            label="Price"
          />
          <div className='add' />
          <TextField className='text'
            id="outlined-basic"
            onChange={changeHandler}
            values={add.location_id}
            type="text"
            name="location_id"
            label="Location_id"
          />
          <div className='add-button' />
          <Button variant="contained" color="primary" type="submit">Add</Button>
        </form>
      </div>
    </div>
  )
}

export default AddGuide;