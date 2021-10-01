import React from 'react'
import s from "./AlternativeMessage.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function AlternativeMessage(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.textMessage}>
                <div className={s.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
                <span className={s.tooltiptail1}></span>
                <span className={s.tooltiptail}></span>
            </div>
        </div>
    )
}

export default AlternativeMessage
