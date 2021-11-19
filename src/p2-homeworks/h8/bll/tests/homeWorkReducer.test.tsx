import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    const result = [1, 3, 4, 5, 2, 0].filter( (el, i) => el === newState[i]._id)

     expect(newState[0].name).toBe('Александр')
     expect(newState[5].name).toBe('Кот')
     expect(result.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    console.log(newState)
    expect(newState[0].name).toBe('Кот')
    expect(newState[5].name).toBe('Александр')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    console.log(newState)
    expect(newState.length).toBe(4)
    expect(newState[0].age >= 18).toBe(true)
    expect(newState[1].age >= 18).toBe(true)
    expect(newState[2].age >= 18).toBe(true)
    expect(newState[3].age >= 18).toBe(true)

})
