import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('database.json');

      if (!response.ok) throw new Error('Ошибка' + response.status);

      setData(await response.json());
    };

    fetchData()
      .catch(err => setError(err));
  }, []);

  return { data, error };
};

export default useFetch;
