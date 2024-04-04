import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CardLeftSide from "../../../Components/CardLeftSide";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const LeftSide = () => {

    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    const {categoryIdGenerate}  = useContext(AuthContext);

    useEffect( ()=>{
        fetch("./data/categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[]);

    useEffect( ()=> {
        fetch("./data/news.json")
        .then(res => res.json())
        .then(data => setNews(data))
    } ,[])
    // console.log(news)


    return (
        <div>
            <h3 className="text-3xl font-bold">All Caterogy </h3>

            {
                categories.map(categorie => <Link onClick={ ()=> categoryIdGenerate(categorie.id)}  key={categorie.id} className="block p-3 font-semibold ml-4 " > {categorie.name} </Link>)
            }

            {
                news.slice(21, 24).map((singleNews, index) => <CardLeftSide key={index} singleNews={singleNews}></CardLeftSide>)
            }
        </div>
    );
};

export default LeftSide;