import { User } from "@src/types";
import axios from "axios";
import { useEffect, useState } from "react";
interface userProps {
  id: string;
}
export const useUser = ({ id }: userProps) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_API_URL + "/user/" + id;
        const res = await axios.get(url);
        setUser(res.data);
      } catch (error) {
        setError("Une erreur est survenue");
      }
    };
    fetchUser();
  }, [id]);
  return { user, loading, error };
};
