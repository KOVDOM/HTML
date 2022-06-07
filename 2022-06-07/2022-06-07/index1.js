/*
    Times url: http://date.jsontest.com
    Echo url: http://echo.jsontest.com/alma/10/eper/20/szilva/15
    Validate url: http://validate.jsontest.com/?json={name:"Kiss István", kor:14}
    hibás url: http://validate.jsontest.com/?json={name:"Kiss István", kor:}
*/
var state={
    data:{},
    message:""
}
document.getElementById("timemenu").onclick=function(){
    fetchTime();
}

async function fetchTime(){
    var response= await fetch("http://date.jsontest.com");
    console.log(response);
    if(response.ok==false){
        console.log("kommunikációs hiba");
        state.message="kommunikációs hiba";
        return;
    }
    var time= await response.json();
    state.data=time;
    //console.log(time);
    render();
}

function render(){
    console.log(state.data);
    var d=new Date(state.data.milliseconds_since_epoch);
    console.log(d.toLocaleString());
    var napok=["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"];
    console.log(napok[d.getDay()]);
    var htmltime="<div class='display-5'>"+d.toLocaleString()+" "+napok[d.getDay()]+"</div>"
    document.getElementById("kiiras").innerHTML=htmltime;
}

var state={
    data:{},
    message:""
}
document.getElementById("echomenu").onclick=function(){
    fetchEcho();
}

async function fetchEcho(){
    var response= await fetch("http://echo.jsontest.com/alma/10/eper/20/szilva/15");
    console.log(response);
    if(response.ok==false){
        console.log("kommunikációs hiba");
        state.message="kommunikációs hiba";
        return;
    }
    var echo= await response.json();
    state.data=echo;
    //console.log(time);
    render2();
}

function render2(){
    console.log(state.data);
    //var d=new Date(state.data);
    //console.log(d.toLocaleString());
    var gyumolcsok=["szilva","alma","eper"];
    var darabszam=[15,10,20]
    console.log(gyumolcsok);
    console.log(gyumolcsok+" "+darabszam);
    var osszeg=darabszam[0]+darabszam[1]+darabszam[2];
    var htmlecho="<div class='display-5'>"+gyumolcsok[0]+": "+darabszam[0]+"<br>"+gyumolcsok[1]+": "+darabszam[1]+"<br>"+gyumolcsok[2]+": "+darabszam[2]+"<br>"+"Összegzés: "+osszeg+"</div>"
    document.getElementById("kiiras").innerHTML=htmlecho;
}

var nev="";
  document.getElementById("validatemenu").onclick=function(){
    input()
}
function kuld(){
    nev=document.getElementById('nev').value;
    fetchValidate();
}
async function fetchValidate(){
    
  var response= await fetch("http://validate.jsontest.com/?json={name:%22Kiss%20Istv%C3%A1n%22,%20kor:14}");
  console.log(response);

  if (response.ok==false) {
      console.log("ERROR!");
      state.message="Kommunkiációs hiba";
      return;

  }
  var validate=await response.json();
  state.data=validate;
  
  renderThree();
}
function renderThree(){
    var kiir=`<p>Megadott adatok ${state.data.validate ? "helyesek!" : "helytelenek!"}</p>`;
    document.getElementById("kiiras").innerHTML=kiir;
}
function input(){
    var form=`<input type="text" placeholder="nev" id="Név:"><input type="button" value="ok" onclick="kuld()">`
    document.getElementById("kiiras").innerHTML=form;


}