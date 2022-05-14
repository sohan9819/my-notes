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
      // console.log(data.notes);
      // notesDispatch({ type: 'Add_to_home', payload: data.notes });
      // notify('Note edited successfully', 'success');
      // navigate('/home');
      return data.notes;
    })
    .catch((error) => {
      return error.reponse;
    });
};
