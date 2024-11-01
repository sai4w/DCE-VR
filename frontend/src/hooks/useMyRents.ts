import { Post } from "@src/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const useMyRents = (id: string) => {
  const [myRents, setMyRents] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_API_URL + "/myrents/" + id;
        const res = await axios.get(url);
        setMyRents(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);
  return { myRents, loading, error };
};
