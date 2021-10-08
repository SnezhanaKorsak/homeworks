import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string  // need to fix any
    totalUsers: number // need to fix any
    onKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressCallback} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.greeting
    const errorClass = error ? s.errorMessage : ''

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressCallback}
                   className={inputClass} />
            <button onClick={addUser} disabled={!name} className={s.button}>add</button>
            <span className={s.greeting}>{totalUsers}</span>
            <div className={errorClass}>{error}</div>
        </div>
    )
}

export default Greeting
