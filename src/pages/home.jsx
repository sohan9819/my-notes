import { Layout } from '../layouts/layout';
import {
  NoteCard,
  NoteInputCard,
  AddNoteButton,
} from '../components/components';
import { notesList } from '../utilities/notesList';

export const Home = () => {
  return (
    <Layout>
      <AddNoteButton />
      <div className='search__box__container'>
        <div className='search__box'>
          <i className='bx bx-search-alt'></i>
          <input
            className='search__input'
            type='search'
            name='search'
            placeholder='Search your notes '
          />
          <button className='search__btn' type='submit'>
            <i className='bx bx-filter-alt'></i>
          </button>
        </div>
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
