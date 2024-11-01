import { useEffect, useState } from "react";
import { Signal } from "@src/types";
import axios from "axios";

export const useSignals = () => {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchSignals = async () => {
      setLoading(true);
      try {
        const url = import.meta.env.VITE_API_URL + "/signals";
        const res = await axios.get(url);
        setSignals(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchSignals();
  }, []);
  return { signals, loading, error };
};
