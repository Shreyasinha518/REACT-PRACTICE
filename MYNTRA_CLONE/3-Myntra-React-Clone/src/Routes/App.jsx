import { Outlet } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
//import viteLogo from '/vite.svg'
import "../App.css";
//import Bag from "../components/Bag";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
//import HomeItem from "../components/HomeItem";
//import Home from "./home";
function App() {
  const fetchStatus=useSelector(store=>store.fetchStatus);
  

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching?<LoadingSpinner/>:
     <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
}

export default App;
