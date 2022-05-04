import React  from "react";
import {Link} from 'react-router-dom';
import LoadingCenter from "../../component/loading/LoadingCenter";
const Container = (props) => {
    const is_login = localStorage.getItem("is_login");
    const handleLogout = () => {
        localStorage.setItem("is_login","false");
        window.location.href = "/login"
    }
    return(
        <div>
            {is_login == "true" ?  
                <div className='main_menu'>
                    <Link className='item_menu' to="/">Home</Link>
                    <Link className='item_menu' to="/course">Course</Link>
                    <Link className='item_menu' to="/about">About</Link>
                    <Link className='item_menu' to="/student">Student</Link>
                    <Link className='item_menu' to="/student_payment">Student Payemt</Link>
                    <Link className='item_menu' to="/login"  onClick={handleLogout} >Logout</Link>
                </div>
                :
                <div className='main_menu'>
                    <Link className='item_menu' to="/">Brand Name</Link>
                </div>
            }
            <div style={{height:600,padding:30}}>
                {props.children}
            </div>
        </div>
    )
}

export default Container;