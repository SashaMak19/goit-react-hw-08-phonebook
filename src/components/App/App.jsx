import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';
import { refresh } from 'redux/operations/operations';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading.. </p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route
          path="/users/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        ></Route>
        <Route
          path="/users/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/users/login" component={<PhoneBook />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export { App };
