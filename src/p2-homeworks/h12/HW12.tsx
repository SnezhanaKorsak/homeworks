import React  from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {Dispatch} from "redux";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const dispatch = useDispatch<Dispatch>()
    const theme = useSelector<AppStoreType, string>(state => state.theme.themes)


    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
