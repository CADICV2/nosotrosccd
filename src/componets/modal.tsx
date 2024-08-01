// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose }) => {
  if (!showModal) return null;
    
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is a modal description</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
