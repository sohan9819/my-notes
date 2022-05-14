import axios from 'axios';

export const deleteNote = (note, auth) =>
  axios
    .delete(`/api/archives/delete/${note._id}`, {
      headers: { authorization: auth.token },
    })
    .then((res) => res.data)
    .then((data) => data.archives)
    .catch((error) => error.reponse);
