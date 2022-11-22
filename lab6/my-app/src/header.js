import React, {useCallback, useEffect, useReducer, useState} from "react";
import {increm} from "./actions";
import { Link } from "react-router-dom";
import Order from "./Bag"
import MyComponent from "./HomePage";
import {FaDog} from "react-icons/fa";
import Status from "./Status";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CartItem from "./cartItem";
import {setItemInCart} from "./redux/cart/reducer1";

export default function Header(props){
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, service ) => acc += service.price, 0);
    let [cartOpen, setCartOpen] = useState(false);
   const navigate = useNavigate();



    const handleClick = useCallback(() => {
        cartOpen = false;
        navigate('/order');
    }, [navigate]);
    return(
        <header>
            <div>
                <Link to ={`/`}>Услуги </Link>
                    <FaDog onClick ={() => setCartOpen(cartOpen = !cartOpen)} className = 'booking'/>

                    {cartOpen && (
                        <div className= "book-card">
                            <div>
                                {
                                    items.length >0 ? items.map( service => <CartItem key={ service.service}
                                                                                      price ={ service.price}
                                                                                        title={service.service}
                                                                                        id = {service.pk}/>)
                                        : 'Корзина пуста'
                                }
                            </div>
                            <div>
                                {
                                    items.length > 0 ?
                                        <div>
                                            <span>Итого:</span>
                                            <span>{totalPrice} руб.</span>

                                            <button onClick={handleClick}> Оформить </button>
                                        </div>
                                        :null
                                }
                            </div>

                        </div>
                    )}
                    <span className = 'booking'>{totalPrice} руб.</span>
            </div>
        </header>
    )
}
