// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';
import { useState } from 'react';
import moment from 'moment';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { BlockPicker } from 'react-color';
import { useRef } from 'react';
import { notify } from '../utilities/utilities';
import axios from 'axios';
import { useNoteContext } from '../context/context';

export const NoteInputCard = () => {
  const title = useRef(null);
  const content = useRef(null);
  const [tags, setTags] = useState([]);
  const [cardColor, setCardColor] = useState('#c8c7fe');

  const inputError = useRef();

  const authToken = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  const headers = { authorization: authToken };

  const { notesDispatch } = useNoteContext();

  const setDefaultState = () => {
    title.current.value = '';
    content.current.value = '';
    setTags([]);
    setCardColor('#c8c7fe');
  };

  const handleOnSubmit = () => {
    if (
      title.current.value != '' &&
      content.current.value != '' &&
      tags.length != 0
    ) {
      axios
        .post(
          '/api/notes',
          {
            note: {
              title: title.current.value,
              content: content.current.value,
              tags: tags,
              cardColor: cardColor,
              timeStamp: moment().format('LLL'),
            },
          },
          { headers: headers }
        )
        .then((res) => res.data)
        .then((data) => {
          notify('Note created successfully', 'success');
          notesDispatch({ type: 'Add_to_home', payload: data.notes });
          console.log(data);
        })
        .catch((error) => {
          notify('Ran out of some error', 'error');
          console.log(error);
        });

      setDefaultState();
    } else {
      console.log('Fill all the details');
      inputError.current.innerText = 'Please fill all the fileds';
    }
  };

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

  return (
    <>
      <p ref={inputError} className='note__input__error'></p>
      <div style={{ background: cardColor }} className='note__card__input'>
        <div className='note__header'>
          <textarea
            ref={title}
            className='note__title__input'
            placeholder='Note Title'
            onChange={() => {
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
          <h3 className='note__date'>{moment().format('LLL')}</h3>
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
      <button onClick={handleOnSubmit} className='note__create__button'>
        Create note
      </button>
    </>
  );
};
