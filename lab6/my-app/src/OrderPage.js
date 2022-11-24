import React, {useEffect, useState} from "react";

import Header from "./header";
import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";
import CartItem from "./cartItem";
export function OrderPage(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItems] = useState([]);
    const [booktime, setTime] = useState([])



    let [cartOpen, setCartOpen] = useState(false);

    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, service ) => acc += service.price, 0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/stocks3/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const booking = (items) => {
        const request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({time1: booktime.pk, client_user:1, service1: items.pk})
        }
        fetch("http://127.0.0.1:8000/stocks2/", request);
    };

    const handleClick = (items)=>{
        items.map(ser => booking(ser));
    }


    return (
        <div >
            <div>
                <Header />
            </div>

            <div>
                {items.map( item => <OrderItem key={ item.pk} service={item}/>)}
            </div>
            <h1>Итого сумма:{totalPrice}</h1>
            <button className="btn btn-primary" onClick ={() => setCartOpen(cartOpen = !cartOpen)}  >Выбрать время</button>


            {cartOpen && (<div className= "book-card">
                {item.map(item => (
                    <div key={item.pk}>
                        <button onClick={() => setTime(item)}>{item.time2} </button>


                    </div>
                ))}
            </div>)
            }

            <div><button className="btn btn-primary"  onClick={()=>{handleClick(items)}} >Записаться на: {booktime.time2}  </button></div>




        </div>
    );
}

export default OrderPage;
