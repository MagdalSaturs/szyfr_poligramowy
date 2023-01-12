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
      'aa':'tt','ab':'tz','ac':'tn','ad':'tj','ae':'ty','af':'te','eg':'ts','ah':'tm','ai':'ti','aj':'tx','ak':'td','al':'tr','ał':'tł','am':'th','an':'tw','ao':'tc','ap':'tp','ar':'tl','as':'tg','at':'tu','au':'tb','aw':'to','ax':'tk','ay':'tf','az':'ta',
      'bb':'zz','ba':'zt','bc':'zn','bd':'zj','be':'zy','bf':'ze','bg':'zs','bh':'zm','bi':'zi','bj':'zx','bk':'zd','bl':'zr','bł':'zł','bm':'zh','bn':'zw','bo':'zc','bp':'zp','br':'zl','bs':'zg','bt':'zu','bu':'zb','bw':'zo','bx':'zk','by':'zf','bz':'za',
      'cc':'nn','ca':'nt','cb':'nz','cd':'nj','ce':'ny','cf':'ne','cg':'ns','ch':'nm','ci':'ni','cj':'nx','ck':'nd','cl':'nr','cł':'nł','cm':'nh','cn':'nw','co':'nc','cp':'np','cr':'nl','cs':'ng','ct':'nu','cu':'nb','cw':'no','cx':'nk','cy':'nf','cz':'na',
      'dd':'jj','da':'jt','db':'jz','dc':'jn','de':'jy','df':'je','dg':'js','dh':'jm','di':'ji','dj':'jx','dk':'jd','dl':'jr','dł':'jł','dm':'jh','dn':'jw','do':'jc','dp':'jp','dr':'jl','ds':'jg','dt':'ju','du':'jb','dw':'jo','dx':'jk','dy':'jf','dz':'ja',
      'ee':'yy','ea':'yt','eb':'yz','ec':'yn','ed':'yj','ef':'ye','eg':'ys','eh':'ym','ei':'yi','ej':'yx','ek':'yd','el':'yr','eł':'ył','em':'yh','en':'yw','eo':'yc','ep':'yp','er':'yl','es':'yg','et':'yu','eu':'yb','ew':'yo','ex':'yk','ey':'yf','ez':'ya',
      'ff':'ee','fa':'et','fb':'ez','fc':'en','fd':'ej','fe':'ey','fg':'es','fh':'em','fi':'ei','fj':'ex','fk':'ed','fl':'er','fł':'eł','fm':'eh','fn':'ew','fo':'ec','fp':'ep','fr':'el','fs':'eg','ft':'eu','fu':'eb','fw':'eo','fx':'ek','fy':'ef','fz':'ea',
      'gg':'ss','ga':'st','gb':'sz','gc':'sn','gd':'sj','ge':'sy','gf':'se','gh':'sm','gi':'si','gj':'sx','gk':'sd','gl':'sr','gł':'sł','gm':'sh','gn':'sw','go':'sc','gp':'sp','gr':'sl','gs':'sg','gt':'su','gu':'sc','gw':'so','gx':'sk','gy':'sf','gz':'sa',
      'hh':'mm','ha':'mt','bh':'mz','hc':'mn','hd':'mj','he':'my','hf':'me','hg':'ms','hi':'mi','hj':'mx','hk':'md','hl':'mr','hł':'mł','hm':'mh','hn':'mw','ho':'mc','hp':'mp','hr':'ml','hs':'mg','ht':'mu','hu':'mc','hw':'mo','hx':'mk','hy':'mf','hz':'ma',
      'ii':'ii','ia':'it','ib':'iz','ic':'in','id':'ij','ie':'iy','if':'ie','ig':'is','ih':'im','ij':'ix','ik':'id','il':'ir','ił':'ił','im':'ih','in':'iw','io':'ic','ip':'ip','ir':'il','is':'ig','it':'iu','iu':'ib','iw':'io','ix':'ik','iy':'if','iz':'ia',
      'jj':'xx','ja':'xt','jb':'xz','jc':'xn','jd':'xj','je':'xy','jf':'xe','jg':'xs','jh':'xm','ji':'xi','jk':'xd','jl':'xr','jł':'xł','jm':'xh','jn':'xw','jo':'xc','jp':'xp','jr':'xl','js':'xg','jt':'xu','ju':'xb','jw':'xo','jx':'xk','jy':'xf','jz':'xa',
      'kk':'dd','ka':'dt','kb':'dz','kc':'dn','kd':'dj','ke':'dy','kf':'de','kg':'ds','kh':'dm','ki':'di','kj':'dx','kl':'dr','kł':'dł','km':'dh','kn':'dw','ko':'dc','kp':'dp','kr':'dl','ks':'dg','kt':'du','ku':'db','kw':'do','kx':'dk','ky':'df','kz':'da',
      'll':'rr','la':'rt','lb':'rz','lc':'rn','ld':'rj','le':'ry','lf':'re','lg':'rs','lh':'rm','li':'ri','lj':'rx','lk':'rd','lł':'rł','lm':'rh','ln':'rw','lo':'rc','lp':'rp','lr':'rl','ls':'rg','lt':'ru','lu':'rb','lw':'ro','lx':'rk','ly':'rf','lz':'ra',
      'łł':'łł','ła':'łt','łb':'łz','łc':'łn','łd':'łj','łe':'ły','łf':'łe','łg':'łe','łh':'łm','łi':'łi','łj':'łx','łk':'łd','łl':'łr','łm':'łh','łn':'łw','ło':'łc','łp':'łp','łr':'łl','łs':'łg','łt':'łu','łu':'łb','łw':'ło','łx':'łk','ły':'łf','łz':'ła',
      'mm':'hh','ma':'ht','mb':'hz','mc':'hn','md':'hj','me':'hy','mf':'he','mg':'hs','mh':'hm','mi':'hi','mj':'hx','mk':'hd','mł':'hł','mm':'hh','mn':'hw','mo':'hc','mp':'hp','mr':'hl','ms':'hg','mt':'hu','mu':'hb','mw':'ho','mx':'hk','my':'hf','mz':'ha',
      'nn':'ww','na':'wt','nb':'wz','nc':'wn','nd':'wj','ne':'wy','nf':'we','ng':'ws','nh':'wm','ni':'wi','nj':'wx','nk':'wd','nł':'wł','nm':'wh','nn':'ww','no':'wc','np':'wp','nr':'wl','ns':'wg','nt':'wu','nu':'wb','nw':'wo','nx':'wk','ny':'wf','nz':'wa',
      'oo':'cc','oa':'ct','ob':'cz','oc':'cn','od':'cj','oe':'cy','of':'ce','og':'cs','oh':'cm','oi':'ci','oj':'cx','ok':'cd','oł':'cł','om':'ch','on':'cw','op':'cp','or':'cl','os':'cg','ot':'cu','ou':'cb','ow':'co','ox':'ck','oy':'cf','oz':'ca',
      'pp':'pp','pa':'pt','pb':'pz','pc':'pn','pd':'pj','pe':'py','pf':'pe','pg':'ps','ph':'pm','pi':'pi','pj':'px','pk':'pd','pł':'pł','pm':'ph','pn':'pw','po':'pc','pr':'pl','ps':'pg','pt':'pu','pu':'pb','pw':'po','px':'pk','py':'pf','pz':'pa',
      'rr':'ll','ra':'lt','rb':'lz','rc':'ln','rd':'lj','re':'ly','rf':'le','rg':'ls','rh':'lm','ri':'li','rj':'lx','rk':'ld','rł':'lł','rm':'lh','rn':'lw','ro':'lc','rp':'lp','rl':'lr','rs':'lg','rt':'lu','ru':'lb','rw':'lo','rx':'lk','ry':'lf','rz':'la',
      'ss':'gg','sa':'gt','sb':'gz','sc':'gn','sd':'gj','se':'gy','sf':'ge','sg':'gs','sh':'gm','si':'gi','sj':'gx','sk':'gd','sł':'gł','sm':'gh','sn':'gw','so':'gc','sp':'gp','sr':'gl','ss':'gg','st':'gu','su':'gb','sw':'go','sx':'gk','sy':'gf','sz':'ga',
      'tt':'uu','ta':'ut','tb':'uz','tc':'un','td':'uj','te':'uy','tf':'ue','tg':'us','th':'um','ti':'ui','tj':'ux','tk':'ud','tł':'uł','tm':'uh','tn':'uw','to':'uc','tp':'up','tr':'ul','ts':'ug','tt':'uu','tu':'ub','tw':'uo','tx':'uk','ty':'uf','tz':'ua',
      'uu':'bb','ua':'bt','ub':'bz','uc':'bn','ud':'bj','ue':'by','uf':'be','ug':'bs','uh':'bm','ui':'bi','uj':'bx','uk':'bd','uł':'bł','um':'bh','un':'bw','uo':'bc','up':'bp','ul':'bl','us':'bg','ut':'bu','uu':'bb','ub':'bo','uw':'bk','ux':'bf','uy':'ba',
      'ww':'oo','wa':'ot','wb':'oz','wc':'on','wd':'oj','we':'oy','wf':'oe','wg':'os','wh':'om','wi':'oi','wj':'ox','wk':'od','wł':'oł','wm':'oh','wn':'ow','wo':'oc','wp':'op','wl':'ol','wg':'og','wu':'ou','wb':'ob','wo':'oo','wk':'ok','wf':'of','wa':'oa',
      'xx':'kk','xa':'kt','xb':'kz','xc':'kn','xd':'kj','xe':'ky','xf':'ke','xg':'ks','xh':'km','xi':'ki','xj':'kx','xk':'kd','xł':'kł','xm':'kh','xn':'kw','xo':'kc','xp':'kp','xr':'kl','xs':'kg','xt':'ku','xu':'kb','xw':'ko','xx':'kk','xy':'kf','xz':'ka',
      'yy':'ff','ya':'ft','yb':'fz','yc':'fn','yd':'fj','ye':'fy','yf':'fe','yg':'fs','yh':'fm','yi':'fi','yj':'fx','yk':'fd','ył':'fł','ym':'fh','yn':'fw','yo':'fc','yp':'fp','yr':'fl','ys':'fg','yt':'fu','yu':'fb','yw':'fo','yx':'fk','yy':'ff','yz':'fa',
      'zz':'aa','za':'at','zb':'az','zc':'an','zd':'aj','ze':'ay','zf':'ae','zg':'as','zh':'am','zi':'ai','zj':'ax','zk':'ad','zł':'ał','zm':'ah','zn':'aw','zo':'ac','zp':'ap','zr':'al','zs':'ag','zt':'au','zu':'ab','zw':'ao','zx':'ak','zy':'af','zz':'aa',
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
      'nn':'cc','nt':'ca','nz':'cb','nj':'cd','ny':'ce','ne':'cf','ns':'cg','nm':'ch','ni':'ci','nx':'cj','nd':'ck','nr':'cl','nł':'cł','nh':'cm','nw':'cn','nc':'co','np':'cp','nl':'cr','ng':'cs','nu':'ct','nb':'cu','no':'cw','nk':'cx','nf':'cy','na':'cz',//tutaj skończyłam (linijka skończona)
      'jj':'dd','jt':'da','jz':'db','jn':'dc','jy':'de','je':'df','js':'dg','jm':'dh','ji':'di','jx':'dj','jd':'dk','jr':'dl','jł':'dł','jh':'dm','jw':'dn','jc':'do','jp':'dp','jl':'dr','jg':'ds','ju':'dt','jb':'du','jo':'dw','jk':'dx','jf':'dy','ja':'dz',
      'yy':'ee','yt':'ea','yz':'eb','yn':'ec','yj':'ed','ye':'ef','ys':'eg','ym':'eh','yi':'ei','yx':'ej','yd':'ek','yr':'el','ył':'eł','yh':'em','yw':'en','yc':'eo','yp':'ep','yl':'er','yg':'es','yu':'et','yb':'eu','yo':'ew','yk':'ex','yf':'ey','ya':'ez',
      'ee':'ff','et':'fa','ez':'fb','en':'fc','ej':'fd','ey':'fe','es':'fg','em':'fh','ei':'fi','ex':'fj','ed':'fk','er':'fl','eł':'fł','eh':'fm','ew':'fn','ec':'fo','ep':'fp','el':'fr','eg':'fs','eu':'ft','eb':'fu','eo':'fw','ek':'fx','ef':'fy','ea':'fz',
      'ss':'gg','st':'ga','sz':'gb','sn':'gc','sj':'gd','sy':'ge','se':'gf','sm':'gh','si':'gi','sx':'gj','sd':'gk','sr':'gl','sł':'gł','sh':'gm','sw':'gn','sc':'go','sp':'gp','sl':'gr','sg':'gs','su':'gt','sc':'gu','so':'gw','sk':'gx','sf':'gy','sa':'gz',
      'mm':'hh','mt':'ha','mz':'bh','mn':'hc','mj':'hd','my':'he','me':'hf','ms':'hg','mi':'hi','mx':'hj','md':'hk','mr':'hl','mł':'hł','mh':'hm','mw':'hn','mc':'ho','mp':'hp','ml':'hr','mg':'hs','mu':'ht','mc':'hu','mo':'hw','mk':'hx','mf':'hy','ma':'hz',
      'ii':'ii','it':'ia','iz':'ib','in':'ic','ij':'id','iy':'ie','ie':'if','is':'ig','im':'ih','ix':'ij','id':'ik','ir':'il','ił':'ił','ih':'im','iw':'in','ic':'io','ip':'ip','il':'ir','ig':'is','iu':'it','ib':'iu','io':'iw','ik':'ix','if':'iy','ia':'iz',
      'xx':'jj','xt':'ja','xz':'jb','xn':'jc','xj':'jd','xy':'je','xe':'jf','xs':'jg','xm':'jh','xi':'ji','xd':'jk','xr':'jl','xł':'jł','xh':'jm','xw':'jn','xc':'jo','xp':'jp','xl':'jr','xg':'js','xu':'jt','xb':'ju','xo':'jw','xk':'jx','xf':'jy','xa':'xv',
      'dd':'kk','dt':'ka','dz':'kb','dn':'kc','dj':'kd','dy':'ke','de':'kf','ds':'kg','dm':'kh','di':'ki','dx':'kj','dr':'kl','dł':'kł','dh':'km','dw':'kn','dc':'ko','dp':'kp','dl':'kr','dg':'ks','du':'kt','db':'ku','do':'kw','dk':'kx','df':'ky','da':'kz',
      'rr':'ll','rt':'la','rz':'lb','rn':'lc','rj':'ld','ry':'le','re':'lf','rs':'lg','rm':'lh','ri':'li','rx':'lj','rd':'lk','rł':'lł','rh':'lm','rw':'ln','rc':'lo','rp':'lp','rl':'lr','rg':'ls','ru':'lt','rb':'lu','ro':'lw','rk':'lx','rf':'ly','ra':'lz',
      'łł':'łł','łt':'ła','łz':'łb','łn':'łc','łj':'łd','ły':'łe','łe':'łf','łe':'łg','łm':'łh','łi':'łi','łx':'łj','łd':'łk','łr':'łl','łh':'łm','łw':'łn','łc':'ło','łp':'łp','łl':'łr','łg':'łs','łu':'łt','łb':'łu','ło':'łw','łk':'łx','łf':'ły','ła':'łz',
      'hh':'mm','ht':'ma','hz':'mb','hn':'mc','hj':'md','hy':'me','he':'mf','hs':'mg','hm':'mh','hi':'mi','hx':'mj','hb':'mk','hł':'mł','hw':'mn','hc':'mo','hp':'mp','hl':'mr','hg':'ms','hu':'mt','hb':'mu','ho':'mw','hk':'mx','hf':'my','ha':'mz',
      'ww':'nn','wt':'na','wz':'nb','wn':'nc','wj':'nd','wy':'ne','we':'nf','ws':'ng','wm':'nh','wi':'ni','wx':'nj','wd':'nk','wł':'nł','wh':'nm','wc':'no','wp':'np','wl':'nr','wg':'ns','wu':'nt','wb':'nu','wo':'nw','wk':'nx','wf':'ny','wa':'nz',
      'cc':'oo','ct':'oa','cz':'ob','cn':'oc','cj':'od','cy':'oe','ce':'of','cs':'og','cm':'oh','ci':'oi','cx':'oj','cd':'ok','cł':'oł','ch':'om','cw':'on','cp':'op','cl':'or','cg':'os','cu':'ot','cb':'ou','co':'ow','ck':'ox','cf':'oy','ca':'oz',
      'pp':'pp','pt':'pa','pz':'pb','pn':'pc','pj':'pd','py':'pe','pe':'pf','ps':'pg','pm':'ph','pi':'pi','px':'pj','pb':'pk','pł':'pł','ph':'pm','pw':'pn','pc':'po','pl':'pr','pg':'ps','pu':'pt','pb':'pu','po':'pw','pk':'px','pf':'py','pa':'pz',
      'll':'rr','lt':'ra','lz':'rb','ln':'rc','lj':'rd','ly':'re','le':'rf','ls':'rg','lm':'rh','li':'ri','lx':'rj','ld':'rk','lł':'rł','lh':'rm','lw':'rn','lc':'ro','lp':'rp','lr':'rl','lg':'rs','lu':'rt','lb':'ru','lo':'rw','lk':'rx','lf':'ry','la':'rz',
      'gg':'ss','gt':'sa','gz':'sb','gn':'sc','gj':'sd','gy':'se','ge':'sf','gs':'sg','gm':'sh','gi':'si','gx':'sj','gd':'sk','gł':'sł','gh':'sm','gw':'sn','gc':'so','gp':'sp','gl':'sr','gg':'ss','gu':'st','gb':'su','go':'sw','gk':'sx','gf':'sy','ga':'sz',
      'uu':'tt','ut':'ta','uz':'tb','un':'tc','uj':'td','uy':'te','ue':'tf','us':'tg','um':'th','ui':'ti','ux':'tj','ud':'tk','uł':'tł','uh':'tm','uw':'tn','uc':'to','up':'tp','ul':'tr','ug':'ts','ub':'tu','uo':'tw','uk':'tx','uf':'ty','ua':'tz',
      'bb':'uu','bt':'ua','bz':'ub','bn':'uc','bj':'ud','by':'ue','be':'uf','bs':'ug','bm':'uh','bi':'ui','bx':'uj','bd':'uk','bł':'uł','bh':'um','bw':'un','bc':'uo','bp':'up','bl':'ul','bg':'us','bu':'ut','bb':'ub','bo':'ub','bk':'uw','bf':'ux','ba':'uy',
      'oo':'ww','ot':'wa','oz':'wb','on':'wc','oj':'wd','oy':'we','oe':'wf','os':'wg','om':'wh','oi':'wi','ox':'wj','od':'wk','oł':'wł','oh':'wm','ow':'wn','oc':'wo','op':'wp','ol':'wl','og':'wg','ou':'wu','ob':'wb','ok':'wk','of':'wf','oa':'wa',
      'kk':'xx','kt':'xa','kz':'xb','kn':'xc','kj':'xd','ky':'xe','ke':'xf','ks':'xg','km':'xh','ki':'xi','kx':'xj','kd':'xk','kł':'xł','kh':'xm','kw':'xn','kc':'xo','kp':'xp','kl':'xr','kg':'xs','ku':'xt','kb':'xu','ko':'xw','kf':'xy','ka':'xz',
      'ff':'yy','ft':'ya','fz':'yb','fn':'yc','fj':'yd','fy':'ye','fe':'yf','fs':'yg','fm':'yh','fi':'yi','fx':'yj','fd':'yk','fł':'ył','fh':'ym','fw':'yn','fc':'yo','fp':'yp','fl':'yr','fg':'ys','fu':'yt','fb':'yu','fo':'yw','fk':'yx','fa':'yz',
      'aa':'zz','at':'za','az':'zb','an':'zc','aj':'zd','ay':'ze','ae':'zf','as':'zg','am':'zh','ai':'zi','ax':'zj','ad':'zk','ał':'zł','ah':'zm','aw':'zn','ac':'zo','ap':'zp','al':'zr','ag':'zs','au':'zt','ab':'zu','ao':'zw','ak':'zx','af':'zy','zz':'aa',
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