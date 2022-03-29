import React  from "react";
import {Link} from 'react-router-dom';

const Container = (props) => {
    return(
        <div>
            <div className='main_menu'>
                <Link className='item_menu' to="/">Home</Link>
                <Link className='item_menu' to="/course">Course</Link>
                <Link className='item_menu' to="/about">About</Link>
                <Link className='item_menu' to="/student">Student</Link>
                <Link className='item_menu' to="/student_payment">Student Payemt</Link>
                <Link className='item_menu' to="/student_payment">Student Payemt</Link>
            </div>
            <div style={{height:600,padding:30}}>
                {props.children}
            </div>
            <div style={{padding:10,backgroundColor:'red'}}>
                <h1>footerfooterfooter</h1>
            </div>
        </div>
    )
}

export default Container;