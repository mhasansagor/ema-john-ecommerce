import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let totalQuantity=0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total+=product.price*product.quantity;
        totalQuantity =totalQuantity+product.quantity;
    }
    const shipping= total > 0 ? 15:0;
    const totalbTax =total + shipping;
    const eTax=totalbTax*.1 ;
    const totalAmount= totalbTax+eTax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Items Ordered:{totalQuantity}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${totalbTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${eTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='orderClr'>Order Total:</td>
                        <td>${totalAmount.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            {props.children}
        </div>
    );
};

export default Cart;