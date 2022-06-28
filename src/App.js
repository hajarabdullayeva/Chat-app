import React, { useState, useRef } from "react";
import AddChat from "./components/AddChat";
import Chats from "./components/Chats";
import Modal from "./components/Modal";
import ChatCard from "./components/ChatCard";
import MessagesField from "./components/MessagesField";
import Message from "./components/Message";

const { faker } = require("@faker-js/faker");

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    const messageRef = useRef();
    const showModal = () => {
        setIsOpen(true);
    };
    const activateChat = (chat) => {
        setActiveChat(chat);
        messageRef.current.focus();
    };
    const addNewChat = (newChat) => {
        const chatNames = chats.map((chat) => chat.name);
        if (!chatNames.includes(newChat) && newChat.trim()) {
            setChats((prevChats) => [
                {
                    id: new Date().getTime(),
                    name: newChat,
                    img: faker.image.avatar(),
                    messages: [],
                },
                ...prevChats,
            ]);
        }
    };
    const setNewMessage = () => {
        setChats(
            chats.map((chat) => {
                return chat.id === activeChat.id ? activeChat : chat;
            })
        );
    };
    const addNewMessage = (message) => {
        if (!message.trim()) return;
        let temp = activeChat;
        temp.messages.push(message);
        setActiveChat(temp);
    };
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <AddChat showModal={showModal} />
                    <Chats chats={chats} activateChat={activateChat} />
                </div>
                <div className="menu">
                    <ChatCard chat={activeChat} className="menu-header" />
                    <MessagesField activeChat={activeChat} />
                    <Message
                        messageRef={messageRef}
                        addNewMessage={addNewMessage}
                        setNewMessage={setNewMessage}
                    />
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} addNewChat={addNewChat} />
        </>
    );
};

export default App;
