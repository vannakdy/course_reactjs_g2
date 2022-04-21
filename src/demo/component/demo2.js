
import React from 'react';

const MyComponent = () => {
    return (
       <h1>I am a component</h1>
    )
}

const ComponentName = (props) => {
    const {
        bgColor,
        name,
        gender,
        width
    } = props;

    // const bgColor = props.bgColor;
    // const gender = props.gender;
    // const name = props.name;
    // const width = props.width;
    
    return (
        <div
            style={{
                backgroundColor:bgColor,
                padding:20,
                borderRadius:10,
                width : width,
                marginTop : 10
            }}
        >
            <h1>{name+""}</h1>
            <p>{gender+""}</p>
        </div>
    )
}

const HomeScreen = () =>{
    var arrPerson = [
        {
            id : 1,
            name : "Ronaldo",
            gender : "male",
        },
        {
            id : 2,
            name : "Messi",
            gender : "male",
        },
        {
            id : 3,
            name : "Jon",
            gender : "male",
        }
    ]
    return (
        <div>
            <MyComponent/>
            {/* <ComponentName
                gender = "male"
                bgColor = "red"
                name = {"Ronaldo"}
                width = {200}
            />
            <ComponentName
                name = {"Messi"}
                bgColor = "yellow"
                gender = "male"
            /> */}
            <h1>Demo render component</h1>
            {
                arrPerson.map((item,index)=>{
                    return (
                        <ComponentName
                            // name = {item.name}
                            // gender = {item.gender}
                            // bgColor = "gray"
                            
                            {...item}
                            bgColor = "gray"
                        /> 
                    )
                })
            }
            {/* <img 
                src=""
                width={}
            /> */}
            <h1>Hello react component</h1>
        </div>
    )
}
export default HomeScreen;


// Component ? 

// {/* <Mycomponent
//     name={}
//     pirce={}
//     qty={}
// />

// <img
//     src=""
//     width={}
// /> */}
