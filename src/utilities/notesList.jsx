// import { useAuthContext } from '../context/context';
import axios from 'axios';

export const notesList = async () => {
  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

  const url = '/api/notes';
  const headers = { authorization: authToken };

  try {
    const {
      data: { notes },
      status,
    } = await axios.get(url, {
      headers: headers,
    });

    console.log(notes);
    return notes;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
