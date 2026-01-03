import { useState,useEffect } from 'react';
import { fetchPosts ,fetchMyPosts} from './posts.api';


//Postの型定義
type Post = {
  id: number;
  content: string;
};



export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(setPosts)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}

//自分の投稿だけ取得するHook
export const MyPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyPosts().then(setPosts)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}
