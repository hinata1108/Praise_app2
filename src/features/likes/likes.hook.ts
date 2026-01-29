import {fetchLikes,deleteLikes,addLikes} from "./likes.api"
import { useState,useEffect } from "react";
import {useAuth} from "../auth/auth.hooks"

// いいねの型定義
type Like = {
    id:number;
    post_id:number;
    user_id:string;
}

export const Likes = (postId:number) => {
    const [likes,setLikes] =useState<Like[]>([]);
    const[loading,setLoading]=useState(true);
    const[isLiked,setIsLiked]=useState(false);
    const {user} = useAuth();
useEffect(() => {
    fetchLikes(postId).then((data)=>{setLikes(data)
//   今のユーザーがいいねしているのかの判定 
    
    if (user){const liked =data.some((like)=> like.user_id === user.id)
        setIsLiked(liked)}
    })
    .finally(()=>{
        setLoading(false);
    })
},[postId,user]);


// トグル機能
    const toggleLikes = async() => {
        if(!user){throw new Error("ログインしてください")}

        try{
            setLoading (true);
        if (isLiked){
            await deleteLikes(postId);
            setLikes(likes.filter((like)=> like.user_id !== user.id))
            setIsLiked(false);
        }
        else {
            await addLikes(postId);
            const newLikes =await fetchLikes(postId);
            setLikes(newLikes)
            setIsLiked(true);
        }} catch (error) {
            console.error(error)
            alert("いいねの更新に失敗しました")
        } finally {
            setLoading(false);
        }
    };

    //言い値の数数える
    const countLikes = likes.length
    
    return{
        likes,
        isLiked,
        toggleLikes,
        loading,
        countLikes

    };
}