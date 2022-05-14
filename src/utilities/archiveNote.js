import axios from 'axios';

export const archiveNote = (note, auth) =>
  axios
    .post(
      `/api/notes/archives/${note._id}`,
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
