import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn,signUp } from '../features/auth/auth.api';
import './AuthPage.css';


export function AuthPage() {
  const navigate = useNavigate();
  const [ activeTab, setActiveTab] = useState<'signin' | 'signup'>('signup');
//   signin用
  const [loginemail, setloginEmail] = useState('');
  const [loginpassword, setloginPassword] = useState('');
  const [loginerror, setloginError] = useState<string | null>(null);
  const [loginloading, setloginLoading] = useState(false);
  // signup用
  const [signupuser_name, setsignupUserName] = useState('');
  const [signupemail, setsignupEmail] = useState('');
  const [signuppassword, setsignupPassword] = useState('');
  const [signuperror, setsignupError] = useState<string | null>(null);
  const [signuploading, setsignupLoading] = useState(false);

    const handleSignupSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();
        setsignupLoading(true);
        setsignupError(null);
        try{
            await signUp(signupemail,signuppassword,signupuser_name);
        } catch(err:unknown) {
             if (err instanceof Error) {
                setsignupError(err.message);
             } else {
                setsignupError("登録に失敗しました");
            }
             }
             finally {
                setsignupLoading(false);
             }
        }
    
    const handleSignInSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        setloginLoading(true);
        try {
            await signIn(loginemail,loginpassword);
            navigate("/home");
        } catch(err:unknown){
            if (err instanceof Error){
                setloginError(err.message);
            } else {setloginError("ログインに失敗しました")}
        } finally {
            setloginLoading(false);
        }
    };
    return (
    <div className="page">
        <div className="tab">
            <div className="tab_buttons">
                <button className={activeTab === "signup" ? "active" : ""} onClick={()=>setActiveTab("signup")}>
                    新規登録
                </button>
                <button className={activeTab === "signin" ? "active" : ""} onClick={()=>setActiveTab("signin")}>
                    ログイン
                </button>
            </div>

            {activeTab==="signup" ?(
                <form className="form" onSubmit={handleSignupSubmit}>
                <div className="input_group">
                <label htmlFor="signupuser_name">ユーザー名</label>
                <input type="text" value={signupuser_name} onChange={(e)=>setsignupUserName(e.target.value)}></input>
                <label htmlFor="signup_email">メールアドレス</label>
                <input type="email" value={signupemail} onChange={(e)=>setsignupEmail(e.target.value)} />
                <label htmlFor="signuppassword">パスワード</label>
                <input type="password" value={signuppassword} onChange={(e)=>setsignupPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={signuploading}>
                    {signuploading ?"登録中…":"登録"}</button>
                    {signuperror && <p style={{ color: 'red' }}>{signuperror}</p>}
                </form>):(
                <form className="form" onSubmit={handleSignInSubmit}>
                <div className="input_group">
                <label htmlFor="signin_email">メールアドレス</label>
                <input type="email" value={loginemail} onChange={(e)=>setloginEmail(e.target.value)} />
                <label htmlFor="signinpassword">パスワード</label>
                <input type="password" value={loginpassword} onChange={(e)=>setloginPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={loginloading}>
                    {loginloading ?"ログイン中…":"ログイン"}</button>
                    {loginerror && <p style={{ color: 'red' }}>{loginerror}</p>}
                </form>)}

        </div>
    </div>
    );
}
        
