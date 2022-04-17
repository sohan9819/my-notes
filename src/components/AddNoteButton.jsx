import { Link } from 'react-router-dom';

export const AddNoteButton = () => {
  return (
    <Link to='/notebook' className='add__icon'>
      <i className='bx bxs-plus-circle'></i>
    </Link>
  );
};
