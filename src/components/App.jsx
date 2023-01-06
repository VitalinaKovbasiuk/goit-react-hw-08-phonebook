import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { useDispatch } from 'react-redux';
import { AppContainer } from './App.styled';
const HomePage = lazy(() => import('.//pages/Home/Home'));
const RegisterPage = lazy(() => import('.//pages/Register/Register'));
const LoginPage = lazy(() => import('.//pages/Login/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const listVAriatns = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {},
    },
    hidden: { opacity: 0, z: -100 },
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <motion.div variants={listVAriatns} initial="hidden" animate="visible">
      <AppContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </AppContainer>
    </motion.div>
  );
}
