import { Link } from 'react-router-dom';
import { emoji } from '../utilities/utilities';

export const NotAuth = () => {
  return (
    <div className='landing__container'>
      <h1 className='notfound__heading'>
        Please Login <br />
        {emoji()}
      </h1>
      <Link className='notfound__link' to={'/auth'}>
        Login <i className='bx bx-log-in'></i>
      </Link>
    </div>
  );
};
