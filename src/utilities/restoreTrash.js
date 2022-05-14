import axios from 'axios';

export const restoreTrash = (note, auth) =>
  axios
    .post(
      `/api/notes`,
      {
        note: note,
      },
      {
        headers: {
          authorization: auth.token,
        },
      }
    )
    .then((res) => res.data)
    .then((data) => data.notes)
    .catch((error) => error.reponse);
