import React , {useState} from "react";
import {BsFillPlusCircleFill} from "react-icons/bs";
import {fetchData} from "../../Helpler";
import {useNavigate} from "react-router-dom";
const CourseCreateScreen = () => {
   const navigate = useNavigate();
   const [name,setName ] = useState("");
   const [price,setPrice ] = useState(0);
   const [desc,setDesc ] = useState("");
   const [status,setStatus ] = useState(1);

  const handleAdd = () => {
    debugger
    var data = {
        name : name,
        price : price,
        description : desc,
        status : status
    }
    fetchData("api/courses",data,"POST").then(res=>{
        navigate("/course");
    });
  }

  return (
    <div>
      <h1>New Course</h1>
      <input onChange={(event)=>setName(event.target.value)} className="input" placeholder="Name" />
      <br />
      <input onChange={(event)=>setPrice(event.target.value)} className="input" placeholder="Price" />
      <br />
      <input onChange={(event)=>setDesc(event.target.value)} className="input" placeholder="Desctiption" />
      <br />
      <input onChange={(event)=>setStatus(event.target.value)} className="input" placeholder="Status" />
      <br />
      <button onClick={handleAdd} className="btn">
        <BsFillPlusCircleFill/>  Add
      </button>
    </div>
  );
};

export default CourseCreateScreen;
