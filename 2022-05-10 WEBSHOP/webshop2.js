var adatok=[
    {
        id:uuidv4(),
        marka:"Trek",
        tipus:"orszaguti",
        evjarat:2021,
        ar:3000
    },
    {
        id:uuidv4(),
        marka:"Cervelo",
        tipus:"orszaguti",
        evjarat:2020,
        ar:3500
    },
    {
        id:uuidv4(),
        marka:"Colnago",
        tipus:"orszaguti",
        evjarat:2022,
        ar:5000
    }
];

function render(){
    var termek=""
    for (const interator of adatok){
        termek+=`<form class="doboz">
        <div class="marka">
            ${interator.marka}
        </div>
        <div class="tipus">
            ${interator.tipus}
        </div>
        <div class="evjarat">
            ${interator.evjarat}
        </div>
        <div class="ar">
            ${interator.ar} €
        </div>
        <input type="button" class="szerkesztes" onclick="szerkesztes(doboz)" value="Szerkesztés"><br>
        <input type="button" class="torles" onclick="torles(this)" value="Törlés">
    </form>`
    }
    console.log(termek);
    document.getElementById('tartalom').innerHTML=termek;
    document.getElementById('uj').onclick=uj;
}
window.onload=render;
function uj(){
    var marka=document.getElementById("marka").value;
    var tipus=document.getElementById("tipus").value;
    var evjarat=document.getElementById("evjarat").value;
    var ar=document.getElementById("ar").value;
    adatok.push({id:id,marka:marka,tipus:tipus,evjarat:evjarat,ar:ar})
    render()
}

//document.getElementById('torles').onclick=torles;
function torles(t){
    var id=t.parentNode.id;
    var index;
    for (var i=0;1 < adatok.length; i++){
        if(adatok[i].id == id){
            index=i;
            break;
        }
    }
    console.log(index);
    adatok.splice(index,1);
    render();
}

function szerkeszteshez(doboz){
    var id=doboz.parentNode.id;
    for(var i=0;1<adatok.length;i++){
        if(adatok[i].id==id){
            document.getElementById("id").value=adatok[i].id;
            document.getElementById("marka").value=adatok[i].marka;
            document.getElementById("tipus").value=adatok[i].tipus;
            document.getElementById("evjarat").value=adatok[i].evjarat;
            document.getElementById("ar").value=adatok[i].ar;
            break;
        }    
    }
}

function szerkesztes(){
    var id=document.getElementById("id").value;
    for(var i=0; 1<adatok.length; i++){
        if(adatok[i].id==id){
            adatok[i].marka=document.getElementById("marka").value;
            adatok[i].tipus=document.getElementById("tipus").value;
            adatok[i].evjarat=document.getElementById("evjarat").value;
            adatok[i].ar=document.getElementById("ar").value;
            break;
        }
    }
    render();
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}