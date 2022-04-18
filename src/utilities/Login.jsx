import axios from 'axios';

export const Login = async (user) => {
  try {
    const { data } = await axios.post('/api/auth/login', user);
    return data;
  } catch (error) {
    return false;
  }
};
