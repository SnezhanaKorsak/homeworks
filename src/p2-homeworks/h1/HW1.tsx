import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Saber',
    message: "The night can't last forever… It is always followed by the dawn of a new day.",
    time: '22:00',
}
const alternativeMessageData = {
    avatar: 'https://cs6.pikabu.ru/avatars/479/v479500-1774268413.jpg',
    name: 'Your Cat',
    message: "I can't do it. I have лапки",
    time: '08:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>

            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}/>
            <hr/>
        </div>
    )
}

export default HW1
