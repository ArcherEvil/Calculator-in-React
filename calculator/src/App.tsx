import React, { useState } from 'react'
import Button from './button'
import './App.css';

const App = () => {
  let Error: boolean = false

  const [Result, setResult] = useState('');
  const handleClick = (e: any) => {
    if (Error === true) {
      setResult('');
      Error = false
    }
    setResult(Result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(Result.slice(0, -1))
  }

  const calculate = () => {

    try {
      setResult(eval(Result).toString());
    }
    catch(err) {
      setResult('Error');
      Error = true
    }

  }
    return (
    <div className='container'>
        <form>
            <input type='text' value={Result}/>
        </form>
        <div className="keypad">
            <Button name='' onclick={clear} value='CLEAR'/>
            <Button name='' onclick={backspace} value='C'/>
            <Button name='/' onclick={handleClick} value='/'/>
            <Button name='7' onclick={handleClick} value='7'/>
            <Button name='8' onclick={handleClick} value='8'/>
            <Button name='9' onclick={handleClick} value='9'/>
            <Button name='*' onclick={handleClick} value='X'/>
            <Button name='4' onclick={handleClick} value='4'/>
            <Button name='5' onclick={handleClick} value='5'/>
            <Button name='6' onclick={handleClick} value='6'/>
            <Button name='-' onclick={handleClick} value='-'/>
            <Button name='1' onclick={handleClick} value='1'/>
            <Button name='2' onclick={handleClick} value='2'/>
            <Button name='3' onclick={handleClick} value='3'/>
            <Button name='+' onclick={handleClick} value='+'/>
            <Button name='0' onclick={handleClick} value='0'/>
            <Button name='.' onclick={handleClick} value='.'/>
            <Button name='=' onclick={calculate} value='='/>
        </div>
    </div>
  )
}

export default App