import {UserType} from "../HW8";


export type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: 18}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if(a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0
            })

            return action.payload === 'up' ? newState : newState.reverse()

        }
        case 'check': {

            return state.filter( p => p.age >= 18)
        }

        default:
            return state
    }
}

