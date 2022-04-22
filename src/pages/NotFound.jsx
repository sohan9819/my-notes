import { Link } from 'react-router-dom';
import { emoji } from '../utilities/utilities';

export const NotFound = () => {
  return (
    <div className='landing__container'>
      <h1 className='notfound__heading'>
        Error 404 <br />
        {emoji()}
      </h1>
      <Link className='notfound__link' to={'/home'}>
        Back to <i className='bx bxs-home-alt-2'></i>
      </Link>
    </div>
  );
};
