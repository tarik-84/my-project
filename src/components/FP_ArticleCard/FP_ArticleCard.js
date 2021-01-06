import React from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import './FP_ArticleCard.css'

export default function FP_ArticleCard(props) {
    const {name, description, price, location} = props

    return (
        <div className='article-card-main'>
          <Card>
            <CardBody>
              <CardTitle tag="h1">{name}</CardTitle>
              <CardText>{description}</CardText>
              <CardText>{price}</CardText>
              <CardText>{location}</CardText>
            </CardBody>
          </Card>
      </div>
    );
}

  