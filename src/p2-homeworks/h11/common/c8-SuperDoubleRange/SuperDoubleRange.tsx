import React from 'react'
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: number[]
    min: number
    max: number
    step?: number
    disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        min,
        max,
        step,
        ...restProps

    }
) => {

    const firsDefaultValue = Math.round((max - min)/30) * 10
    const secondDefaultValue = Math.round((max - min)/30) * 10 + firsDefaultValue


    const marks = [
        {
            value: min,
            label: min.toString(),
        },
        {
            value: firsDefaultValue,
            label: firsDefaultValue.toString(),
        },
        {
            value: secondDefaultValue,
            label: secondDefaultValue.toString(),
        },
        {
            value: max,
            label: max.toString(),
        },
    ];

    const valuetext = (value: number) => {
        return `${value}`;
    }
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
        /*setValues(newValue as number[])*/
    };

    return (
            <div style={{width: 250, marginLeft: 25}}>
                <Typography id="track-false-range-slider" gutterBottom>
                    Double range slider
                </Typography>
                <Slider
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    marks={marks}
                    step={step}
                    {...restProps}
                />
            </div>
    )
}

export default SuperDoubleRange
