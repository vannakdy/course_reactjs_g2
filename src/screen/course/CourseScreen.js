import React from "react";
import ProductCart from "../../component/cart/ProductCart";
const image_hp = require("../../assets/002mac.jpg")
const image_mac = require("../../assets/002mac.jpg")
const image_lenevo = require("../../assets/003lenevo.jpg")
const HomeScreen = () => {
    const dataProduct = [
        {
            id : 1,
            image_url : image_hp,
            p_name : "Hp 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "HP",
        },
        {
            id : 2,
            image_url : image_mac,
            p_name : "Mac 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "Mac OSX",
        },
        {
            id : 3,
            image_url : image_lenevo,
            p_name : "Latop lenevo 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "Lenevo",
        }
    ]
    return (
        <div>
            <h1>Course screen</h1>
            {
                dataProduct.map((item,index)=>{
                    return(
                        <ProductCart
                            image_url={item.image_url}
                            p_name={item.p_name}
                            p_full_price={item.p_full_price}
                            p_discount={item.p_discount}
                            p_price={item.p_price}
                            category={item.category}
                        />
                    )
                })
            }
        </div>
    )
}

export default HomeScreen;