import  { useState } from "react";

function CaesarCipher() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(0);
  const [encodedText, setEncodedText] = useState("");

  const encodeText = () => {
    let encoded = "";
    const shiftAmount = parseInt(shift, 10) % 26; // Ensure shift is within the range of 0-25

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.match(/[a-z]/i)) {
        const charCode = text.charCodeAt(i);
        let encodedCharCode;

        if (char.match(/[a-z]/)) {
          encodedCharCode = ((charCode - 97 + shiftAmount) % 26) + 97; // For lowercase letters
        } else {
          encodedCharCode = ((charCode - 65 + shiftAmount) % 26) + 65; // For uppercase letters
        }

        encoded += String.fromCharCode(encodedCharCode);
      } else {
        encoded += char; // Preserve non-alphabetic characters
      }
    }

    setEncodedText(encoded);
  };

  return (
    <div>
      <h1>Caesar Cipher</h1>
      <label>
        Text to be encoded:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <br />
      <label>
        Shift positions:
        <input
          type="number"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        />
      </label>
      <br />
      <button onClick={encodeText}>Encode</button>
      <br />
      <label>
        Encoded text:
        <input type="text" readOnly value={encodedText} />
      </label>
    </div>
  );
}

export default CaesarCipher;
