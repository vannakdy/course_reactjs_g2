import React from 'react';
import "./App.css";
import HomeScreen from './screen/home/HomeScreen';
import CourseScreen from "./screen/course/CourseScreen";
import AboutScreen from "./screen/about/AboutScreen";
import StudentScreen from "./screen/student/StudentScreen";
import StudentPaymentScreen from "./screen/student_payment/StudentPaymentScreen";
import LoginScreen from './screen/auth/LoginScreen';
import TeacherScreen from './screen/teacher/TeacherScreen';
import TeacherCreateScreen from './screen/teacher/TeacherCreateScreen';
import Route404 from './screen/404/Route404';
import CourseCreateScreen from './screen/course/CourseCreateScreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Container from './screen/container/Container';
const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          
          <Route path='/course' element={<CourseScreen/>} />
          <Route path='/course/create/' element={<CourseCreateScreen/>} />
          <Route path='/course/create/:id' element={<CourseCreateScreen/>} />

          <Route path='/teacher' element={<TeacherScreen/>} />
          <Route path='/teacher/create' element={<TeacherCreateScreen/>} />
          <Route path='/teacher/create/:id' element={<TeacherCreateScreen/>} />
          
          
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