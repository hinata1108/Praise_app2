import { useState,useEffect } from 'react';
import { fetchPosts } from './posts.api';

export const Posts = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(setPosts)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}
