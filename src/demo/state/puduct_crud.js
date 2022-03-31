
import React , {useState} from 'react';

const HomeScreen = () => {
    // code , name ,qty price 
    // design text input
    // add data
    // clear
    // list data
    // delete
    // edit
    const [code,setCode] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);
    const [indexHidden , setIndexHidden] = useState("");
    const [data,setData] = useState([]);

    const handleAdd = () => {
        if(indexHidden === ""){
            var objTmp = {
                "code" : code,
                "name" : name,
                "price" : price,
                "qty" : qty
            }
            // data.push(objTmp);
            setData([...data,objTmp]);
            handleClear();
        }else{
            data[indexHidden].code = code;
            data[indexHidden].name = name;
            data[indexHidden].price = price;
            data[indexHidden].qty = qty;
            setData([...data]);
            setIndexHidden("");
            handleClear();
        }
    }
    const handleClear = () => {
        setCode("");
        setName("");
        setPrice(0);
        setQty(0);
    }
    const handleDelete = (indexParam) => {
        var newData = data.filter((item,index)=> index !== indexParam)
        setData([...newData]);
    }
    const hadleEdit = (item,index) => {
        setCode(item.code);
        setName(item.name);
        setPrice(item.price);
        setQty(item.qty);
        setIndexHidden(index);
    }
    return (
        <div>
            {/* <h1>indexHidden: {indexHidden}</h1> */}
            <input 
                value={code}
                placeholder='product code'
                onChange={(event)=>setCode(event.target.value)}
            /><br/>
            <input 
                value={name}
                placeholder='product name'
                onChange={(event)=>setName(event.target.value)}
            /><br/>
            <input 
                value={price}
                placeholder='product price'
                onChange={(event)=>setPrice(event.target.value)}
            /><br/>
            <input 
                value={qty}
                placeholder='product quatity'
                onChange={(event)=>setQty(event.target.value)}
            /><br/>
            <button onClick={handleAdd}>{indexHidden === "" ? "Add" : "Update"}</button>
            <button onClick={handleClear}>Clear</button>
            <h1>List Product</h1>
            {
                data.map((item,index)=>{
                    return (
                        <div
                            style={{
                                padding:10,
                                margin:10
                            }}
                        >
                            <div>{index+1}. {item.code}-{item.name}</div>
                            <div>{item.price}</div>
                            <div>{item.qty}</div>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                            <button onClick={()=>hadleEdit(item,index)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default HomeScreen;