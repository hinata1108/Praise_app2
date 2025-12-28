import { supabase } from '../../lib/supabase';

// 新しいポストを作成する。形式が違ったらエラー、正しければデータを返す
export const  createPost= async (user_name:string, content:string) => {
    const { data, error } = await supabase.from('posts').insert({
};

//ログイン
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data.user;
};

// ログアウト
export const signOut = async () => {
  await supabase.auth.signOut();
};