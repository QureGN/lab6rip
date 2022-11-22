import React from "react";

import Header from "./header";
import {useDispatch, useSelector} from "react-redux";
export function OrderItem(props){
    const {service} = props;
    const dispatch = useDispatch;


    return (
        <div >


            <div>{service.service}</div>
            <span>{service.price}</span>

        </div>
    );
}

export default OrderItem;