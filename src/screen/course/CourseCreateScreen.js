import React , {useState,useEffect} from "react";
import {BsFillPlusCircleFill} from "react-icons/bs";
import {fetchData} from "../../Helpler";
import {useNavigate,useParams} from "react-router-dom";
import {Button, Input,InputNumber, Select, Space,message} from "antd";
import {FileAddFilled,FileAddOutlined,} from "@ant-design/icons"
const CourseCreateScreen = () => {
   const {Option} = Select;
   const params = useParams();
   const navigate = useNavigate();
   const [name,setName ] = useState("");
   const [price,setPrice ] = useState(0);
   const [desc,setDesc ] = useState("");
   const [status,setStatus ] = useState(1);
   const [loading,setLoading] = useState(false);

  useEffect(()=>{
    var id = params.id;
    getCourseById(id)
  },[])

  const getCourseById = (id) => {
    fetchData("api/courses/"+id,{},"GET").then(res=>{
      if(res){
        var data = res.data;
        if(data && data.length == 1){
          setName(data[0].name);
          setPrice(data[0].price);
          setDesc(data[0].description);
          setStatus(data[0].status);
        }
      }
    })
  }

  const handleAdd = () => {
    if(params.id === null){
      var data = {
        name : name,
        price : price,
        description : desc,
          status : status
      }
      setLoading(true)
      fetchData("api/courses",data,"POST").then(res=>{
          message.success("Course create successfully!");
          setLoading(false)
          navigate("/course");
      });
    }else{
      var data = {
          course_id : params.id,
          name : name,
          price : price,
          description : desc,
          status : status
      }
      setLoading(true)
      fetchData("api/courses",data,"PUT").then(res=>{
          message.success("Course update successfully!");
          setLoading(false)
          navigate("/course");
      });
    }
   
  }

  const handelAddNew = () => {
    var data = {
        name : name,
        price : price,
        description : desc,
        status : status
    }
    setLoading(true)
    fetchData("api/courses",data,"POST").then(res=>{
        message.success("Course create successfully!");
        setLoading(false);
        setName("");
        setPrice(0);
        setDesc("");
        setStatus(1);
    });
  }

  const handeCancel = () => {
    navigate("/course");
  }

  return (
    <div>
      <div className="txt_main">{params.id ? "EDIT" : "NEW"} Course</div><br/>
      <div>
        <Input
          placeholder="Name"
          value={name}
          onChange={(event)=>setName(event.target.value)}
        />
      </div><br/>
      <div>
        <InputNumber
          placeholder="Price"
          value={price}
          style={{width:"100%"}}
          onChange={(value)=>setPrice(value)}
        />
      </div><br/>
      <div>
        <Input.TextArea
          value={desc}
          placeholder="Desciption"
          onChange={(event)=>setDesc(event.target.value)}
        />
      </div><br/>
      <div>
        <Select
          defaultValue={1}
          value={status}
          onChange={(value)=>setStatus(value)}
          style={{width:"100%"}}
        >
          <Option value={1}>Enabled</Option>
          <Option value={0}>Disabled</Option>
        </Select>
      </div><br/>

      <Space>
        <Button loading={loading} onClick={handleAdd} style={{backgroundColor:"green",color:"white",width:100}}><FileAddFilled/>{params.id ? "Update" : "Add"}</Button>
        {params.id == null && <Button onClick={handelAddNew} type="primary"><FileAddOutlined/> Add New</Button>}
        <Button onClick={handeCancel}>Back</Button>
      </Space>
    </div>
  );
};

export default CourseCreateScreen;
