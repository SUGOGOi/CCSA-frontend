import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Login from './components/Auth/Login';
import ForgetPassword from './components/Auth/ForgetPassword';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import UploadNotes from './components/Admin/UploadNotes/UploadNotes';
import AdminCourse from './components/Admin/AdminCourse/AdminCourse';
import AdminNotes from './components/Admin/AdminNotes/AdminNotes';
import Users from './components/Admin/Users/Users';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from "react-hot-toast"
import { loaduser } from './redux/action/userAction';
import {ProtectedRoute} from "protected-route-react"

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });


  const {isAuthenticated,user,message,error} = useSelector(state=>state.user);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(loaduser())
  },[dispatch])


  useEffect(() =>{
    if(error){
      toast.error(error)
      dispatch({type:"clearError"})
    }
    if(message){
      toast.success(message)
      dispatch({type:"clearMessage"})
    }
  },[dispatch,error,message])




  return (
    <Router>
      <Header  isAuthenticated={isAuthenticated} user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated}  redirect={"/profile"} > <Login /></ProtectedRoute>} />

        <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={"/login"}  ><Profile/></ProtectedRoute>} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />

        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/uploadnotes" element={<UploadNotes />} />
        <Route path="/admin/courses" element={<AdminCourse />} />
        <Route path="/admin/notes" element={<AdminNotes />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
      <Toaster/>
    </Router>
  );
}

export default App;
