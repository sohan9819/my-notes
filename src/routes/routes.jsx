import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';
import {
  LandingPage,
  Home,
  Notebook,
  Favourite,
  Archive,
  Deleted,
  Auth,
  NotFound,
  NoteEdit,
} from '../pages/pages';
import { useAuthContext } from '../context/context';
import { Navigate } from 'react-router-dom';

export const PageRoutes = () => {
  const { auth } = useAuthContext();
  const { isAuth } = auth;

  return (
    <Routes>
      <Route path='/mock' element={<Mockman />} />
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/home'
        element={isAuth ? <Home /> : <Navigate to='/auth' />}
      />
      <Route
        path='/notebook'
        element={isAuth ? <Notebook /> : <Navigate to='/auth' />}
      />
      <Route
        path='/favourite'
        element={isAuth ? <Favourite /> : <Navigate to='/auth' />}
      />
      <Route
        path='/archive'
        element={isAuth ? <Archive /> : <Navigate to='/auth' />}
      />
      <Route
        path='/deleted'
        element={isAuth ? <Deleted /> : <Navigate to='/auth' />}
      />
      <Route
        path='/auth'
        element={isAuth ? <Navigate to='/home' /> : <Auth />}
      />
      <Route path='/home/edit/:noteId' element={<NoteEdit />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/404' element={<NotFound />} />
    </Routes>
  );
};
