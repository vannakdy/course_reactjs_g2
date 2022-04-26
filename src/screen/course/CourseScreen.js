import React , {useState,useEffect} from  "react";
import axios from "axios";
import "./CourseScreen.css";
const CourseScreen = () => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2NTA5ODIwMTEsImV4cCI6MTY1MDk5NjQxMX0.9GPZYlaYHKlOZk4Pgn7fbFrDEBRnE9B5DELxwh1DvmY"

    useEffect(()=>{
        getListCourse();
    },[])


    const getListCourse = () => {
        setLoading(true);
        axios({
            method:"GET",
            url: "https://nitc.cleverapps.io/api/courses",
            data:{},
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(response=>{
            var res = response.data;
            setLoading(false);
            setData(res.data);

        })
    }

    // "course_id": 54,
    // "name": "Flutter",
    // "price": 150,
    // "description": "Hybrid mobile app",
    // "status": 1

    return (
        <div>
           
            <div className="header">
                <div>
                    <div className="txt_main">List Course</div>
                    <div className="txt_total">Total {data.length}</div>
                </div>
                <div>
                    <button className="btn">Add</button>
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
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseScreen;