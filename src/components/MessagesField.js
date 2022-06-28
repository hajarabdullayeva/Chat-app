import React from "react";

const MessagesField = ({activeChat, className}) => {
    if (!activeChat.messages) return;
    const chatMessages = activeChat.messages.map((message, index) => (
        <li className="message-card" key={index}>
            {message}
        </li>
    ));
    return (
        <div className="message-field">
            <ul className="messages">{chatMessages}</ul>
        </div>
    );
};

export default MessagesField;
