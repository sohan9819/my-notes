import axios from 'axios';

export const addNotes = async (note) => {
  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  const headers = { authorization: authToken };

  try {
    const {
      data: { notes },
      status,
    } = await axios.post('/api/notes', { note: note }, { headers: headers });
    return { notes, status };
  } catch (error) {
    console.log(error.message);
  }
};
