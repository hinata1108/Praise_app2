import {createPost} from '../features/posts/posts.api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function CreatePage() {
    const navigate = useNavigate();
    const [content ,setContent] =useState("")
    const [error,setError] = useState<string | null>(null);
    const handleSubmit = async () => {
      try{
        await createPost(content);
        navigate("/home");
      }
      catch(err:unknown){
        if(err instanceof Error){
          setError(err.message);
        }
        else{
          setError("投稿に失敗しました");
        }
      }
    }
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <h1>投稿作成</h1>
   <textarea  value={content} onChange={(e) => setContent(e.target.value)} required/>   
   <button type="submit" onClick={handleSubmit}>投稿する</button>
    </div>
  );
}