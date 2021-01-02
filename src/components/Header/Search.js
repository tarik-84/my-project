import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from '../FP_ArticleCard/FP_ArticleCard'
import Axios from "axios";




export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
      
  useEffect(()=>{
    Axios
    .get(`https://testing-app-db1.herokuapp.com/accounts`) 
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

    {data.map(char => (
    <Link key={char.id} to={`/post/${char.id}`}>    
     <ArticleCard key={char.id} 
    title={char.title}
    user_id={char.user_id} 
    category_id ={char.category_id} 
    body={char.body}
    />
    </Link>
))}

</div>
    </section>
  );
}
