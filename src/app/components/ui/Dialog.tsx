import { X } from 'lucide-react';
import React from 'react';

const Dialog = ({
  children,
  onClose,
  isOpen,
  onSubmit,
}: {
  children: React.ReactNode;
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-5 rounded-lg shadow-lg z-10 w-fit max-w-[550px]">
        <div className="flex items-center justify-end">
          <button
            onClick={onClose}
            className="flex flex-row self-end w-fit p-1 bg-transparent rounded-md hover:bg-slate-100 duration-75 ease-in"
          >
            <X className="text-black" size={20} />
          </button>
        </div>

        {children}

        <div className="flex items-center w-full justify-center">
          <button
            className="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-800 duration-100 ease-in text-white rounded"
            type="button"
            onClick={() => {
              onSubmit();
              onClose();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
