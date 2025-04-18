import './App.css'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import toast, { Toaster } from 'react-hot-toast';





function App() {


  return (

    <>
    <Header></Header>
    <Toaster></Toaster>
    <div className='min-h-[81vh] my-20 '>
      <Outlet></Outlet>

    </div>

      <Footer></Footer>
    </>




  )
}

export default App
