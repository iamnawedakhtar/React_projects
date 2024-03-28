import { useCallback, useEffect, useState,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [cahracterAllowed, setcahracterAllowed] = useState(false);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (cahracterAllowed) str += "!@#$%^&*";
    if (numberAllowed) str += "1234567890";

    for (let i = 1; i <= length; i++) {
      let ind = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(ind);
    }
    setPassword(pass);
  }, [length, cahracterAllowed, numberAllowed,setPassword]);
  
  const passwordRef = useRef(null)
  const copyToclipboard=useCallback(()=>{
     passwordRef.current?.select();
     window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },
    [length,cahracterAllowed,numberAllowed,passwordGenerator])
  return (
    <>
      <h1 className="text-white text-center text-4xl">Password Generator</h1>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 gap-2">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
          onClick={copyToclipboard}>copy</button>
        </div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
        <input
          type="checkbox"
          defaultChecked={cahracterAllowed}
          id="character"
          onChange={() => {
            setcahracterAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="character"> characters</label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="number"
          onChange={() => {
            setnumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="number"> Numbers</label>
      </div>
    </>
  );
}
export default App;
