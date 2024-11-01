import { Post } from "@src/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_API_URL + "/posts";
        const res = await axios.get(url);
        setPosts(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, loading, error };
};
