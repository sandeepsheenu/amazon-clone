import React from 'react'
import "./Product.css"
import  UseStateValue  from './StateProvider';

function Product({id,title,price,rating,image}) {
    const [{ }, dispatch]=UseStateValue();

    const addToBasket = ()=>{
        dispatch({
            type:'ADD_to_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,

            }
        })

    };
  return (
    <div className='all_prod'>
    <div className='product'>
        <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
                <small>INR </small>
                <strong>{price}</strong>

        </p>
        <div className='product_rating'>{
            Array(rating)
            .fill()
            .map((_)=>(
                <p>🌟</p>
            ))
            }

        </div>
        </div>
        <img src={image}></img>
        <button onClick={addToBasket}>add to cart</button>
      
    </div>
    </div>
  )
}

export default Product
