import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import queryString from 'query-string';
import styles from './Chat.module.scss'



const ENDPOINT = 'http://localhost:4000';
const socket = socketIOClient(ENDPOINT);

function Chat() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');



    useEffect(() => {

        const { name, room } = queryString.parse(location.search);

        setRoom(room);
        setName(name);

        // From here emit is thrown to the server
        socket.emit('join', { name, room });


    }, [ENDPOINT]);

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Chat;
