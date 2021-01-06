import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { axiosWithAuth } from '../Axios/axiosWithAuth'
import ArticleCard from '../FP_ArticleCard/FP_ArticleCard'
import { Button } from '@material-ui/core';


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
      <div className='view'>
        <div>
        <ArticleCard
          fetchData={props.fetchData}
          name={view.name}
          description={view.description}
          price={view.price}
          location={view.location_id}
          /> 
        </div>
        <div>   
          <Button variant="contained" color="primary" size="small" onClick={() => history.push(`/edit-guide/${params.id}`)}>Edit</Button>
          <Button variant="contained" color="primary" size="small" onClick={deleteGuide}>Delete</Button>
        </div>
      </div>  
    )
}

export default ViewGuide;