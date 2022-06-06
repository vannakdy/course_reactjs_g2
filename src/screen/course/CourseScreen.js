import React , {useState,useEffect} from  "react";
import "./CourseScreen.css";
import { fetchData } from "../../Helpler";
import {useNavigate} from 'react-router-dom';
import {Table,Space, Button,message,Spin} from "antd";
import {DeleteFilled,EditFilled,PlusOutlined} from "@ant-design/icons"

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

    return (
        <div>
            <Spin spinning={loading} >
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
            </Spin>
        </div>
    )
}

export default CourseScreen;