import React,{useState} from "react";

// Delcare new state

const HomeScreen = () => {
    // React state
    const [y,setY] = useState(0); // declare in react by useState fun
    const [z,setZ] = useState(0); // declare in react by useState fun
    const [name,setName] = useState("Dara");
    const [arrName,setArrName] = useState(["Prono","Messi","Ronaldo"]);
    const [count,setCount] = useState(0);

    var x = 100;

    const handleClickMe = () => {
        x = 200; //// can not change value
        // y = 400; // can not change value
        // z = 1000; // can not change value
        setY("Bopha"+100); // setter of state y => render agian
        setZ(1000);// setter of state z => render agian
        setArrName([]);
    }

    const handleIncrease = (param) => {
        alert(param[1])
        setCount(count+2);
    }

    const handleDescrease = (param1,param2,param3) => {
        alert(param1+" "+param2+" " +param3);
        setCount(count-2);
    }

    return(
        <div>
            <h1>HomeScreen</h1>
            <button onClick={handleClickMe}>Click Me</button>
            <h1>x: {x}</h1>
            <h1>y: {y}</h1>
            <h1>z: {z}</h1>
            <h1>name : {name}</h1>
            {
                arrName.map((item,index)=>{
                    return(
                        <div>
                            {item}
                        </div>
                    )
                })
            }
            <h1>Counter</h1>

            {/* <button onClick={handleIncrease}>+</button>
            <button onClick={handleDescrease}>-</button> */}

            {/* pass arg */}
            <button onClick={()=>handleIncrease([3,4,5])}>+</button>
            <button onClick={()=>handleDescrease(100,200)}>-</button>

            {/* <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button> */}

            {/* <button 
                onClick={()=>{
                    var nameTmp = "Sok";
                    setCount(count+1);
                    setName(nameTmp);
                    handleClickMe();
                }}
            >+</button>
            <button onClick={()=>setCount(count-1)}>-</button> */}

            <h1 style={{color:"red"}}>{count}</h1>
        </div>
    )
}

export default HomeScreen;