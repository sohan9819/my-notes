import { useState } from 'react';
import { useAuthContext } from '../context/context';
import { Login } from '../utilities/utilities';
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const testLogin = {
    email: 'adarshbalika@gmail.com',
    password: 'adarshBalika123',
  };

  const [errMsg, setErrMsg] = useState('');

  const { setAuth } = useAuthContext();
  const navigate = useNavigate();

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    loginHandler(user);
  };

  const loginHandler = async (user) => {
    try {
      const { encodedToken, foundUser } = await Login(user);
      if (encodedToken) {
        localStorage.setItem('AUTH_TOKEN', JSON.stringify(encodedToken));
        localStorage.setItem('username', JSON.stringify(foundUser.username));
        setAuth(() => ({
          isAuth: true,
          token: encodedToken,
          user: foundUser.username,
        }));
        // navigate('/home');
        console.log('Login successful');
      } else {
        throw new Error('Login failed! Check your filled details.');
        setErrMsg('Login failed! Check your filled details.');
      }
    } catch (error) {
      setErrMsg(error.message);
      console.error(error.message);
    }
  };

  return (
    <section className='login'>
      <form
        onSubmit={handleOnSubmit}
        onChange={() => {
          setErrMsg('');
        }}
      >
        <label className='auth__label' htmlFor='chk'>
          Login
        </label>
        <p className={errMsg ? 'errMsg' : 'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>
        <input
          className='auth__input'
          type='email'
          name='email'
          placeholder='Email'
          // autoComplete='off'
          required
          value={user.email}
          onChange={(evt) =>
            setUser((prev) => ({ ...prev, email: evt.target.value }))
          }
        />
        <input
          className='auth__input'
          type='password'
          name='password'
          placeholder='Password'
          required
          value={user.password}
          onChange={(evt) =>
            setUser((prev) => ({ ...prev, password: evt.target.value }))
          }
        />
        <button className='auth__button' type='submit'>
          Login
        </button>
      </form>
    </section>
  );
};
