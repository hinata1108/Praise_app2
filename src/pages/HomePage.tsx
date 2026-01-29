import {Posts} from '../features/posts/posts.hook';
import { Likes } from '../features/likes/likes.hook';
import {Postcard} from '../components/postcards';


export function HomePage() {
  const {posts,loading} = Posts();
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h2>みんなの投稿</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Postcard post={post} />
          </div>
      ))}
    </div>

  );
}