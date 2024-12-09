import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'

const Password = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const inputRef = useRef(null)

  const copyclipboard = () => {
    inputRef.current.select()
    window.navigator.clipboard.writeText(password)
    
  }

  const passwordgen = useCallback(() => {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let sym = '!@#$%^&*()_+'
    let password = ''

    if(numbers) {char += num}
    if(symbols) {char += sym}

    for(let i=1; i <= length; i++) {
      let x = Math.floor(Math.random() * char.length+1)
      password += char.charAt(x)
    }
    setPassword(password)
  }, [length, numbers, symbols ,setPassword])

  useEffect(() => {
    passwordgen();
  },[length, numbers, symbols])

  return (
    <div className='w-1/3 p-4 bg-gray-500 mx-auto mt-20 rounded-md'>
      <h1 className='text-2xl text-center text-gray-200 my-4'>Password Generator</h1>
      <div className='flex'>
        <input 
        type='text'
        value={password}
        readOnly
        placeholder='Password'
        className='w-full h-14 p-2 bg-gray-200 rounded-l-md'
        ref={inputRef}
        />
        <button className='w-24 h-14 bg-sky-700 text-white text-lg rounded-r-md' onClick={copyclipboard}>Copy</button>
      </div>
      <div className='w-full h-10 '>
        <input 
        type='range'
        min='8'
        max='50'
        defaultValue={8}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className='w-52 mt-3 '
        />
        <label htmlFor="inputrange" className='mx-2 text-white w-3 h-full'>{length} Password Length </label>
        <input 
        type='checkbox'
        checked={numbers}
        />
        <label htmlFor="numbers" className='mx-2 text-white' onClick={()=>setNumbers(!numbers)}>Include Numbers</label>
        <input 
        type='checkbox'
        checked={symbols}
        />
        <label htmlFor="symbols" className='mx-2 text-white' onClick={()=>setSymbols(!symbols)}>Include Symbols</label>
      </div>
    </div>
  )
}

export default Password