import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import PostList from "../components/PostList";
import PostListProvider from "../Store/posts-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home"); //to store jounsi tab selected hai
  return (
    <PostListProvider>
    <div className="App-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}> </SideBar>

      <div className="content">
        <Header></Header>
        <Outlet></Outlet>
         
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
