import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className='landing__container'>
      <header className='landing__header'>
        <h1 className='landing__heading'>
          <i className='bx bxs-edit-alt'></i>
          TipTap Notes
        </h1>
      </header>
      <article className='landing__article'>
        <Link to='/auth' className='landing__article__button'>
          Start making notes
        </Link>
      </article>
      <footer className='landing__footer'>
        <h4 className='landing__footer__msg'>
          <a href='#' target='_blank'>
            Contribute to the project &nbsp;
            <i className='bx bxl-github'></i>
          </a>
        </h4>
        <br />
        <h4 className='copyright'>@copyright snickerDev</h4>
      </footer>
    </div>
  );
};
