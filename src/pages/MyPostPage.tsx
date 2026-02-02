import {MyPosts} from '../features/posts/posts.hook';
import {Postcard} from '../components/postcards';

export function MyPostPage() {
  const {posts,loading} = MyPosts();
  if (loading) return <div>Loading...</div>;
  return(
    <div>
      <h2>自分の投稿</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Postcard post={post} />
          </div>
      ))}
    </div>
  );
}