import axios from 'axios';

export const editNote = (note, auth) => {
  return axios
    .post(
      `/api/notes/${note._id}`,
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
    .then((data) => {
      return data.notes;
    })
    .catch((error) => {
      return error.reponse;
    });
};
