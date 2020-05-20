import {useState} from 'react'

export function useInput(initialValue, direct=false) {
    const [value, setValue] = useState(initialValue)

    const onChange = direct ? e => { setValue(e) } : e => { setValue(e.target.value) }
    return [
        value,
        setValue,
        {
            value,
            onChange
        },
        () => setValue(''),
    ]
}
