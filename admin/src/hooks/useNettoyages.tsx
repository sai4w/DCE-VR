import { useEffect, useState } from "react";
import axios from "axios";
import { Nettoyage } from "@src/types";

export const useNettoyages = () => {
  const [nettoyages, setNettoyages] = useState<Nettoyage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchNettoyages = async () => {
      setLoading(true);
      try {
        const url = import.meta.env.VITE_API_URL + "/nettoyages";
        const res = await axios.get(url);
        setNettoyages(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchNettoyages();
  }, []);
  return { nettoyages, loading, error };
};
