import axios from 'axios';
import { useNoteContext } from '../context/context';
import { tooltip } from '../utilities/utilities';

export const ArchiveNoteCard = ({
  _id,
  title,
  content,
  cardColor,
  tags,
  timeStamp,
}) => {
  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  const headers = { authorization: authToken };
  const restoreArchiveURL = `/api/archives/restore/${_id}`;
  const deleteNoteURL = `/api/archives/delete/${_id}`;

  const { notesDispatch, isNoteInFavourites } = useNoteContext();

  const restoreFromArchive = () => {
    axios
      .post(restoreArchiveURL, {}, { headers: headers })
      .then((res) => res.data)
      .then((data) => {
        notesDispatch({ type: 'Add_to_home', payload: data.notes });
        notesDispatch({ type: 'Add_to_archive', payload: data.archives });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNote = () => {
    axios
      .delete(deleteNoteURL, { headers: headers })
      .then((res) => res.data)
      .then((data) => {
        notesDispatch({ type: 'Add_to_archive', payload: data.archives });
        notesDispatch({
          type: 'Add_to_trash',
          payload: {
            _id,
            title,
            content,
            cardColor,
            tags,
            timeStamp,
          },
        });
        notesDispatch({ type: 'Remove_from_favourites', payload: _id });
      })
      .catch((error) => {
        console.log(error);
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
          {/* <li className='note__color'>
            <i data-tip data-for='edit' class='bx bxs-message-square-edit'></i>
            {tooltip('edit', 'Edit')}
          </li> */}
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
            onClick={deleteNote}
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
