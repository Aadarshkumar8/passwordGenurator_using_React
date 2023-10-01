import { useState, useCallback, useEffect } from 'react';
// import './App.css';


function App() {
  const [number, setNumber] = useState("false")
  const [length, setLength] = useState(8)
  const [charactor, setCharactor] = useState("false")
  const [password, setPassword] = useState("")

  const passwordGenurator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx"
    if (number) str += "0123456789"
    if (charactor) str += "!#@$%&*{}[]_-~`"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, charactor, setPassword])
  useEffect(()=>{
    passwordGenurator()
  },[length, number, charactor,passwordGenurator,setCharactor])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-ag px-4 text-orange-500 bg-gray-700'>
      <h1 className='text-center my-3'>Passsword Genurator</h1>
      <div className='className="flex shadow ronded-lg overflow-hidden mb-4"'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
       
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={8} max={20} value={length} className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>length:{length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={number} id="numberInput"
        onChange={()=>{
          setNumber((prev)=>!prev)
        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={number} id="numberInput"
        onChange={()=>{
          setNumber((prev)=>!prev)
        }}
        />
        <label htmlFor='numberInput'>charactors</label>
      </div>
      </div>
    </div>
  );
}

export default App;
