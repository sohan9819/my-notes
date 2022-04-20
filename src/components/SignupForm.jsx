import { useState } from 'react';
import { useAuthContext } from '../context/context';
import { Signup, navigate } from '../utilities/utilities';

export const SignupForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { setAuth } = useAuthContext();
  const [errMsg, setErrMsg] = useState('');

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    if (user.password === user.confirmPassword) {
      setUser((prev) => ({
        username: prev.username,
        email: prev.email,
        password: prev.password,
      }));
      signupHandler(user);
    } else {
      setUser((prev) => ({
        username: prev.username,
        email: prev.email,
        password: '',
        confirmPassword: '',
      }));
      setErrMsg("Passwords didn't match");
    }
  };

  const signupHandler = async (user) => {
    const { encodedToken, createdUser } = await Signup(user);
    try {
      if (encodedToken) {
        localStorage.setItem('AUTH_TOKEN', JSON.stringify(encodedToken));
        localStorage.setItem('username', JSON.stringify(createdUser.username));
        setAuth({
          isAuth: true,
          token: encodedToken,
          user: createdUser.username,
        });
        navigate('/home');
      } else {
        throw new Error('Signup failed');
        setErrMsg('Signup failed');
      }
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <section className='signup'>
      <form
        onSubmit={handleOnSubmit}
        onChange={() => {
          setErrMsg('');
        }}
      >
        <label className='auth__label' htmlFor='chk' aria-hidden='true'>
          Sign up
        </label>
        <p className={errMsg ? 'errMsg' : 'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>
        <input
          className='auth__input'
          type='text'
          name='username'
          placeholder='User name'
          required
          value={user.username}
          onChange={(evt) =>
            setUser((prev) => ({ ...prev, username: evt.target.value }))
          }
        />
        <input
          className='auth__input'
          type='email'
          name='email'
          placeholder='Email'
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
        <input
          className='auth__input'
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          required
          value={user.confirmPassword}
          onChange={(evt) =>
            setUser((prev) => ({ ...prev, confirmPassword: evt.target.value }))
          }
        />
        <button type='submit' className='auth__button'>
          Sign up
        </button>
      </form>
    </section>
  );
};
