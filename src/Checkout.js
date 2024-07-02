import React from 'react'
import UsestateValue from "./StateProvider"
import CheckputProduct from './CheckputProduct';
import "./Checkout.css"
import Subtotal from './Subtotal';
import CurencyFormat from "react-currency-format";



function Checkout() {
    const [{basket}]=UsestateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
        <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/
images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" ait="aitt"></img>
      {basket?.length === 0 ?(
                <div>
                    <h2> ypur shopping basket is empty</h2>
                    <p>You have no items in your basket. To
                    "Add to basket" next to the item.</p>

                </div>
      ) : (
        <div>
            <h2 className='checkout_title'> your shopping basket  </h2>
           {/* list of all products in checkput products */}
           {basket.map(item => (
                        <CheckputProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item. rating}
                        />
           ))}
        </div>
      )}
        </div>

        {basket.length >0 &&(
          <div className='checkout_right'>
            
            {/* <h1>
              subtotal
            </h1> */}
            <Subtotal/>
            </div>
          

        )}
    </div>
  )
}

export default Checkout;
