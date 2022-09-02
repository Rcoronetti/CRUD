import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const [values, setValues] = useState();

  const handleChangeValues = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log(values);
  }

  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='register--title'>Scrim Shop</h1>
        <input
          type='text'
          name='name'
          placeholder='Nome'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
          type='text'
          name='cost'
          placeholder='Preço'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input
          type='text'
          name='category'
          placeholder='Categoria'
          className='register--input'
          onChange={handleChangeValues}
        />
        <button className='register--buton' onClick={() => handleClickButton()}>Cadastrar</button>
      </div>

    </div>
  );
}

export default App;
