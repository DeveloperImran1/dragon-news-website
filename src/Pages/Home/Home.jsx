import { useEffect, useState } from "react";
import HomePost from "../../Components/HomePost";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";
import Marque from "./Marque";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect( ()=> {
        fetch("./data/news.json")
        .then(res => res.json())
        .then(data => setNews(data))
    } ,[])


    return (
        <div className="font-poppins ">
            <Header></Header>
            <Marque></Marque>
            <NavBar></NavBar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="lg:col-span-2 border">
                    {
                        <Outlet></Outlet>
                    }
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>

            </div>
        </div>
    );
};

export default Home;