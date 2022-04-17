import { Layout } from '../layouts/layout';
import {
  NoteCard,
  NoteInputCard,
  AddNoteButton,
} from '../components/components';

export const Favourite = () => {
  return (
    <Layout>
      <AddNoteButton />

      <div className='page__title__container'>
        <h1 className='page__title'>Favourite</h1>
        <i className='bx bxs-heart page__title__icon'></i>
      </div>
      <div className='notes'>
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
