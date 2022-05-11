import React , {useState,useEffect} from  "react";
import axios from "axios";
import "./CourseScreen.css";
import {AiFillAndroid,AiOutlineUsergroupDelete} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import { fetchData } from "../../Helpler";
import {Link,useNavigate,useParams} from 'react-router-dom';
import {Table,Space, Button,message} from "antd";
import {DeleteFilled,EditFilled,PlusOutlined} from "@ant-design/icons"

const CourseScreen = () => {
    const params = useParams();
    
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

    const handleEableDisable = () => {

    }

    const handelDeleteCourse = (recorde) => {
        setLoading(true);
        fetchData("api/courses/"+recorde.course_id,{},"DELETE").then(res=>{
            message.success('Delete course success');
            getListCourse();
            setLoading(false);
        })
    }

    const handleEdit = (record) => {
       navigate("/course/create/"+record.course_id)
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
                    <div className="txt_main">List Course </div>
                    <div className="txt_total">Total {data.length}</div>
                </div>
                <div>
                    <Button type="primary" onClick={handleToCreateNew} ><PlusOutlined />New Course</Button>
                </div>
            </div>
            
            {loading === true && <div>Loading ...</div>}
            <br/>

            <Table
                bordered={true}
                columns={[
                    {
                        title : "ID",
                        dataIndex : "course_id"
                    },
                    {
                        title:"Name",
                        dataIndex : "name",
                        sorter: (a, b) => a.name.length - b.name.length,
                    },
                    {
                        title:"Price",
                        dataIndex : "price",
                        sorter: (a, b) => a.price - b.price,
                    },
                    {
                        title:"Description",
                        dataIndex : "description"
                    },
                    {
                        title:"Status",
                        dataIndex : "status",
                        render : (status,record) => {
                            return (
                                <Button
                                    onClick={()=>handleEableDisable(record)}
                                    size="small"
                                    style={{
                                        backgroundColor: status === 1 ? "green" : "brown",
                                        color:"white"
                                    }}
                                >
                                   {status == 1 ? "Enabled" : "Disabled"}
                                </Button>
                            )
                        }
                    },
                    {
                        title:"Action",
                        // dataIndex : "",
                        render: (text, record) => (
                            
                            <Space size="middle">
                                <DeleteFilled 
                                    style={{fontSize:24,color:"red"}}
                                    onClick={()=>handelDeleteCourse(record)}
                                />      
                                <EditFilled
                                    style={{fontSize:24,color:"blue"}}
                                    onClick = {()=>handleEdit(record)}
                                />
                            </Space>
                            
                          ),
                    },

                ]}
                dataSource={data}
            />

            {/* {
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
            } */}
        </div>
    )
}

export default CourseScreen;