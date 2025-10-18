import React from 'react'
import image1 from "../../assets/image1.jpg"
import './product.css'
const Product = ({name, image, price,id}) => {
  return (
    <div className='product'>
        <img src={image} alt="" />
        <div className="porduct-details">
            <span className='name'>{name}</span>
            <span className='price'>Rs{price}/-</span>
            <button>add +</button>
        </div>

    </div>
  )
} 

export default Product