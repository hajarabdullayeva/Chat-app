import React from "react";
import ChatCard from "./ChatCard";

const Chats = ({chats, activateChat}) => {
    const chatCards = chats.map((chat) => (
        <ChatCard chat={chat} key={chat.name} activateChat={activateChat}/>
    ));
    return <div>{chatCards}</div>;
};

export default Chats;
