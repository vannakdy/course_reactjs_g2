import React,{useState,useEffect} from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Space,
  Spin,
  message
} from "antd";
import {
  SaveFilled,
} from "@ant-design/icons";
import {fetchData} from "../../Helpler";
import {useNavigate,useParams} from "react-router-dom"

const {Option} = Select;
const {TextArea} = Input

const TeacherCreateScreen = () =>{
  
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();

  useEffect(()=>{
    if(params.id != undefined){
      setLoading(true)
      fetchData("api/teacher/"+params.id,{},"GET").then(res=>{
        if(res && res.data && res.data.length == 1){
          var objData = res.data[0];
          setLoading(false);
          form.setFieldsValue({
            fname:objData.fname,
            lname:objData.lastname,
            gender:objData.gender,
            phone:objData.tel,
            email:objData.email,
            description:objData.description,
          })
        }
      })
    }
  },[])

  const onFinish = (objValue) => {
    var method = (params.id != undefined ? "PUT" : "POST")
    debugger
    var objData = {
      "fname": objValue.fname,
      "lastname": objValue.lname,
      "gender": Number(objValue.gender),
      "tel": objValue.phone,
      "email": objValue.email,
      "description": objValue.description
    }
    if(params.id != undefined){
      objData.teacher_id = params.id;
    }
    setLoading(true);
    
    fetchData("api/teacher",objData,method).then(res=>{
      message.success("Insert success")
      setLoading(false)
      navigate("/teacher")
    })


  }

  const handelBack = () => {
    navigate("/teacher")
  }

  return (
    <div>
      
      <Spin
        spinning={loading}
      >
      <Form
        form={form}
        labelCol={{
          span:4
        }}
        wrapperCol={{
          span:20
        }}
        autoComplete={"off"}
        onFinish={onFinish}
      >

        <Form.Item
          
          wrapperCol={{
            offset:4,
            span:20
          }}
        >
          <h1>{params.id != undefined ? "Update Teacher" : "New Teacher"}</h1>
        </Form.Item>

        <Form.Item
          name="fname"
          label = "First name"
          rules={[
            {
              required: true,
              message: 'Please input teacher first name!',
            },
          ]}
        >
          <Input placeholder='First name'/>
        </Form.Item>

        <Form.Item
          name="lname"
          label = "Last name"
          rules={[
            {
              required: true,
              message: 'Please input teacher last name!',
            },
          ]}
        >
          <Input placeholder='Last name'/>
        </Form.Item>

        <Form.Item
          name="gender"
          label = "Gener"
        >
          <Select defaultValue={1}>
            <Option value={1}>Male</Option>
            <Option value={0}>Female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label = "Phone"
        >
          <Input placeholder='Phone'/>
        </Form.Item>

        <Form.Item
          name="email"
          label = "Email"
        >
          <Input placeholder='Email'/>
        </Form.Item>

        <Form.Item
          name="description"
          label = "Description"
        >
          <TextArea placeholder='Description'/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset:4,
            span:20
          }}
        >
          <Space>
            <Button type='primary' htmlType="submit"><SaveFilled/>{params.id != undefined ? "Update" : "Save"}</Button>
            <Button onClick={handelBack}>Back</Button>
          </Space>
        </Form.Item>

      </Form>
      </Spin>
    </div>
  )
}

export default TeacherCreateScreen;