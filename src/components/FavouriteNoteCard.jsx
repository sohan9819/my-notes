import { useNoteContext } from '../context/context';

export const FavouriteNoteCard = ({
  _id,
  title,
  content,
  cardColor,
  tags,
  timeStamp,
}) => {
  const { notesDispatch, isNoteInFavourites } = useNoteContext();

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
              <i className='bx bxs-heart'></i>
            ) : (
              <i className='bx bx-heart'></i>
            )}
          </li>
        </ul>
      </div>
    </article>
  );
};
