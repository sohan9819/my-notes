import { Layout } from '../layouts/layout';
import {
  ArchiveNoteCard,
  AddNoteButton,
  NoCards,
} from '../components/components';
import axios from 'axios';
import { useNoteContext } from '../context/NotesContext';
import { useEffect } from 'react';

export const Archive = () => {
  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

  const url = '/api/archives';
  const headers = { authorization: authToken };

  const { notes, notesDispatch } = useNoteContext();

  useEffect(() => {
    axios
      .get(url, { headers: headers })
      .then((res) => res.data)
      .then((data) => {
        notesDispatch({ type: 'Add_to_archive', payload: data.archives });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <AddNoteButton />
      <div className='page__title__container'>
        <h1 className='page__title'>Archive</h1>
        <i className='bx bxs-box page__title__icon'></i>
      </div>
      <div className='notes'>
        {/* Note card here  */}
        {notes.notesArchive.length != 0 ? (
          notes.notesArchive.map((note) => <ArchiveNoteCard {...note} />)
        ) : (
          <NoCards />
        )}
      </div>
    </Layout>
  );
};
