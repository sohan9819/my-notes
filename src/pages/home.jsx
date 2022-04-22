import { Layout } from '../layouts/layout';
import { NoteCard, AddNoteButton, NoCards } from '../components/components';
import { useNoteContext, useAuthContext } from '../context/context';
import { useEffect } from 'react';
import axios from 'axios';
import { NotAuth } from './NotAuth';

export const Home = () => {
  const { auth } = useAuthContext();

  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  const url = '/api/notes';
  const headers = { authorization: authToken };

  const { notes, notesDispatch } = useNoteContext();

  useEffect(() => {
    axios
      .get(url, { headers: headers })
      .then((res) => res.data)
      .then((data) => {
        notesDispatch({ type: 'Add_to_home', payload: data.notes });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return auth.isAuth === true ? (
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
        {/* NOTE CARDS HERE  */}
        {notes.notesHome.length != 0 ? (
          notes.notesHome.map((note) => <NoteCard {...note} />)
        ) : (
          <NoCards />
        )}
      </div>
    </Layout>
  ) : (
    <NotAuth />
  );
};
