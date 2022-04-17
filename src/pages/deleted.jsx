import { Layout } from '../layouts/layout';
import {
  NoteCard,
  NoteInputCard,
  AddNoteButton,
} from '../components/components';

export const Deleted = () => {
  return (
    <Layout>
      <AddNoteButton />
      <div className='page__title__container'>
        <h1 className='page__title'>Deleted</h1>
        <i className='bx bxs-trash page__title__icon'></i>
      </div>
      <div class='notes'>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </Layout>
  );
};
