import { supabase } from '../../lib/supabase';

// 新しいポストを作成する。形式が違ったらエラー、正しければデータを返す
export const  createPost= async (content:string) => {
    const { data, error } = await supabase.from('posts').insert({content});
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
export const fetchMyPosts =async (userId: string) => {
    const {data,error} = await supabase.from("posts").select().eq('user_id', userId).order("created_at",{ascending:false});
    if(error) throw error;
    return data;    
}
