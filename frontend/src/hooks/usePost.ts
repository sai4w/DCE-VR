import { User, Post } from "@src/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const usePost = (id: string) => {
  const [post, setPost] = useState<Post>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_API_URL + "/post/" + id;
        const res = await axios.get(url);
        setPost(res.data.post);
        setUser(res.data.user);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return { user, post, loading, error };
};
