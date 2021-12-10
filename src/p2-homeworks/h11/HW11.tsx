import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../h11/common/c7-SuperRange/SuperRange.module.css'

function HW11() {


    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const min = 0
    const max = 100


    const onChangeRangeHandler = (value: number | number[]) => {
        if (!Array.isArray(value)) {
            setValue1(value)
        } else {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div>
            <hr/>
            <div>homeworks 11</div>

            {/*should work (должно работать)*/}
            <span className={s.range}>
                <div className={s.valueRange}>{value1}</div>
                <SuperRange
                    onChangeRange = {onChangeRangeHandler}
                    value={value1}
                />
            </span>

            <div className={s.range}>
                <SuperDoubleRange
                    onChangeRange={onChangeRangeHandler}
                    value={[value1, value2]}
                    min={min}
                    max={max}
                    step={10}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
