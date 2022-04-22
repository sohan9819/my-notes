import { Layout } from '../layouts/layout';
import { AddNoteButton } from '../components/components';

import { useNoteContext } from '../context/context';
import { TrashNoteCard, NoCards } from '../components/components';

export const Deleted = () => {
  const { notes, noteDispatch } = useNoteContext();

  return (
    <Layout>
      <AddNoteButton />
      <div className='page__title__container'>
        <h1 className='page__title'>Deleted</h1>
        <i className='bx bxs-trash page__title__icon'></i>
      </div>
      <div class='notes'>
        {/* NOTE CARDS HERE */}
        {notes.notesTrash.length != 0 ? (
          notes.notesTrash.map((note) => <TrashNoteCard {...note} />)
        ) : (
          <NoCards />
        )}
      </div>
    </Layout>
  );
};
