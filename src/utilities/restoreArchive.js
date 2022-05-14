import axios from 'axios';

export const restoreArchive = (note, auth) =>
  axios
    .post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: { authorization: auth.token },
      }
    )
    .then((res) => res.data)
    .catch((error) => error.reponse);
