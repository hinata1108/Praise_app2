import {Likes} from '../features/likes/likes.hook';
import './Postcard.css';
type PostcardProps = {post:{
    id:number,
    content: string;
    profiles: {user_name: string}|null;
    created_at: string;}};


export function Postcard ({post}:PostcardProps) {
   const {likes,isLiked,toggleLikes,loading,countLikes} = Likes(post.id);

   return (
    <div className="postcard">
        <span className="user_name">
            {post.profiles?.user_name || "名無し"}
        </span>
        <span className="created_at">
            {new Date(post.created_at).toLocaleString()}
        </span>
        <div className="content">
            {post.content}
        </div>
        <div className="likes">
            <button onClick={toggleLikes} className={isLiked? "liked":"not-liked"}>
                👏すごい！
            </button>
            <span>{loading ? "..." : countLikes}いいね</span>
        </div>
    </div>
  
    );
}
