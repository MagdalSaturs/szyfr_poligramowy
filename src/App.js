import React from 'react';
import './App.scss';

function App() {
  const [tekst, setTekts] = React.useState([]);
  const text = React.createRef();

  const Code = (e) => {
    const textValue = text.current.value;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const code = (textValue) => {
      let result = '';
      for (let i = 0; i < textValue.length; i++) {
        if (textValue[i] === ' ') {
          result += ' ';
        } else {
          const index = alphabet.indexOf(textValue[i]);
          result += alphabet[index + 1];
        }
      }
      return result;
    }
    setTekts(code(textValue));
    console.log(code(textValue));
  };

  const Decode = (e) => {
    const textValue = text.current.value;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

      const decode = (textValue) => {
        let resultDecode = '';
        for (let i = 0; i < textValue.length; i++) {
          if (textValue[i] === ' ') {
            resultDecode += ' ';
          } else {
            const index = alphabet.indexOf(textValue[i]);
            resultDecode += alphabet[index - 1];
          }
        }
        return resultDecode;
      }
      setTekts(decode(textValue));
      console.log(decode(textValue));
  };

  return (
    <>
      <div className='App'>
        <form>
          <input ref={text} placeholder='Tekst do zaszyfrowania/odszyfrowania'></input>
          <button onClick={e => Decode(e)} >Odszyfruj</button>
          <button onClick={e => Code(e)}>Zaszyfruj</button>
        </form>
      </div>
      <div className='Output'>
        <p>Wynik:</p>
        <p>{tekst}</p>
      </div>
    </>
  );
}

export default App;


// Magda Saturska -  Napisz własną implementację szyfru poligramowego w dowolnej technologii. Użytkownik wprowadza wiadomość i
// otrzymuje jej szyfrogram lub odszyfrowuje wiadomość. Program może być jako strona internetowa lub okienkowa.