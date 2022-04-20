import axios from 'axios';

export const addNotes = async (note) => {
  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  const headers = { authorization: authToken };

  console.log(authToken, headers);

  try {
    const {
      data: { notes },
      status,
    } = await axios.post('/api/notes', note, { headers: headers });
    console.log(notes, status);
  } catch (error) {
    console.log(error.message);
  }
};
