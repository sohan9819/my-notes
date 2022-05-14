import { Layout } from '../layouts/layout';
import { NoteCard, AddNoteButton, NoCards } from '../components/components';
import {
  useNoteContext,
  useAuthContext,
  useFilterContext,
} from '../context/context';
import { useEffect } from 'react';
import axios from 'axios';
import { NotAuth } from './NotAuth';
import { tooltip } from '../utilities/utilities';

export const Home = () => {
  const { auth } = useAuthContext();

  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  const url = '/api/notes';
  const headers = { authorization: authToken };

  const { notesDispatch } = useNoteContext();
  const { filterState, filterDispatch, filteredCards } = useFilterContext();

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

  const searchHandler = (evt) => {
    filterDispatch({ type: 'search', payload: evt.target.value });
  };

  const sortHandler = (evt) => {
    switch (filterState.sort) {
      case 'asc':
        filterDispatch({ type: 'sort', payload: 'dsc' });
        break;
      case 'dsc':
        filterDispatch({ type: 'sort', payload: 'none' });
        break;
      case 'none':
        filterDispatch({ type: 'sort', payload: 'asc' });
        break;
      default:
        break;
    }
  };

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
            onChange={searchHandler}
          />
          <span className='search__btn' type='submit' onClick={sortHandler}>
            <i class='bx bx-sort' data-tip data-for='sort'></i>
            {tooltip('sort', `Sorted in ${filterState.sort}`)}
          </span>
          {/* <button className='search__btn' type='submit'>
            <i className='bx bx-filter-alt'></i>
          </button> */}
        </div>
      </div>
      <div className='notes'>
        {/* NOTE CARDS HERE  */}
        {filteredCards.length != 0 ? (
          filteredCards.map((note) => <NoteCard {...note} />)
        ) : (
          <NoCards />
        )}
        {/* {notes.notesHome.length != 0 ? (
          notes.notesHome.map((note) => <NoteCard {...note} />)
        ) : (
          <NoCards />
        )} */}
      </div>
    </Layout>
  ) : (
    <NotAuth />
  );
};
