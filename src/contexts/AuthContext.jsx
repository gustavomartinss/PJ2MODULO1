import { createContext, useContext, useEffect, useState } from 'react';
import decode from 'jwt-decode';
import api from '../services/api';
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated =
    JSON.parse(localStorage.getItem('@ConnectionLab:token')) !== null;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@ConnectionLab:token'));
    const { _id } = !!token && decode(token);

    if (token) {
      api
        .get(`/users/${_id}`)
        .then((response) => {
          const currentUserData = response.data;
          delete currentUserData.password;

          const {userAdress} = currentUserData;

          setUser({...currentUserData, ...userAdress});
        })
        .catch((error) => console.log(error));
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const { data: userData } = await api.post('/auth/login', {
        email,
        password,
      });

      const { token, user } = userData;

      localStorage.setItem('@ConnectionLab:token', JSON.stringify(token));
      localStorage.setItem('@ConnectionLab:user', JSON.stringify(user));

      api.defaults.headers.Authorization = `Bearer ${token}`;

      const {userAdress} = user;

      setUser({...user, ...userAdress});

      return Promise.resolve(user);
    } catch (error) {
      const message =
        error.response.data.error || 'Ocorreu um erro ao efetuar login';
      throw new Error(message);
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node,
};