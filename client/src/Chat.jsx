import React,{ useState, useEffect } from 'react'
// import io from 'socket .io-client';

const Chat = () => {
    // const [socket] = useState(() => io(':8000'));
    // useEffect(() => {
    //     console.log('is this running?');
    //     socket.on('welcome', data => console.log(data));

    //     return () => socket.disconnect(true);
    // }, ['socket']);
    return (
        <div>
            <h1>Socket Chat</h1>
        </div>
    )
}

export default Chat;
