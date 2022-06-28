import React from "react";

import {IconContext} from "react-icons";
import {IoIosAddCircle} from "react-icons/io";

const AddChat = ({showModal}) => {
    return (
        <div className="add-chat-container">

            <button className="btn-add" onClick={showModal}>
                <IconContext.Provider
                    value={{
                        color: "#001233",
                        size: "50px",
                    }}
                >
                    <div>
                        <IoIosAddCircle/>
                    </div>
                </IconContext.Provider>
            </button>
        </div>
    );
};

export default AddChat;
