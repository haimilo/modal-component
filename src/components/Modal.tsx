import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className="relative bg-white rounded-lg w-1/2"
      >
        <button
          data-testid="close-button"
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="p-8">{children}</div>
      </div>
    </div>
  )
}

export default Modal