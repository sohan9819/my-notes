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
} from '../pages/pages';

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/mock' element={<Mockman />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/notebook' element={<Notebook />} />
      <Route path='/favourite' element={<Favourite />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/deleted' element={<Deleted />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
