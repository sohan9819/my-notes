import { Nav } from '../components/Nav';
import { useAuthContext } from '../context/context';
import { navigate } from '../utilities/navigate';

export const Layout = ({ children }) => {
  const { auth } = useAuthContext();

  return auth.isAuth ? (
    <div className='main-container'>
      <Nav />
      <div className='container'>{children}</div>
    </div>
  ) : (
    navigate('/auth')
  );
};
