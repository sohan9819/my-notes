import { createContext, useContext, useReducer, useEffect } from 'react';
import { useNoteContext } from './NotesContext';
import { search, sort } from '../utilities/utilities';
import { filterReducer } from '../reducers/filterReducer';

const FilterContext = createContext();

const initialFilter = {
  cards: [],
  search: '',
  sort: 'none',
};

const FilterContextProvider = ({ children }) => {
  const { notes } = useNoteContext();

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  useEffect(() => {
    notes.notesHome &&
      filterDispatch({ type: 'data', payload: notes.notesHome });
  }, [notes.notesHome]);

  const filterCurry =
    (...func) =>
    (filterState, cards) =>
      func.reduce((acc, filter) => filter(filterState, acc), cards);

  const filteredCards = filterCurry(search, sort)(
    filterState,
    filterState.cards
  );

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredCards }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
