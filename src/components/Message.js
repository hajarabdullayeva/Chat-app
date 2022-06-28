import React, { useState } from "react";

const Message = ({ messageRef, addNewMessage, setNewMessage }) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <form
      className="message-form"
      onSubmit={(e) => {
        e.preventDefault();
        addNewMessage(inputVal);
        setNewMessage();
        setInputVal("");
      }}
    >
      <input
        type="text"
        className="message-input"
        ref={messageRef}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </form>
  );
};

export default Message;
