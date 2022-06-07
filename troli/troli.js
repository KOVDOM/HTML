var vegallomasNevek = [];
vegallomasNevek["70"] = "Kossuth Lajos tér - Erzsébet királyné útja, aluljáró";
vegallomasNevek["72"] = "Orczy tér - Zugló vasútállomás (Hermina út)";
vegallomasNevek["73"] = "Arany János utca - Keleti pályaudvar";
vegallomasNevek["74"] = "Károly körút (Astoria) - Csáktornya park";
vegallomasNevek["75"] = "Jászai Mari tér - Puskás Ferenc Stadion";
vegallomasNevek["76"] = "Jászai Mari tér - Keleti pályaudvar";
vegallomasNevek["77"] = "Puskás Ferenc Stadion - Kála utca";
vegallomasNevek["78"] = "Kossuth Lajos tér - Keleti pályaudvar (Garay utca)";
vegallomasNevek["79"] = "Keleti pályaudvar - Kárpát utca";
vegallomasNevek["80"] = "Keleti pályaudvar - Örs vezér tere";
vegallomasNevek["81"] = "Örs vezér tere - Fischer István utca";
vegallomasNevek["82"] = "Uzsoki Utcai Kórház - Örs vezér tere";
vegallomasNevek["83"] = "Fővám tér - Orczy tér";

function jaratKiiras(elem, index){
	var ujElem = document.createElement("option");
    var ujSzoveg = document.createTextNode(index); 
    ujElem.appendChild(ujSzoveg);
    document.getElementById("jaratSzam").appendChild(ujElem);
}

function vegallomasKiiras(jarat){
    document.getElementById("vegallomasok").innerHTML=vegallomasNevek[jarat];
}

function fel() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function kereseskiiras(){
  var db1=0
  for (const key in vegallomasNevek) {
    db1+=1;
  }
  document.getElementById("jarat").innerHTML=db1+" járatból számodra szóbajöhet:<br>";
  var db2=0;
  let keres1=document.getElementById("keres").value;
  for (const key in vegallomasNevek) {
    if(vegallomasNevek[key].includes(keres1)){
      db2++;
    }
  }
  document.getElementById("jarat").innerHTML+=db2+" db<br>";
  let jaratok="";
  for (const key in vegallomasNevek) {
    if(vegallomasNevek[key].includes(keres1)){
      jaratok+=key+"; ";
    }
  }
  document.getElementById("jarat").innerHTML+=jaratok;
}