import React from 'react';
import "./App.css";
import HomeScreen from './screen/home/HomeScreen';
import CourseScreen from "./screen/course/CourseScreen";
import AboutScreen from "./screen/about/AboutScreen";
import StudentScreen from "./screen/student/StudentScreen";
import StudentPaymentScreen from "./screen/student_payment/StudentPaymentScreen";
import LoginScreen from './screen/auth/LoginScreen';
import Route404 from './screen/404/Route404';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Container from './screen/container/Container';

{/* <a href="" ></a> */}
const App = () => {

  return (
    <BrowserRouter>
      {/* design menu */}
     
      {/* <div className='main_menu'>
        <Link className='item_menu' to="/">Home</Link>
        <Link className='item_menu' to="/course">Course</Link>
        <Link className='item_menu' to="/about">About</Link>
        <Link className='item_menu' to="/student">Student</Link>
        <Link className='item_menu' to="/student_payment">Student Payemt</Link>
      </div> */}

      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/course' element={<CourseScreen/>} />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path='/student' element={<StudentScreen/>} />
          <Route path='/student_payment' element={<StudentPaymentScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path='*' element={<Route404/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;