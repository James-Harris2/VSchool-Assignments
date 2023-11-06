import { useState, useRef } from 'react';



function ContentBox() {
    const [message, setMessage] = useState("");
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null); // New hooks


    const handleSubmit = (e) => {
        e.preventDafault ();
        setMessage(inputValue);
        inputRef.current.focus(); // Focus on the input
    };



  return (
    <div style={{ border: "2px solid black", padding: "10px", marginBottom: "20px"}}>
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        {message && <p>{inputValue}</p>}
    </div>
  )
}

export default ContentBox