import React, {useEffect, useReducer, useState} from "react";
import reducer from "./reducer";
import {increm} from "./actions";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent"
import ButtonCart from "./button/buttoncart";
import {useDispatch} from "react-redux";
import Status from "./Status";
import { FaDog } from "react-icons/fa";
import Header from "./header";
import './css/bag.css';
import {setItemInCart} from "./redux/cart/reducer1";
import ServiceItem from "./ServiceItem";


function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [value,setValue] = useState('');
    const [order, setState] = useState([])
    const filterServices = items.filter(item => {
        return item.service.toLowerCase().includes(value.toLowerCase())
    })
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch("http://127.0.0.1:8000/stocks1/")
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




    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                   <Header  />

                <input
                    type = "text"
                    placeholder = "Search in the services..."
                    onChange ={(event) => setValue(event.target.value)}

                />

                {items.map(item => <ServiceItem service = {item} key={item.pk} />)}




            </div>


        );
    }
}
export default MyComponent;