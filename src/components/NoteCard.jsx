import { useNoteContext, useAuthContext } from '../context/context';
import { tooltip, notify, archiveNote } from '../utilities/utilities';
import { Link } from 'react-router-dom';

export const NoteCard = (note) => {
  const { _id, title, content, cardColor, tags, timeStamp } = note;
  const { auth } = useAuthContext();
  const { notesDispatch, isNoteInFavourites } = useNoteContext();

  const addToArchive = () => {
    archiveNote(note, auth)
      .then((notes) => {
        notesDispatch({ type: 'Add_to_home', payload: notes });
        notify('Note moved to archive', 'success');
      })
      .catch((err) => {
        console.log(err);
        notify('Unable to move the card to archive', 'error');
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
        {/* {content.length < 40 ? content : `${content.slice(0, 40)}...`} */}
        {content}
      </p>
      <div className='note__labels__conatiner'>
        {tags.lenght != 0
          ? tags.map((tag) => <div className='note__label'>{tag}</div>)
          : 'No tags '}
      </div>
      <div className='note__footer'>
        <h3 className='note__date'>{timeStamp}</h3>
        <ul className='note__icons'>
          <li className='note__color'>
            <Link
              to={`/home/edit/${_id}`}
              data-tip
              data-for='edit'
              class='bx bxs-message-square-edit'
            ></Link>
            {tooltip('edit', 'Edit')}
          </li>
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
            onClick={addToArchive}
            style={{ cursor: 'pointer' }}
            className='note__archive'
          >
            <i data-tip data-for='arch' className='bx bxs-archive-in'></i>
            {tooltip('arch', 'Archive In')}
          </li>
        </ul>
      </div>
    </article>
  );
};
