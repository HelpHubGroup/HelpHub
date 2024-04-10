import React, {useState} from 'react';
import '../../App.css';
import Menu from '../Menu';
import cartImg from '../images/cartPic.png';



function Cart(){
    return(
        <>
            <div>
                <img src={cartImg} alt = "image  not loaded"/>
                
                Cart
            </div>
        </>
    
    );


}

export default Cart;