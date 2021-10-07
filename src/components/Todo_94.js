import { useState } from 'react';
import Modal_94 from '../components/Modal_94';
import Backdrop_94 from '../components/Backdrop_94';

function Todo_94(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Backdrop_94 onClose={closeModalHandler} />}
      {showModal && (
        <Modal_94 text='Are you sure?' onClose={closeModalHandler} />
      )}
    </div>
  );
}
export default Todo_94;
