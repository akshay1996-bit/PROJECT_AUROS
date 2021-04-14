import React, {useState, useEffect} from 'react';
import { connect } from "react-redux"; 
import {removeFromCart} from "../redux/actions/action";


const Cart = ({ cart, remove }) => {
    const [totalItems, setTotalItems]=useState(0);
    const [totalPrice, setTotalPrice]=useState(0);

    useEffect(() => {
      let items= 0;
      let price =0;

      cart.forEach(item =>{
        
        items += item.qty;
        price += item.qty * item.price;
          

        
      })

      setTotalItems(items);
      setTotalPrice(price.toFixed(2))
    },[cart ,totalItems, setTotalItems,totalPrice, setTotalPrice ])

    return ( <div style={{display: "flex"}}>
      
      <div style={{marginLeft: "50px",marginTop: "50px",width: "600px"}}>
      <h3>Your Cart</h3>
        {cart.map((prod) => (

<div className="card mb-3" style={{maxWidth: "540px"}}>
<div className="row g-0">
  <div className="col-md-4">
    <img src={prod.img_url} height="120px" width="100px" alt="logo"/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">{prod.product_name}</h5>
      <p className="card-text">Price: {prod.price}</p>
      <p className="card-text">Quantity : {prod.qty}</p>
      <button  onClick={() => remove(prod.product_name)}
     >
        
        Remove Item</button>
    </div>
  </div>
</div>
</div>



        ))}

</div>
        <div>
        <div className="card" style={{width: "18rem",position: "relative",left: "200px", top: "30px"}}>
  <div className="card-body">
    <h5 className="card-title">Cart Summary</h5>
    
    <p className="card-text">
      Total Items: {totalItems} <br/>
      <br/>
      Total Price : {totalPrice}  <br/>
      <br/>
      <button className="btn btn-primary" onClick={() => alert("Thanks For Shopping")}>CheckOut</button>

    </p>
    
  </div>
</div>
        </div>
                
    </div>
    
     );
}
const mapStateToProps = state => {
    return{
      cart: state.shop.cart
    };
  }
  
const mapDispatchToProps = dispatch => {
  return{
    remove: (name) => dispatch(removeFromCart(name))
  };
}
  
 export default connect(mapStateToProps, mapDispatchToProps) (Cart);
 
