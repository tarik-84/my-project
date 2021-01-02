import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { axiosWithAuth } from '../Axios/axiosWithAuth'


const ViewGuide = props => {
    const [view, setView] = useState({})
    console.log('tar', view)
    const params = useParams();
    const history = useHistory();

    const fetchGuide = (id) => {
      axiosWithAuth()
      .get(`/api/items/${id}`)
      .then(res => {
        console.log('view', res)  
        setView(res.data[0])
    })
      .catch(err => console.log(err))
    }
   
    
    useEffect(() => {
     fetchGuide(params.id)
    }, [params.id])


    const deleteGuide = (e) => {
        e.preventDefault();
        axiosWithAuth()
          .delete(`/api/items/${params.id}`)
          .then(res => {
            console.log('mm', res)
            props.fetchData()
            history.push('/protected');
          })
          .catch(err => console.log(err))
        } 

    return(
      <div>
        <div className='view'>
          <h1>{view.name}</h1>
          <p>{view.description}</p>
          <p>{view.price}</p>
          <p>{view.location_id}</p> 
        </div>
        <div>   
          <button onClick={() => history.push(`/edit-guide/${params.id}`)}>Edit</button>
          <button onClick={deleteGuide}>Delete</button> 
        </div>
      </div>  
    )
}

export default ViewGuide;