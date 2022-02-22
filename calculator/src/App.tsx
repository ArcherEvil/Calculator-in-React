import React, { useState } from 'react'

const App = () => {
  const [Result, setResult] = useState('hi');
  
    return (
    <div className='container'>
        <form>
            <input type='text' value={Result}/>
        </form>
        <div className="keypad">
            
        </div>
    </div>
  )
}

export default App