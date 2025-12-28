import {createPost} from '../features/posts/posts.api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function CreatePage() {
    const navigate = useNavigate();
    const [content ,setContent] =useState("")
    const [error,setError] = useState<string | null>(null);
    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      try{
        await createPost(content);
        navigate("/home");
      }
      catch(err:unknown){
        if(err instanceof Error){
          setError(err.message);
        }else{
          setError("投稿に失敗しました");
        }
      }
    }
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1>投稿作成</h1>
   <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required/>   
   <button type="submit" >投稿する</button>
      </form>
    </div>
  );
}