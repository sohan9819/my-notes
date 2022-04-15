export const NoteCard = () => {
  return (
    <div className='note__card'>
      <div className='note__header'>
        <h1 className='note__title'>Note Title</h1>
        <div className='note__pin'>
          <i className='bx bxs-pin'></i>
        </div>
      </div>
      <hr className='note__line' />
      <p className='note__content__sneak'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam unde ad
        sequi commodi natus nobis corporis aut, illo ...
      </p>
      <div className='note__labels__conatiner'>
        <div className='note__label'>
          <span className='label__cancel'>&#10005;</span> &nbsp;code
        </div>
        <div className='note__label'>
          <span className='label__cancel'>&#10005;</span> &nbsp;sports
        </div>
        <div className='note__label'>
          <span className='label__cancel'>&#10005;</span> &nbsp;study
        </div>
        <div className='note__label'>
          <span className='label__cancel'>&#10005;</span> &nbsp;night
        </div>
      </div>
      <div className='note__footer'>
        <h3 className='note__date'>Created on 26/10/2021</h3>
        <ul className='note__icons'>
          <li className='note__color'>
            <i className='bx bx-palette'></i>
          </li>
          <li className='note__labels'>
            <i className='bx bx-label'></i>
          </li>
          <li className='note__archive'>
            <i className='bx bxs-archive-in'></i>
          </li>
          <li className='note__trash'>
            <i className='bx bxs-trash'></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
