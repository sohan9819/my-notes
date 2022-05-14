import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/context';

export const Nav = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth } = useAuthContext();

  return (
    <nav className='nav'>
      <ul className='nav__links-list'>
        <NavLink to='/' className='nav__link'>
          <i className='bx bxs-edit-alt nav__logo'></i>
          <h3>TipTap Notes</h3>
        </NavLink>

        <NavLink to='/home' className='nav__link'>
          <i className='bx bxs-home-alt-2'></i>Home
        </NavLink>

        <NavLink to='/notebook' className='nav__link'>
          <i className='bx bxs-book'></i>Notebook
        </NavLink>

        <NavLink to='/favourite' className='nav__link'>
          <i className='bx bxs-heart'></i>Favourite
        </NavLink>

        <NavLink to='/archive' className='nav__link'>
          <i className='bx bxs-box'></i>Archive
        </NavLink>

        <NavLink to='/deleted' className='nav__link'>
          <i className='bx bxs-trash'></i>Deleted
        </NavLink>
      </ul>

      <div className='nav__icon__container'>
        {isAuth ? (
          <button
            onClick={() => {
              navigate('/auth');
            }}
            className='nav__login__button'
          >
            <i className='bx bx-log-in'></i> Login
          </button>
        ) : (
          <button
            onClick={() => {
              setAuth({ isAuth: false, token: '', user: '' });
              localStorage.clear();
              navigate('/auth');
            }}
            className='nav__login__button'
          >
            <i className='bx bx-log-out'></i> Logout
          </button>
        )}
      </div>
    </nav>
  );
};
