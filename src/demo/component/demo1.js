
import React from 'react';

const MyComponent = () => {
    return (
       <h1>I am a component</h1>
    )
}

const ComponentName = (dataProps) => {
    return (
        <div
            style={{
                backgroundColor:dataProps.bgColor,
                padding:20,
                borderRadius:10,
                width : dataProps.width,
                marginTop : 10
            }}
        >
            <h1>{dataProps.name+""}</h1>
            <p>{dataProps.gender+""}</p>
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
            <ComponentName
                gender = "male"
                bgColor = "red"
                name = {"Ronaldo"}
                width = {200}
            />
            <ComponentName
                name = {"Messi"}
                bgColor = "yellow"
                gender = "male"
            />
            <h1>Demo render component</h1>
            {
                arrPerson.map((item,index)=>{
                    return (
                        <ComponentName
                            name = {item.name}
                            gender = {item.gender}
                            // bgColor = "yellow"
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
