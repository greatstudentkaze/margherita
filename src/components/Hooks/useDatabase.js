import { useState, useEffect } from 'react';

const useDatabase = db => {
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    const ref = db.ref('goods');
    ref.on('value', snapshot => setDatabase(snapshot.val()));
  }, [db]);

  return database;
};

export default useDatabase;
