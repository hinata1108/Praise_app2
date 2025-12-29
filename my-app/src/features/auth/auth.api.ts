import { supabase } from '../../lib/supabase';

// emailとpasswordを受け取ってsupabaseのsignUPを使ってauthに登録する。形式が違ったらエラー、正しければデータを返す
export const signUp = async (email: string, password: string,user_name: string) => {
  // １Authの登録
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  const user = data.user;
  // ２Profileの登録
  const {error:profilesError} =await supabase
  .from("profiles")
  .insert({
    id: user?.id,

    user_name
  })
if(profilesError) {throw profilesError;
}
  
  return {
    user
  };
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
