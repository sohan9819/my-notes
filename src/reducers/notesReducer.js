export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'Add_to_home':
      return { ...state, notesHome: payload };
    case 'Add_to_archive':
      return { ...state, notesArchive: payload };
    case 'Add_to_trash':
      return { ...state, notesTrash: [...state.notesTrash, payload] };
    case 'Add_to_favourites':
      return { ...state, notesFavourites: [...state.notesFavourites, payload] };
    case 'Remove_from_favourites':
      return {
        ...state,
        notesFavourites: state.notesFavourites.filter(
          (note) => note._id !== payload
        ),
      };
    case 'Remove_from_trash':
      return {
        ...state,
        notesTrash: state.notesTrash.filter((note) => note._id !== payload),
      };
    default:
      break;
  }
};
