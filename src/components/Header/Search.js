import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from '../FP_ArticleCard/FP_ArticleCard'
import { axiosWithAuth } from '../Axios/axiosWithAuth';




export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
      
  useEffect(()=>{
    axiosWithAuth()
    .get('/api/items') 
    .then (res =>{
        console.log('rrr', res)
      const category = res.data.filter(cat => cat.name.toLowerCase().includes(query.toLowerCase())
      );
      
      setData (category);
    })
    .catch(error => {
      console.error(error);
    });
  },[query]);
  
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
   
    return (
      <section className="search-form">
        <div >
      <form > 
        <input
        id="name" type="text" name="textfield" placeholder="Search" value={query} onChange={handleInputChange}/>
    </form>

    {data.map(item => (
    <Link key={item.id} to={`/post/${item.id}`}>    
     <ArticleCard key={item.id} 
    name={item.name}
    description={item.description} 
    price ={item.price} 
    location={item.location}
    />
    </Link>
))}

</div>
    </section>
  );
}
