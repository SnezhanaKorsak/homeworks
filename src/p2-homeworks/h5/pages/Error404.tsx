import React from 'react'
import s from './Error404.module.css'


function Error404() {
    return (
        <div className={s.error}>
            <div className={s.errorType}>404</div>
            <div className={s.errorMessage}>Запрошенный материал не найден. <br/>
                Если вы считаете, что произошла ошибка,<br/>
                сообщите, пожалуйста, на почту<br/>
                <a>web@kudatuda.com</a>
            </div>
            <div className={s.errorImage}>{/*—ฅ/ᐠ.̫ .ᐟ\ฅ—*/}
                <img src={'https://m.seonews.ru/images/404.jpg'}
                     alt={'error'}
                />
            </div>
        </div>
    )
}

export default Error404
