import axios from "axios";


export const RequestsAPI = {
    getResponse(value: boolean) {
        return axios.post<RequestType>("https://neko-cafe-back.herokuapp.com/auth/test", {success: value})
    },
}

type RequestType = {
    errorText: string;
    info: string;
    yourBody: { success: boolean };
}