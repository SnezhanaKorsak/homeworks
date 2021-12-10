type initStateType = {
    themes: string
}

const initState: initStateType = {
    themes: ''
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themes: action.value};
        }
        default:
            return state;
    }
};
type  ChangeThemeActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (value: string): any => {
    return {
        type: 'CHANGE-THEME',
        value
    } as const
}; // fix any