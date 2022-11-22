import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MyComponent from "./HomePage";
import React, {useState, useReducer} from "react";
import reducer from "./reducer";
import InfServ from "./InfServ";
import {Provider} from "react-redux";
import {store} from "./redux";
import OrderPage from "./OrderPage";


function App() {

    return  (
        <Provider store={store}>
            < BrowserRouter basename="/" >
                <div>

                    <Routes>
                        <Route path ="/" element={<MyComponent/>}/>
                        <Route path ="/service/:pk" element={<InfServ />}/>
                        <Route path ="/order" element={<OrderPage/>}/>


                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;