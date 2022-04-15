import { Layout } from '../layouts/layout';
import {
  NoteCard,
  NoteInputCard,
  AddNoteButton,
} from '../components/components';

export const Archive = () => {
  return (
    <Layout>
      <AddNoteButton />
      {/* <div class='search__box__container'>
        <div class='search__box'>
          <i class='bx bx-search-alt'></i>
          <input class='search__input' type='search' name='search' />
          <button class='search__btn' type='submit'>
            <i class='bx bx-filter-alt'></i>
          </button>
        </div>
      </div> */}
      <div className='page__title__container'>
        <h1 className='page__title'>Archive</h1>
        <i className='bx bxs-box page__title__icon'></i>
      </div>
      <div className='notes'>
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </Layout>
  );
};
