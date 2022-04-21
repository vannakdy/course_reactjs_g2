
import React from "react";
import "./ProductCart.css";
import Button from "../button/Button";
import ButtonPrimary from "../button/ButtonPrimary";
const ProductCart = (props) => {
    const {
        id,
        image_url,
        p_name,
        p_full_price,
        p_discount,
        p_price,
        category,
        status
    } = props;

    return (
        <div className="main_conatin">
                <img 
                    src={image_url}
                    width={200}
                    height={150}
                />
                <div className="txt_name">{p_name}</div>
                <div className="txt_price">
                    <span style={{color:"gray",textDecoration:"line-through"}}>{p_full_price} </span>
                    <span style={{color:"brown",fontWeight:"bold"}}>{p_discount} </span>
                    <span style={{color:"black"}}>{p_price} </span>
                </div>
                <div className="txt_category">Category:{category}</div>
                
                {/* {status === true ? "" : ""}
                {status ? <h1>XX</h1> : <h1>YY</h1>}
                {status && "string number component element"}
                {status && "Hello"}
                {status && 8888} */}

                {status ? 
                    <Button
                        title="Add cart"
                    />
                    :
                    <ButtonPrimary
                        title="Add cart"
                    />
                }
                {/* <button onClick={()=>props.handleAddCart(props)} className={status ? "btn_add_cart" : "btn_add_cart_disable"}>Add cart</button> */}
        </div>
    )
}

export default ProductCart;