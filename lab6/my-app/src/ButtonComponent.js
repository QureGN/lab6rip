import React, {useEffect, useReducer, useState} from "react";
import {increm} from "./actions";
import { Link } from "react-router-dom";
import MyComponent from "./HomePage";

export default function ButtonComponent(props ){
    const {func} = props;

    return(
            <button className="btn btn-primary" onClick={func} >Записаться</button>);


}