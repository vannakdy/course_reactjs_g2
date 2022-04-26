import React , {useEffect,useState} from "react";
import "./HomeScreen.css";
import axios from 'axios';
import ProductCart from "../../component/cart/ProductCart";
const image_hp = require("../../assets/001hp.jpg")
const image_mac = require("../../assets/002mac.jpg")
const image_lenevo = require("../../assets/003lenevo.jpg")
const HomeScreen = () => {

    const [listStudent,setListStudent] = useState([]);
    const [totalRecord,setTotalRecord] = useState(0)

    useEffect(()=>{
    },[]);

    return (
        <div className="product_container1">
            <h1>Home</h1>
        </div>
    )
}

export default HomeScreen;