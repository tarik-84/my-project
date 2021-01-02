import React from 'react';
// import {
//   Card, CardText, CardBody,
//   CardTitle,CardImg
// } from 'reactstrap';
import './FP_ArticleCard.css'

export default function FP_ArticleCard(props) {
    const {name, description, price, location} = props
  //   const [image, setImage] = useState('')


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

    return (
        <div className='article-card-main'>
          <div className='card'>
          {/* <div className="image">
          <label>
            <input style={{ display: 'none' }}
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            /> Upload Image</label>
          <img src={image}  alt='' style={{ width: '280px' }} />
        </div>  */}
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{location}</p>
          </div> 
        </div>
      // <div>
      //   <Card>
      //   <label>
      //       <input style={{ display: 'none' }}
      //         type="file"
      //         name="file"
      //         placeholder="Upload an image"
      //         onChange={uploadImage}
      //       /> Upload Image</label>
      //     <CardImg top width="100%" src={image} alt="Card image cap" />
      //     <CardBody>
      //       <CardTitle>{name}</CardTitle>
      //       <CardText>{description}</CardText>
      //       <CardText>{price}</CardText>
      //       <CardText>{location}</CardText>
      //     </CardBody>
      //   </Card>
      // </div>
    );
}

  