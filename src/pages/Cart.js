import React from 'react';
// import { NavItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
// import Navbar from '../components/Navbar';
import { remove } from '../Store/cartSlice';
// import '../Style/Product.css';

const Cart= () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
             {/* <Navbar/> */}
            <center><h4>Cart</h4></center>

            <table className="cartWrapper">
              
                 {products.map((product) => (
                   <tr key={product.id} className="cartCard">
                     <td> <img src={product.Image} alt="" width={100} height={100}/></td>
                        <h6>{product.Firstname}</h6>
                        <td><h5>{product.Lastname}</h5></td>
                      
                     <td> <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button></td></tr>
                        

                ))}
                </table>
            
        </div>
    );
};

export default Cart;
