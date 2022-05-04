import React , {useState,useEffect} from  "react";
import axios from "axios";
import "./CourseScreen.css";
import {AiFillAndroid,AiOutlineUsergroupDelete} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import { fetchData } from "../../Helpler";
import {Link,useNavigate} from 'react-router-dom';

const CourseScreen = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(()=>{
        getListCourse();
    },[])


    const getListCourse = () => {
        setLoading(true);
        fetchData("api/courses",{},"GET").then(res=>{
            setLoading(false);
            setData(res.data);
        })
    }

    const handelDelete = (param_id) => {
        setLoading(true);
        fetchData("api/courses/"+param_id,{},"DELETE").then(res=>{
            getListCourse();
            setLoading(false);
        })
    }

    const handleToCreateNew = () => {
        navigate("/course/create")
    }

    // "course_id": 54,
    // "name": "Flutter",
    // "price": 150,
    // "description": "Hybrid mobile app",
    // "status": 1

    // list : "api/courses" GET
    // delete : "api/courses/12" DELETE
    // create : "api/courses" POST
    //         data : { 
    //             name : "C++",
    //             price : 100,
    //             description : "",
    //             status : ""
    //         }

    return (
        <div>
            <div className="header">
                <div>
                    <div className="txt_main">List Course</div>
                    <div className="txt_total">Total {data.length}</div>
                </div>
                <div>
                    {/* <button className="btn"><Link to="/course/create">Add</Link></button> */}

                    <button onClick={handleToCreateNew} className="btn">Add</button>
                </div>
            </div>
            
            {loading === true && <div>Loading ...</div>}
            {
                data.map((item,index)=>{
                    return (
                        <div
                            key={index}
                            className="list"
                        >
                            <div>
                                <div className="txt_name">{item.name}</div>
                                <div className="txt_desc">{item.description}</div>
                            </div>
                            <div>
                                <div className="txt_price">{item.price}$</div>
                                <div className="txt_active">{item.status == 1 ? "Actived" : "Disabled"}</div>
                                <MdDelete 
                                    onClick={()=>handelDelete(item.course_id)}
                                    style={{color:'brown',marginTop:10}}
                                    fontSize={24}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseScreen;