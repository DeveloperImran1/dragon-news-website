import { useLoaderData } from "react-router-dom";
import HomePostCard from "./HomePostCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const HomePost = () => {
    const [allPosts, setAllPosts] = useState([]);

    const { categoryId } = useContext(AuthContext);
    console.log(categoryId)

    const allPost = useLoaderData();
    useEffect(() => {
        setAllPosts(allPost);

        if (categoryId) {
            const categoryPost = allPost.filter(post => post.category_id == categoryId);
            setAllPosts(categoryPost);
            console.log(categoryPost)
        }
    }, [categoryId])

    console.log(allPost)
    return (
        <div>
            {
                allPosts.map(post => <HomePostCard post={post}></HomePostCard>)
            }
        </div>
    );
};

export default HomePost;