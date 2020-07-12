import {useState} from 'react'

export function useInput<T>(initialValue: T, direct=false):
    [
        T, (v: T) => void,
        {
            value: T,
            onChange: (e: any) => void
        }] {
    const [value, setValue] = useState(initialValue)

    const onChange = direct ? (e: any) => { setValue(e) } : (e: any) => { setValue(e.target.value) }
    return [
        value as T,
        setValue,
        {
            value,
            onChange
        }
    ]
}
