import React from 'react';
import './App.scss';

  //pierwsza wersja (zamiana jeden na jeden)
    // const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    // const szyfrowanyalfabet = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'ż', 'ź', 'ś', 'ó', 'ń', 'ł', 'ę', 'ć', 'ą', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

    // const tab = textValue.split('').map((letter) => {
    //   const index = alfabet.indexOf(letter);
    //   return szyfrowanyalfabet[index];
    // }
    // ).join('');
    // console.log(tab);

    // setTekts(tab)

function App() {
  const [tekst, setTekts] = React.useState([]);
  const text = React.createRef();

  const Code = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const alfabet = {
      'aa': 'tt', 'ab' : 'tz', 'ac' : 'tn', 'ad' : 'tj', 'ae' : 'ty', 'af':'te', 'eg':'ts', 'ah':'tm', 'ai':'ti', 'aj':'tx', 'ak':'td', 'al':'tr', 'ał':'tł', 'am':'th', 'an':'tw', 'ao':'tc', 'ap':'tp', 'ar':'tl', 'as':'tg', 'at':'tu', 'au':'tb', 'aw':'to', 'ax':'tk', 'ay':'tf', 'az':'ta',
      'bb':'zz','ba':'zt','bc':'zn','bd':'zj','be':'zy','bf':'ze','bg':'zs','bh':'zm','bi':'zi','bj':'zx','bk':'zd','bl':'zr','bł':'zł','bm':'zh','bn':'zw','bo':'zc','bp':'zp','br':'zl','bs':'zg','bt':'zu','bu':'zb','bw':'zo','bx':'zk','by':'zf','bz':'za',
      'cc':'nn','ca':'nt','cb':'nz','cd':'nj','ce':'ny','cf':'ne','cg':'ns','ch':'nm','ci':'ni','cj':'nx','ck':'nd','cl':'nr','cł':'nł','cm':'nh','cn':'nw','co':'nc','cp':'np','cr':'nl','cs':'ng','ct':'nu','cu':'nb','cw':'no','cx':'nk','cy':'nf','cz':'na',
      'dd':'jj','da':'jt','db':'jz','dc':'jn','de':'jy','df':'je','dg':'js','dh':'jm','di':'ji','dj':'jx','dk':'jd','dl':'jr','dł':'jł','dm':'jh','dn':'jw','do':'jc','dp':'jp','dr':'jl','ds':'jg','dt':'ju','du':'jb','dw':'jo','dx':'jk','dy':'jf','dz':'ja',
      'ee':'yy','ea':'yt','eb':'yz','ec':'yn','ed':'yj','ef':'ye','eg':'ys','eh':'ym','ei':'yi','ej':'yx','ek':'yd','el':'yr','eł':'ył','em':'yh','en':'yw','eo':'yc','ep':'yp','er':'yl','es':'yg','et':'yu','eu':'yb','ew':'yo','ex':'yk','ey':'yf','ez':'ya',
      'ff':'ee','fa':'et','fb':'ez','fc':'en','fd':'ej','fe':'ey','fg':'es','fh':'em','fi':'ei','fj':'ex','fk':'ed','fl':'er','fł':'eł','fm':'eh','fn':'ew','fo':'ec','fp':'ep','fr':'el','fs':'eg','ft':'eu','fu':'eb','fw':'eo','fx':'ek','fy':'ef','fz':'ea',
      'gg':'ss','ga':'st','gb':'sz','gc':'sn','gd':'sj','ge':'sy','gf':'se','gh':'sm','gi':'si','gj':'sx','gk':'sd','gl':'sr','gł':'sł','gm':'sh','gn':'sw','go':'sc',"gp":'sp','gr':'sl','gs':'sg','gt':'su','gu':'sc','gw':'so','gx':'sk','gy':'sf','gz':'sa',
      'hh':'mm','ha':'mt','bh':'mz','hc':'mn','hd':'mj','he':'my','hf':'me','hg':'ms','hi':'mi','hj':'mx','hk':'md','hl':'mr','hł':'mł','hm':'mh','hn':'mw',
      //ciąg dalszy nastąpi jeśli projekt będzie dalej prawidłowy
    }
    //podział tekstu po 2 znaki
    const tab = textValue.split('').map((letter, index) => {
      if (index % 2 === 0) {
        return letter + textValue[index + 1];
      }
    }
    ).filter((letter) => letter !== undefined);

    //zamiana na alfabet
    const tab2 = tab.map((letter) => {
      return alfabet[letter];
    }
    ).join('');

    setTekts(tab2);

    console.log(tab2);
    
  }

  const Decode = (e) => {
    e.preventDefault();
    const textValue = text.current.value;
    const alfabet = {
      'tt':'aa','tx':'ab','tn':'ac','tj':'ad','ty':'ae','te':'af','ts':'eg','tm':'ah','ti':'ai','tx':'aj','td':'ak','tr':'al','tł':'ał','th':'am','tw':'an','tc':'ao','tp':'ap','tl':'ar','tg':'as','tu':'at','tb':'au','to':'aw','tk':'ax','tf':'ay','ta':'az',
      'zz':'bb','zt':'ba','zn':'bc','zj':'bd','zy':'be','ze':'bf','zs':'bg','zm':'bh','zi':'bi','zx':'bj','zd':'bk','zr':'bl','zł':'bł','zh':'bm','zw':'bn','zc':'bo','zp':'bp','zl':'br','zg':'bs','zu':'bt','zb':'bu','zo':'bw','zk':'bx','zf':'by','za':'bz',
    }

    //podział tekstu po 2 znaki
    const tab = textValue.split('').map((letter, index) => {
      if (index % 2 === 0) {
        return letter + textValue[index + 1];
      }
    }
    ).filter((letter) => letter !== undefined);

    //zamiana na alfabet
    const tab2 = tab.map((letter) => {
      return alfabet[letter];
    }
    ).join('');

    setTekts(tab2);

    console.log(tab2);


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