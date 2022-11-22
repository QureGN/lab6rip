import React from "react";
import {Link} from "react-router-dom";
import ButtonCart from "./button/buttoncart";
import {useDispatch} from "react-redux";
import {setItemInCart} from "./redux/cart/reducer1";
import ButtonComponent from "./ButtonComponent";


export function ServiceItem(props){


    const {service} = props;

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(service))
    };
    return (
        <div>
            <div >
                <p>
                    <Link to ={`/service/${service.pk}`}>{service.service} </Link>
                </p>
                <p> {service.price}</p>
                <div>

                    <ButtonComponent func={handleClick}/>
                </div>
            </div>
        </div>)
}

export default ServiceItem;