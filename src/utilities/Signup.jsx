import axios from 'axios';

export const Signup = async (user) => {
  try {
    const { data } = await axios.post('/api/auth/signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return false;
  }
};
