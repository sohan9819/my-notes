import { Layout } from '../layouts/layout';
import {
  FavouriteNoteCard,
  AddNoteButton,
  NoCards,
} from '../components/components';

import { useNoteContext } from '../context/context';

export const Favourite = () => {
  const { notes } = useNoteContext();

  return (
    <Layout>
      <AddNoteButton />

      <div className='page__title__container'>
        <h1 className='page__title'>Favourite</h1>
        <i className='bx bxs-heart page__title__icon'></i>
      </div>
      <div className='notes'>
        {/* NOTE CARDS HERE */}
        {notes.notesFavourites.length != 0 ? (
          notes.notesFavourites.map((note) => <FavouriteNoteCard {...note} />)
        ) : (
          <NoCards />
        )}
      </div>
    </Layout>
  );
};
