import { useState, useEffect } from 'react';

const useAuth = authFirebase => {
  const [auth, setAuth] = useState(null);

  const authObject = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();

  const login = () => authObject.signInWithPopup(provider);

  const logout = () => authObject.signOut()
    .catch(err => console.error(err));

  useEffect(() => {
    authObject.onAuthStateChanged(user => {
      user ? setAuth(user) : setAuth(null);
    });
  }, [auth, authObject]);

  return { auth, login, logout };
};

export default useAuth;
