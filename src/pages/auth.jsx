import { Link } from 'react-router-dom';

export const Auth = () => {
  return (
    <div className='auth__container'>
      <Link to='/' className='auth__back__button'>
        <i class='bx bx-arrow-back'></i> Back to Home{' '}
      </Link>
      <div class='auth__form__wrapper'>
        <input type='checkbox' id='chk' aria-hidden='true' />

        <div class='signup'>
          <form>
            <label className='auth__label' for='chk' aria-hidden='true'>
              Sign up
            </label>
            <input
              className='auth__input'
              type='text'
              name='txt'
              placeholder='User name'
              required=''
            />
            <input
              className='auth__input'
              type='email'
              name='email'
              placeholder='Email'
              required=''
            />
            <input
              className='auth__input'
              type='password'
              name='pswd'
              placeholder='Password'
              required=''
            />
            <input
              className='auth__input'
              type='password'
              name='pswd'
              placeholder='Confirm Password'
              required=''
            />
            <button className='auth__button'>Sign up</button>
          </form>
        </div>

        <div class='login'>
          <form>
            <label className='auth__label' for='chk' aria-hidden='true'>
              Login
            </label>
            <input
              className='auth__input'
              type='email'
              name='email'
              placeholder='Email'
              required=''
            />
            <input
              className='auth__input'
              type='password'
              name='pswd'
              placeholder='Password'
              required=''
            />
            <button className='auth__button'>Login</button>
          </form>
        </div>
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
