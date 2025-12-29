import {Posts} from '../features/posts/posts.hook';


export function HomePage() {
  const {posts,loading} = Posts();
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h2>みんなの投稿</h2>
      {posts.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
}