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
    document.getElementById("time").innerHTML=htmltime;
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
    document.getElementById("echo").innerHTML=htmlecho;
}