import { Signal } from "@src/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const useMesSignaux = (id: string) => {
  const [signaux, setSignaux] = useState<[Signal]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchSignal = async () => {
      setLoading(true);
      try {
        const url = import.meta.env.VITE_API_URL + "/messignaux/" + id;
        const res = await axios.get(url);
        setSignaux(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchSignal();
  }, [id]);
  return { signaux, loading, error };
};
