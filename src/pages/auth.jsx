import { Link } from 'react-router-dom';
import { LoginForm, SignupForm } from '../components/components';
import { useAuthContext } from '../context/context';

export const Auth = () => {
  const { auth } = useAuthContext();
  88;

  return (
    <div className='auth__container'>
      <Link to={auth.isAuth ? '/home' : '/auth'} className='auth__back__button'>
        <i class='bx bx-arrow-back'></i> Back to Home{' '}
      </Link>
      <div class='auth__form__wrapper'>
        {auth.isAuth ? (
          <div className='auth__success_wrapper'>
            <h1 className='auth__success_msg'>
              You are logged in successfuly as{' '}
              <span className='auth__username'>{auth.user}</span>
            </h1>
          </div>
        ) : (
          <>
            <input type='checkbox' id='chk' aria-hidden='true' />
            <SignupForm />
            <LoginForm />
          </>
        )}
      </div>

      <div className='social__auth__wrapper'>
        <a href='#' className='social__auth__icons'>
          <i href='#' class='bx bxl-google'></i>
        </a>
        <a href='#' className='social__auth__icons'>
          <i href='#' class='bx bxl-github'></i>
        </a>
        <a href='#' className='social__auth__icons'>
          <i href='#' class='bx bxl-meta'></i>
        </a>
      </div>
    </div>
  );
};
