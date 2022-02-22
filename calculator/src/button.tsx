import {FC} from 'react'


interface Props {
    value: string
    onclick: any
    name: string
}

const button: FC<Props> = ({value, onclick, name}) => {
    
    if (name == 'clear') {
        return (
            <button id='clear' onClick={onclick}>{value}</button>
        )
    }
    else if (name == 'C') {
        return (
            <button id='backspace' onClick={onclick}>{value}</button>
        )
    }
    else {
    return (
    <button name={name} onClick={onclick}>{value}</button>
  )
    }
}

export default button