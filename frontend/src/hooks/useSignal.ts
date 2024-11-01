import { User, Signal } from "@src/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const useSignal = (id: string) => {
  const [signal, setSignal] = useState<Signal>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchSignal = async () => {
      setLoading(true);
      try {
        const url = import.meta.env.VITE_API_URL + "/signal/" + id;
        const res = await axios.get(url);
        setSignal(res.data.signal);
        setUser(res.data.user);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchSignal();
  }, [id]);
  return { user, signal, loading, error };
};
