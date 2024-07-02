import React from 'react'
import "./Subtotal.css"
import  UseStateValue  from "./StateProvider";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';



function Subtotal() {
    const [{ basket }, dispatch] = UseStateValue();

    console.log("Basket contents:", basket);
    console.log("Total value:", getBasketTotal(basket));
  return (
    <div className='subtotal'>
        
        <CurrencyFormat
        CurrencyFormat
        renderText={(value) => (
        <>
       
        <p> 
           Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
        </p>
        <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
        </small>
        </>
        // <>
        // <p>{value}</p>
        // </>
        )}
        decimalScale={2} 
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}l
        />
        <button>proceed to checkout</button>
      
    </div>
  )
}

export default Subtotal
