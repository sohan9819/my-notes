import { Link } from 'react-router-dom';
import { emoji } from '../utilities/utilities';

export const NoCards = () => {
  return (
    <>
      <h1 className='notfound__heading'>
        No Note cards <br />
        {emoji()}
      </h1>
      <Link className='startTakingNotes' to={'/notebook'}>
        Start taking notes <i className='bx bxs-book-content '></i>
      </Link>
    </>
  );
};
