import { Layout } from '../layouts/layout';
import { Navigate, useParams } from 'react-router-dom';
import { NoteEditForm } from '../components/components';
import { useNoteContext } from '../context/context';

export const NoteEdit = () => {
  const { noteId } = useParams();
  const { notes } = useNoteContext();
  const note = notes.notesHome.find((note) => note._id === noteId);

  return note === undefined ? (
    <Navigate to='*' />
  ) : (
    <Layout>
      <div className='page__title__container'>
        <h1 className='page__title'>Notebook</h1>
        <i className='bx bxs-book-content page__title__icon'></i>
      </div>
      <div className='notes'>
        <NoteEditForm {...note} />
      </div>
    </Layout>
  );
};
