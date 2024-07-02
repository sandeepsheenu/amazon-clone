import React from 'react'
import "./CheckputProduct.css"
import  UseStatevalue  from './StateProvider';

function CheckputProduct({id,title,image,price,rating}) {
    const[{basket},dispatch]=UseStatevalue();
    console.log(id,title,image,price,rating)
    const RemoveFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id :id,
        });

    };


  return (
    <div className='checkputproduct'>
         <img  className="checkoutproductimage"src={image} alt=""/>
         <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
            <p>🌟 </p>
            ))}
            </div>
            <button onClick={RemoveFromBasket}>remove from basket</button>
            {/* <button>
                remove from basket
            </button> */}
            </div>
            </div>
      
  )
}

export default CheckputProduct
