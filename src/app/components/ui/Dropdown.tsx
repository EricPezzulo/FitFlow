import { Ellipsis } from 'lucide-react';
import React from 'react';

const Dropdown = ({
  isOpen,
  open,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  open: () => void;
}) => {
  // console.log(isOpen);
  return (
    <div className="relative">
      <button
        onClick={open}
        type="button"
        className="  hover:bg-slate-200 rounded p-1"
      >
        <Ellipsis className="text-slate-700" />
      </button>
      {isOpen ? (
        <select className="relative top-12 w-16 h-16">
          <option value="view">view</option>
          <option value="delete">delete</option>
        </select>
      ) : null}
    </div>
  );
};

export default Dropdown;
