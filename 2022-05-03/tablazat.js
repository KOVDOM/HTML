var adatok=[
    {kijelolt:false,nev:"Nagy Elek",szdatum:"2003.05.30.",szin:"gray"},
    {kijelolt:false,nev:"Marószegi Krisztián",szdatum:"2003.06.03",szin:"blue"},
    {kijelolt:false,nev:"Új Csongor",szdatum:"2000.01.01.",szin:"red"}
];

function render(){
    document.getElementById("uj").onclick=uj;
    document.getElementById("modosit").onclick=modosit;
    document.getElementById("torol").onclick=torol;
    var tablazatkod="<table>";
    for(const szemely of adatok) {
        tablazatkod+=`
        <tr id='${szemely.nev}' style="background-color:${szemely.szin}; font-weight:${szemely.kijelolt?'bold':''}">
            <td>${szemely.nev}</td>
            <td>${szemely.szdatum}</td>
        </tr>`;
    }
    tablazatkod+="</table>";
    var sorok=document.getElementsByTagName("tr");
    document.getElementById("tablazat").innerHTML=tablazatkod;
    console.log(sorok);
    for(var sor of sorok){
        sor.onclick=kijelol;
    }
}
window.onload=render;

function uj(){
    let neve=document.getElementById("nev").value;
    let szine=document.getElementById("szin").value;
    let datuma=document.getElementById("szdatum").value;
    adatok.push(
        {
            nev:neve,
            szin:szine,
            szdatum:datuma}
        );
    render();
}
function kijelol() {
    console.log(this.id);
    for(var i=0;i<adatok.length;i++){
        if(adatok[i].nev==this.id){
            adatok[i].kijelolt=true;
            console.log(adatok[i]);
            document.getElementById("nev").value=adatok[i].nev;
            document.getElementById("szin").value=adatok[i].szin;
            document.getElementById("szdatum").value=adatok[i].szdatum;
        }else{
            adatok[i].kijelolt=false;
        }
    }
    render();
}

function modosit(){
    let neve= document.getElementById("nev").value;
    let szine= document.getElementById("szin").value;
    let datuma= document.getElementById("szdatum").value;
    console.log(this.id);
    for(var i=0;i<adatok.length;i++){
        if(adatok[i].kijelolt){
            adatok[i].nev=neve;
            adatok[i].szin=szine;
            adatok[i].szdatum=datuma;
        }
    }
    render();
}

function torol(){
    for(var i=0;i<adatok.length;i++){
        if(adatok[i].kijelolt){
            adatok.splice(i,1);
        }
    }
    render();
}