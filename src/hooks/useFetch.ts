import { useState, useEffect } from "react";

interface UseFetchProps {
  url: string;
}

interface UseFetchDataProps<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>({ url }: UseFetchProps): UseFetchDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
