import { BlockPicker } from 'react-color';
import ReactTagInput from '@pathofdev/react-tag-input';
import { useState, useEffect, useRef } from 'react';
import { editNote } from '../utilities/utilities';
import { useAuthContext, useNoteContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import { notify } from '../utilities/utilities';
import moment from 'moment';

export const NoteEditForm = (note) => {
  const title = useRef(null);
  const content = useRef(null);
  const [cardColor, setCardColor] = useState(note.cardColor);
  const [tags, setTags] = useState(note.tags);

  const inputError = useRef();

  const { auth } = useAuthContext();
  const { notesDispatch } = useNoteContext();
  const navigate = useNavigate();

  const defaultColors = [
    '#fec7c7',
    '#fefac7',
    '#cdfec7',
    '#c7fef7',
    '#c8c7fe',
    '#D9E3F0',
    '#F47373',
    '#697689',
    '#37D67A',
    '#2CCCE4',
    '#555555',
    '#dce775',
    '#ff8a65',
    '#ba68c8',
  ];

  const colorChangeHandler = (color) => {
    setCardColor(color.hex);
  };

  useEffect(() => {
    title.current.value = note.title;
    content.current.value = note.content;
  }, []);

  const onSubmitHandler = () => {
    if (
      title.current.value != '' &&
      content.current.value != '' &&
      tags.length != 0
    ) {
      let editedNote = {
        ...note,
        title: title.current.value,
        content: content.current.value,
        tags: tags,
        cardColor: cardColor,
        timeStamp: moment().format('LLL'),
      };
      editNote(editedNote, auth)
        .then((notes) => {
          notesDispatch({ type: 'Add_to_home', payload: notes });
          notify('Note edited successfully', 'success');
          navigate('/home');
          console.log(notes);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      inputError.current.innerText = 'Please fill all the fileds';
    }
  };

  return (
    <>
      <p ref={inputError} className='note__input__error'></p>
      <div style={{ background: cardColor }} className='note__card__input'>
        <div className='note__header'>
          <textarea
            ref={title}
            className='note__title__input'
            placeholder='Note Title'
            onChange={(evt) => {
              inputError.current.innerText = '';
            }}
          ></textarea>
        </div>
        <hr className='note__line' />
        <textarea
          ref={content}
          className='note__content__input'
          placeholder='Note Content'
          onChange={() => {
            inputError.current.innerText = '';
          }}
        ></textarea>
        <div className='note__labels__conatiner'>
          <ReactTagInput
            tags={tags}
            placeholder='Type and press enter'
            maxTags={10}
            editable={true}
            readOnly={false}
            removeOnBackspace={true}
            onChange={(newTags) => {
              setTags(newTags);
              inputError.current.innerText = '';
            }}
          />
        </div>
        <div className='note__footer'>
          <h3 className='note__date'>Edited {moment().format('LLL')}</h3>
          <ul className='note__icons'>
            <li
              className='note__color'
              style={{
                position: 'relative',
              }}
            >
              <input type='checkbox' id='colorInput'></input>
              <label
                htmlFor='colorInput'
                className='bx bx-palette colorInputLabel'
              ></label>
              <div className='color__tool__tip'>
                <BlockPicker
                  color={cardColor}
                  colors={defaultColors}
                  onChangeComplete={colorChangeHandler}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button className='note__create__button' onClick={onSubmitHandler}>
        Edit note
      </button>
    </>
  );
};
