import { supabase } from '../../lib/supabase';

// 新しいポストを作成する。形式が違ったらエラー、正しければデータを返す
export const  createPost= async (content:string) => {
//ユーザーを取得
    //dataの中のuserを取り出す
    const {data:{user}} =await supabase.auth.getUser();
    if (!user){throw new Error("ログインしてください")}
    //profileを作成
    const {error:upsertError} =await supabase.from ("profiles").upsert({id:user.id})
    if (upsertError) console.error("プロフィールの作成に失敗しました",upsertError);
    const { data, error } = await supabase.from('posts').insert([{content, user_id: user.id}]);
    if (error) throw error;
    return data;
}

//投稿一覧
export const fetchPosts =async () => {
    const {data,error} = await supabase.from("posts").select("*").order("created_at",{ascending:false});
    if(error) throw error;
    return data;    
}

//自分の投稿だけ
export const fetchMyPosts =async () => {
    const {data:{user}} =await supabase.auth.getUser();
    if (!user){throw new Error("ログインしてください")}
    const {data,error} = await supabase.from("posts").select().eq('user_id', user.id).order("created_at",{ascending:false});
    if(error) throw error;
    return data;    
}
