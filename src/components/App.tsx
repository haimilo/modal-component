import React, { useState } from 'react'
import Modal from './Modal';
import { CSSTransition } from 'react-transition-group';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div
      className="flex items-center justify-center h-screen"
    >
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={openModal}>Open Modal</button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: 'modal-enter',
          enterActive: 'modal-enter-active',
          exit: 'modal-exit',
          exitActive: 'modal-exit-active',
        }}
        unmountOnExit
      >
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
      </CSSTransition>
    </div>
  )
}

export default App