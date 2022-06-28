import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, setIsOpen, addNewChat }) => {
    const [inputVal, setInputVal] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    });
    if (!isOpen) return;
    return createPortal(
        <div className="backdrop">
            <div className="modal">
                <form
                    className="modal-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addNewChat(inputVal);
                        setInputVal("");
                        setIsOpen(false);
                    }}
                >
                    <h3 className="modal-title">Add New Chat</h3>
                    <input
                        type="text"
                        className="modal-input"
                        ref={inputRef}
                        onChange={(e) => setInputVal(e.target.value)}
                    />
                </form>
                <button onClick={() => setIsOpen(false)} className="btn-close-modal">
                    CLOSE
                </button>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
