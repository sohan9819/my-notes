import { useNoteContext, useAuthContext } from '../context/context';
import axios from 'axios';
import { tooltip, notify, restoreTrash } from '../utilities/utilities';

export const TrashNoteCard = (note) => {
  const { auth } = useAuthContext();
  const { notesDispatch } = useNoteContext();
  const { _id, title, content, cardColor, tags, timeStamp } = note;

  const restoreFromTrash = () => {
    // axios
    //   .post(
    //     url,
    //     {
    //       note: {
    //         title: title,
    //         content: content,
    //         tags: tags,
    //         cardColor: cardColor,
    //         timeStamp: timeStamp + ' (restored)',
    //       },
    //     },
    //     {
    //       headers: headers,
    //     }
    //   )
    //   .then((res) => res.data)
    //   .then((data) => {
    //     notesDispatch({ type: 'Add_to_home', payload: data.notes });
    //     notesDispatch({ type: 'Remove_from_trash', payload: _id });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    restoreTrash(note, auth)
      .then((notes) => {
        notesDispatch({ type: 'Add_to_home', payload: notes });
        notesDispatch({ type: 'Remove_from_trash', payload: note._id });
        notify('Restored from trash successfully', 'seccess');
      })
      .catch((err) => {
        console.log(err);
        notify('Unable to restore from trash', 'error');
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
            onClick={restoreFromTrash}
            style={{ cursor: 'pointer' }}
            className='note__trash'
          >
            <i data-tip data-for='trash' class='fas fa-trash-restore'></i>
            {tooltip('trash', 'Trash restore')}
          </li>
        </ul>
      </div>
    </article>
  );
};
