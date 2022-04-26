import { createContext, useContext, useReducer } from 'react';
import { notesReducer } from '../reducers/notesReducer';

const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [notes, notesDispatch] = useReducer(notesReducer, {
    notesHome: [],
    notesTrash: [],
    notesArchive: [],
    notesFavourites: [],
  });

  const isNoteInFavourites = (_id) => {
    return notes.notesFavourites.some((item) => item._id === _id);
  };

  return (
    <NoteContext.Provider value={{ notes, notesDispatch, isNoteInFavourites }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNoteContext = () => useContext(NoteContext);

export { NoteContextProvider, useNoteContext };
