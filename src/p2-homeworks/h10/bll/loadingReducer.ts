export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}
export type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'SET-LOADING',
        isLoading
    } as const
}