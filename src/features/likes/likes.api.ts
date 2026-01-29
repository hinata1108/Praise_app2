import {supabase} from '../../lib/supabase';


// いいね追加する機能
export const addLikes = async (postId:number) => {
    const {data:{user}} =await supabase.auth.getUser();
    if (!user){throw new Error("ログインしてください")}
    const {data,error} =await supabase.from("like").insert([{post_id:postId,user_id:user.id}])
    if(error) throw error;
    return data;
}

// 言い値削除
export const deleteLikes =async (postId:number) => {
    const {data:{user}} =await supabase.auth.getUser();
    if (!user){throw new Error("ログインしてください")}
    const {data,error} =await supabase.from("like").delete().match({post_id:postId,user_id:user.id})
    if(error) throw error;
    return data;
}

//言い値取得
export const fetchLikes =async (postId:number) => {
    const {data,error} = await supabase.from("like").select("*").eq("post_id",postId);
    if(error) throw error;
    return data;
}