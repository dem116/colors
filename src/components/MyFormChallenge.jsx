import { useState, useRef } from 'react';
import BoxColor from './BoxColor'; 

function MyForm() {
  const [inputValue, setInputValue] = useState(''); 
  const inputRef = useRef(null); 
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <>
      <input
        id="color"
        type="text"
        placeholder="Elige un color"
        className="inputClass"
        ref={inputRef}
        onChange={handleInputChange} 
        value={inputValue}
      />

      <div className="box-container">
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color} 
            inputValue={inputValue} 
            isActive={inputValue.toLowerCase() === color}
          />
        ))}
      </div>
    </>
  );
}

export default MyForm;