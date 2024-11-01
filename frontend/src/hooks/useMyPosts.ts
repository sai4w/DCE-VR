import { Post } from "@src/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const useMyPosts = (id: string) => {
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_API_URL + "/myposts/" + id;
        const res = await axios.get(url);
        setMyPosts(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);
  const updatePost = (id: Post["_id"], reserv: Post["reservation"]) => {
    const post = myPosts.find((post) => post._id === id);
    console.log(post);
    console.log(id, reserv);
    if (!post) return;
    console.log("i'm here");
    setLoading(true);
    post.reservation = reserv;
    const url = import.meta.env.VITE_API_URL + "/post/" + id;
    axios
      .post(url, post)
      .then((res) => {
        if (res.status === 200) {
          setMyPosts((prev) => prev.map((p) => (p._id === id ? post : p)));
          console.log("updated");
        }
      })
      .catch(() => {
        setError("Une erreur est survenue");
      });
    setLoading(false);
  };
  return { myPosts, updatePost, loading, error };
};
