import axios from 'axios';
import { useNoteContext, useAuthContext } from '../context/context';
import {
  tooltip,
  notify,
  restoreArchive,
  deleteNote,
} from '../utilities/utilities';

export const ArchiveNoteCard = (note) => {
  const { _id, title, content, cardColor, tags, timeStamp } = note;
  const { auth } = useAuthContext();

  const { notesDispatch, isNoteInFavourites } = useNoteContext();

  const restoreFromArchive = () => {
    restoreArchive(note, auth).then((data) => {
      notesDispatch({ type: 'Add_to_home', payload: data.notes });
      notesDispatch({ type: 'Add_to_archive', payload: data.archives });
    });
  };

  const deleteFromArchive = () => {
    deleteNote(note, auth)
      .then((archives) => {
        notesDispatch({ type: 'Add_to_archive', payload: archives });
        notesDispatch({
          type: 'Add_to_trash',
          payload: note,
        });
        notesDispatch({ type: 'Remove_from_favourites', payload: note._id });
        notify('Note deleted sucessfully', 'success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFavourites = () => {
    isNoteInFavourites(_id)
      ? notesDispatch({ type: 'Remove_from_favourites', payload: _id })
      : notesDispatch({
          type: 'Add_to_favourites',
          payload: { _id, title, content, cardColor, tags, timeStamp },
        });
  };

  return (
    <article key={_id} className='note__card' style={{ background: cardColor }}>
      <div className='note__header'>
        <h1 className='note__title'>{title}</h1>
        <div className='note__pin'>
          <i className='bx bxs-pin'></i>
        </div>
      </div>
      <hr className='note__line' />
      <p className='note__content__sneak'>
        {content.length < 40 ? content : `${content.slice(0, 40)}...`}
      </p>
      <div className='note__labels__conatiner'>
        {tags.lenght != 0
          ? tags.map((tag) => <div className='note__label'>{tag}</div>)
          : 'No tags '}
      </div>
      <div className='note__footer'>
        <h3 className='note__date'>{timeStamp}</h3>
        <ul className='note__icons'>
          <li
            onClick={handleFavourites}
            style={{ cursor: 'pointer' }}
            className='note__labels'
          >
            {isNoteInFavourites(_id) ? (
              <i data-tip data-for='favs' className='bx bxs-heart'></i>
            ) : (
              <i data-tip data-for='favs' className='bx bx-heart'></i>
            )}
            {tooltip('favs', 'Favourite')}
          </li>
          <li
            onClick={restoreFromArchive}
            style={{ cursor: 'pointer' }}
            className='note__archive'
          >
            <i data-tip data-for='arch' className='bx bxs-archive-out'></i>
            {tooltip('arch', 'Archive Out')}
          </li>
          <li
            onClick={deleteFromArchive}
            style={{ cursor: 'pointer' }}
            className='note__trash'
          >
            <i data-tip data-for='trash' className='bx bxs-trash'></i>
            {tooltip('trash', 'Move to Trash')}
          </li>
        </ul>
      </div>
    </article>
  );
};
