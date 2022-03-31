import React, { useState } from "react";
// add
// list
// delete
// update 
const HomeScreen = () => {
    const [name,setName] = useState("Asus");
    const [arrName,setArrName] = useState([]);
    const [indexUpdate,setIndexUpdate] = useState("");
    const [message,setMessage] = useState("");


    const handleChangeName = (event) => {
        // var name = event.target.value;
        setName(event.target.value);
    }

    const handleClickAdd = () => {
        if(indexUpdate !== ""){
            if(name){
                setMessage("Plese input category name to update!");
            }else{
                 // arrName = ["Dell","","Lenevo"]
                arrName[indexUpdate] = name;
                setArrName(arrName);
                setIndexUpdate("");
                setMessage("");
                setName("");
            }
           
        }else{
            // var arrTmp = arrName;
            // arrTmp.push(name);
            // setArrName([...arrTmp]);

            // arrName.push(name);
            // setArrName(arrName);

            // var tmpArr = [...arrName,name];
            // setArrName(tmpArr)

            if(name === ""){
                setMessage("Plese input category name!");
            }else{
                setArrName([...arrName,name])
                setName(""); // clear text input name
                setIndexUpdate("");
                setMessage("")
            }
        }
        
    }
    const handleEdit = (data,i) => {
        setName(data);
        setIndexUpdate(i);
    }

    const handleDelete = (paramIndex) => {
        console.log(paramIndex)
        var newItem = [];
        newItem = arrName.filter((item,index)=>index !== paramIndex);
        setArrName(newItem);
       
    }

    return (
        <div>
            <input 
                style={{
                    padding:10,
                    fontSiez:16,
                    paddingLeft:10
                }}
                value={name}
                placeholder="Cetegory name"
                onChange={handleChangeName}
            />
            <div style={{color:"red"}}>{message}</div>

            <button
                style={{
                    fonstSize:16,
                    padding:10,
                    marginTop:30,
                    width:120,
                }}
                onClick={handleClickAdd}
            >
                {indexUpdate !== "" ? "Update" : "Add"}
            </button>
            <h1>Product Category</h1>
            {
               arrName.map((data,i)=>{
                    return (
                        <div style={{
                            display:"flex",
                            flexDirection:'row',
                            padding:10,
                        }}>
                            <div>
                                {i+1}. {data}
                            </div>
                            <div style={{
                                marginLeft:20
                            }}>
                                <button onClick={()=>handleEdit(data,i)}>Edit</button>
                                <button onClick={()=>handleDelete(i)}>Delete</button>
                            </div>
                        </div>
                    )
               })
            }
        </div>
    )
}

export default HomeScreen;