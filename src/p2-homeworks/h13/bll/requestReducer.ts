import {Dispatch} from "redux";
import {RequestsAPI} from "../api/requests -api";

type initStateType = {
    message: string;
    errorMessage: string;
}

const initState: initStateType = {
    message: '',
    errorMessage: '',
};

export const requestReducer = (state = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case "SET-RESPONSE_MESSAGE":
            return {...state, message: action.message}

        case "SET-ERROR_MESSAGE":
            return {...state, errorMessage: action.message}

        default:
            return state;
    }
};
type  ActionsType = ReturnType<typeof setResponseMessage> | ReturnType<typeof setErrorMessage>

export const setResponseMessage = (message: string) => {
    return {
        type: 'SET-RESPONSE_MESSAGE',
        message
    } as const
};

export const setErrorMessage = (message: string) => {
    return {
        type: 'SET-ERROR_MESSAGE',
        message
    } as const
};


export const getResponseMessage = (checkboxValue: boolean) => (dispatch: Dispatch) => {
    RequestsAPI.getResponse(checkboxValue)
        .then(res => {
            dispatch(setErrorMessage(''))
            dispatch(setResponseMessage(res.data.errorText))
        })
        .catch((error) => {
            dispatch(setResponseMessage(''))
            dispatch(setErrorMessage(error.response ? error.response.data.errorText : error.message))
        })
}

