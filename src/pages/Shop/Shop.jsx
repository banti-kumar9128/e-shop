import React from 'react'
import "./shop.css"
import { category } from '../../Category'
import { dummydata } from '../../dummydata'
import { useState } from "react"
import Product from '../../Components/porduct/Product'
import { FaShopify } from "react-icons/fa";
const Shop = () => {

     let [cate,setCate] = useState(dummydata)
        function filterProducts(category){
            if(category==="all"){
                setCate(dummydata)
            }else{
const updatedata = dummydata.filter((item)=>(item.category===category))
            setCate(updatedata)
            }
        
        }
    
  return (
    <div className='shop'>
        <div className='heading'>
            <span>Shope</span>
             <FaShopify />
        </div>

            <div className="category-section">
                      <button className='batn'><h2> Filter Product</h2></button>
                      {category.map((item)=>(
                            <div className="category-card" onClick={()=>{filterProducts(item.name)}}>
                                <img src={item.image} alt="" />
                                <span>{item.name}</span>
                            </div>
                         ))}
                    </div>


              <div className="product-section">
            {cate.map((item)=>(
                <Product name={item.name} price={item.price} image={item.image} />
            ))}
          </div>
    </div>
  )
}

export default Shop