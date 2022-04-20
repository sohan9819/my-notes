import axios from 'axios';

export const Login = async (user) => {
  try {
    const { data } = await axios.post('/api/auth/login', user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
    return false;
  }
};
