import { Nav } from '../components/Nav';

export const Layout = ({ children }) => {
  return (
    <div className='main-container'>
      <Nav />
      <div className='container'>{children}</div>
    </div>
  );
};
