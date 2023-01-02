import React from 'react';
import './App.scss';

function App() {
  const [tekst, setTekts] = React.useState([]);
  const text = React.createRef();

  const Code = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz.,!?:;ąćęłńóśźżABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const codeText = (textValue) => {
      let result = '';
      for (let i = 0; i < textValue.length; i++) {
        const letter = textValue[i];
        const index = alphabet.indexOf(letter);
        if (index === -1) {
          result += letter;
        } else {
          const newIndex = (index + 3) % alphabet.length;
          result += alphabet[newIndex];
        }
      }
      return result;
    };
    setTekts(codeText(textValue));
    console.log(codeText(textValue));
  }

  const Decode = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz.,!?:;ąćęłńóśźż';

    const decodeText = (textValue) => {
      let result = '';
      for (let i = 0; i < textValue.length; i++) {
        const letter = textValue[i];
        const index = alphabet.indexOf(letter);
        if (index === -1) {
          result += letter;
        } else {
          const newIndex = (index - 3) % alphabet.length;
          result += alphabet[newIndex];
        }
      }
      return result;

    }
    setTekts(decodeText(textValue));
    console.log(decodeText(textValue));
    
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