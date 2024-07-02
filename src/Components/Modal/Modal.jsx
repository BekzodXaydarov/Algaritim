import React from "react";
import "./Modal.css"

const Modal = ({ modal,Form }) => {
  return (
    <>
      <div className={`modal_container ${modal ? "active" : ""}`}>
          {Form}
        {/* <Modal modal={modal} setModal={setModal} handleToast={handleToast} /> */}
      </div>
    </>
  );
};

export default Modal;
