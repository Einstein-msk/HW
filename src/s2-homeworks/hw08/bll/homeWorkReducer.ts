import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
    switch (action.type) {
        case 'sort': { // by name

            const stateCopy = [...state]
                return action.payload==="up"
                    ? stateCopy.sort((a,b)=>a.name.localeCompare(b.name))
                    : stateCopy.sort((a,b)=>b.name.localeCompare(a.name))
            return state
        }
        case 'check': {

            return state.filter(user=>user.age>=action.payload)
        }
        default:
            return state
    }
}
