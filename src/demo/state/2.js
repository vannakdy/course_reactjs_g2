import React, { useState } from "react";

const HomeScreen = () => {
    const [name,setName] = useState("Asus");
    const [arrName,setArrName] = useState([]);

    const handleChangeName = (event) => {
        // var name = event.target.value;
        setName(event.target.value);
    }

    const handleClickAdd = () => {

        // var arrTmp = arrName;
        // arrTmp.push(name);
        // setArrName([...arrTmp]);

        // arrName.push(name);
        // setArrName(arrName);

        // var tmpArr = [...arrName,name];
        // setArrName(tmpArr)

        setArrName([...arrName,name])

        setName(""); // clear text input name
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
            <button
                style={{
                    fonstSize:16,
                    padding:10,
                    width:100,
                    marginLeft:20
                }}
                onClick={handleClickAdd}
            >
                ADD
            </button>
            <h1>Product Category</h1>
            {
               arrName.map((data,i)=>{
                    return (
                        <div>
                            {data}
                        </div>
                    )
               })
            }
        </div>
    )
}

export default HomeScreen;