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
        getStudentList();
    },[]);


    const getStudentList = () => {
        axios({
            method:"GET",
            url:"https://nitc.cleverapps.io/api/student",
            data:{}
        }).then(res=>{
            var dataRes = res.data;
            setListStudent(dataRes.data);
            setTotalRecord(dataRes.total_record)
        })
    }

    const dataProduct = [
        {
            id : 1,
            image_url : image_hp,
            p_name : "Hp 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "HP",
            status:true
        },
        {
            id : 2,
            image_url : image_mac,
            p_name : "Mac 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "Mac OSX",
            status:true
        },
        {
            id : 3,
            image_url : image_lenevo,
            p_name : "Latop lenevo 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "Lenevo",
            status:false
        },
        {
            id : 3,
            image_url : image_lenevo,
            p_name : "Latop lenevo 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "Lenevo",
            status:false
        },
        {
            id : 3,
            image_url : image_lenevo,
            p_name : "Latop lenevo 2022",
            p_full_price : "1600$",
            p_discount : "30%",
            p_price : "1300$",
            category : "Lenevo",
            status:false
        }
    ]

    return (
        <div className="product_container1">
            <h1>Student List {totalRecord}</h1>
            {
                listStudent.map((item,index)=>{
                    return (
                        <div
                            key={index} 
                            style={{
                                padding:10
                            }}
                        >
                            <div>{item.student_id}. {item.fname}-{item.lastname}</div>
                            <div>{item.gender === 1 ? "Male" : "Female"}</div>
                            <div>{item.tel}</div>
                            <div>{item.email}</div>
                            <div>{item.description}</div>
                        </div>
                    )
                })
            }
            {/* {
                dataProduct.map((item,index)=>{
                    return(
                        <ProductCart
                            image_url={item.image_url}
                            p_name={item.p_name}
                            p_full_price={item.p_full_price}
                            p_discount={item.p_discount}
                            p_price={item.p_price}
                            category={item.category}
                            status = {item.status}
                            id = {item.id}
                            handleAddCart={handleAddCart}
                        />
                    )
                })
            } */}
        </div>
    )
}

export default HomeScreen;