import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Transition from './Transition';
import ClickAwayListener from './ClickAwayListener'

interface ModalProps {
  children: any;
  id: string;
  ariaLabel: string;
  show: boolean;
  handleClose: () => void;
}
export const Modal = (props: ModalProps) => {
const { children, id, ariaLabel, show, handleClose } = props;

  const modalContent = useRef(null);
  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true" timeout={0} children={children}   />

      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95" timeout={0}      >
        <div className="bg-white overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>          
          {children}
        </div>
      </Transition>    
    </>
  );
}

export default Modal;
