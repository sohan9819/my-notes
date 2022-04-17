import { Layout } from '../layouts/layout';
import { NoteCard, NoteInputCard } from '../components/components';

export const Notebook = () => {
  return (
    <Layout>
      <div className='page__title__container'>
        <h1 className='page__title'>Notebook</h1>
        <i className='bx bxs-book-content page__title__icon'></i>
      </div>
      <div className='notes'>
        <NoteInputCard />
        <button className='note__create__button'>Create note</button>
      </div>
    </Layout>
  );
};
