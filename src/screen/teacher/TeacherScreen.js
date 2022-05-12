import React , {useEffect,useState} from "react";
import "./TeahcerScreen.css";
import  {fetchData} from "../../Helpler";
import {Table,Space,Button} from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    PlusCircleFilled
} from "@ant-design/icons"

const TeacherScreen = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        getTeacherList();
    },[])

    const getTeacherList = () => {

        fetchData("api/teacher",{},"GET").then(res=>{
            if(res){
                setData(res.data);
            }
        });
    }

    // "teacher_id": 9,
    // "fname": "yim",
    // "lastname": "sotharoth",
    // "gender": 0,
    // "tel": "016534526",
    // "email": "testGmail@gmail.com",
    // "description": "DONE"

    return (
        <div>
            <div className="header_container">
                <h1>List Teacher</h1>
                <Button size="small" type="primary"> <PlusCircleFilled/> New Teacher</Button>
            </div>
            <Table
                bordered={true}
                columns={
                    [
                        {
                            title:"ID",
                            dataIndex : "teacher_id"
                        },
                        // {
                        //     title :"First Name",
                        //     dataIndex : "fname"
                        // },
                        // {
                        //     title :"Last Name",
                        //     dataIndex : "lastname"
                        // },
                        {
                            title : "Name",
                            dataIndex : "fname",
                            sorter : (a,b) => a.fname.length - b.fname.length,
                            render : (_,record) => {
                                return record.fname +" - "+record.lastname;
                            }
                        },
                        {
                            title : "Gender",
                            dataIndex : "gender"
                        },
                        {
                            title : "Phone",
                            dataIndex : "tel"
                        },
                        {
                            title : "Email",
                            dataIndex : "email",
                            sorter : (a,b) => a.length - b.length,
                        },
                        {
                            title : "Desc",
                            dataIndex : "description"
                        },
                        {
                            title : "Action",
                            render : () => {
                                return (
                                    <Space>
                                        <DeleteOutlined style={{color:"brown"}}/>
                                        <EditOutlined/>
                                    </Space>
                                )
                            }
                        }

                    ]
                }
                dataSource={data}
            />
        </div>
    )
}

export default TeacherScreen;