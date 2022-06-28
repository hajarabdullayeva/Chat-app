import React from "react";

const ChatCard = ({ chat, activateChat, className }) => {
  if (!chat) return null;
  return (
    <div
      className={`chat-card ${className}`}
      onClick={() => activateChat(chat)}
    >
      <img src={chat.img} alt={chat.name} className="chat-card-img" />
      <h4>{chat.name}</h4>
    </div>
  );
};

export default ChatCard;
