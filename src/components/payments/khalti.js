
import KhaltiCheckout from "khalti-checkout-web";
import React from 'react'
import config from "./khaltiConfig";

const Khalti = ({totalamount}) => {
    let checkout = new KhaltiCheckout(config);
let khaltiStyles = {
    backgroundcolor: 'purple',
    padding: '10px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold'
}

  return (
    <div>
      <button onClick={()=>checkout.show({amount: {totalamount}})} style={{background: 'purple',
    padding: '10px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold'}}>Pay Via Khalti</button>   
    </div>
  )
}

export default Khalti;