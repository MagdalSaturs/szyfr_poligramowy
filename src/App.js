import React from 'react';
import './App.scss';

function App() {
  const [tekst, setTekts] = React.useState([]);
  const text = React.createRef();


  const Code = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz.,!?:;ąćęłńóśźżABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const tab = textValue.split('').map((letter, index) => {
      if (index % 2 === 0) {
        const firstLetter = alphabet.indexOf(letter);
        const secondLetter = alphabet.indexOf(textValue[index + 1]);
        const newLetter = alphabet[firstLetter + secondLetter];
        return newLetter;
      }
    }).join('');

    setTekts(tab)
    console.log(tab);

  }

  const Decode = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz.,!?:;ąćęłńóśźżABCDEFGHIJKLMNOPQRSTUVWXYZ';

    

  };

  return (
    <>
      <div className='App'>
        <form>
          <input ref={text} placeholder='Tekst do zaszyfrowania/odszyfrowania'></input>
          <button onClick={Decode} >Odszyfruj</button>
          <button onClick={Code}>Zaszyfruj</button>
        </form>
        <p>Wynik:</p>
        <p>{tekst}</p>
      </div>
    </>
  );
}

export default App;


// Magda Saturska -  Napisz własną implementację szyfru poligramowego w dowolnej technologii. Użytkownik wprowadza wiadomość i
// otrzymuje jej szyfrogram lub odszyfrowuje wiadomość. Program może być jako strona internetowa lub okienkowa.