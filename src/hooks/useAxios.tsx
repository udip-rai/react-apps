import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const useAxios = (axiosParams: any) => {
  const [response, setResponse] = useState<any>(undefined);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams]);

  return { response, error, loading };
};
