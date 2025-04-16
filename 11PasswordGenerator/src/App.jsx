import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
 
  const [length,setLength] = useState(8)
  const [numbers,setNumbers] = useState(false)
  const [characters,setCharacters] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerate = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str+="1234567890"
    }
    if(characters){
      str+="~!@#$%^&*(),.<>?/=+-_"
    }
    for(let i = 0; i < length; i++){
      let char = Math.round(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numbers,characters])

  useEffect(() => {
    passwordGenerate()
  },[length,characters,numbers,passwordGenerate])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='w-full h-screen bg-slate-900'>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-slate-500 p-6 rounded-md w-[450px]'>
          <div className='flex'>
            <input type="text" className='rounded-l-md p-2 outline-none w-96' readOnly onChange={passwordGenerate} value={password} ref={passwordRef} />
            <button className='bg-green-500 text-white font-semibold rounded-r-md py-2 px-3' onClick={copyPassword}>Copy</button>
          </div>
          <div className='mt-5 flex justify-between'>
            <input type="range" value={length} onChange={(e) => setLength(e.target.value)}/>
            <label className='text-orange-500 font-semibold'>Length {length} </label>
            <input type="checkbox" defaultChecked={numbers} onChange={() => {setNumbers((prev) => !prev)}} />
            <label className='text-orange-500 font-semibold'>Numbers</label>
            <input type="checkbox" defaultChecked={characters} onChange={() =>{setCharacters((prev) => !prev)}} />
            <label className='text-orange-500 font-semibold'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
