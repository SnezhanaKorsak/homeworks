import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW13.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getResponseMessage} from "./bll/requestReducer";
import {AppStoreType} from "../h10/bll/store";



function Request() {
    const dispatch = useDispatch()
    const responseMessage = useSelector<AppStoreType, string>(state => state.responseMessage.message)
    const error = useSelector<AppStoreType, string>(state => state.responseMessage.errorMessage)

    const [checked, setChecked] = useState(false)

    const sendRequest = () => {
       dispatch(getResponseMessage(checked))
    }

    const finalClassName = `${s.responseBlock} ${error ? s.error : ""}`

    return (
        <div className={s.wrapper}>
            <div className={s.requestBlock}>
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
                Are you ready?
            </SuperCheckbox>
                <div className={s.requestBtn}>
                    <SuperButton onClick={sendRequest}>
                        Go
                    </SuperButton>
                </div>
            </div>
            <div className={finalClassName}>
                {responseMessage || error}
            </div>
        </div>
    );
}

export default Request;