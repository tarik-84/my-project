import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import ArticleCard from '../../components/FP_ArticleCard/FP_ArticleCard'
import {GuideContext} from '../../components/GuideContext'

const GuideList = props => {
    const value = useContext(GuideContext)
      console.log('value', value)
    return(
        <div className='fp-explore-container text-left'>
                <h3>Explore User Guides</h3>
                <div className='article-wrapper'>
                    {value.guide.map(post => (
                      <Link key={post.id} to={`/item/${post.id}`} >
                       <ArticleCard
                       fetchData={props.fetchData}
                       name={post.name}
                       description={post.description}
                       price={post.price}
                       location={post.location}
                       />
                      </Link> 
                    ))}
                </div>
            </div>
    )
}
export default GuideList;