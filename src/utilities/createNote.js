import axios from 'axios';

export const createNote = (note, headers) => {
  return axios
    .post(
      '/api/notes',
      {
        note: note,
      },
      { headers: headers }
    )
    .then((res) => res.data)
    .then((data) => {
      return data.notes;
    })
    .catch((error) => {
      return error.response;
    });
};
