var state;

function lekerdez() {

  
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=15d17ce5384d5d7a43a97af40fc78181&units=metric&lang=hu', {
      method: 'GET'
    })
      .then(function (response) {
        console.log(response)
        if (!response.ok) {
          return Promise.reject('login error')
        }
        return response.json();
      })
      .then(function (temp) {
        console.log(temp);
      console.log(temp.data);
      render();
      //document.getElementById('login').style.display="none";
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      })

  };
  
  function render(){
    console.log(state);
    var tmp=`<p>Hőmérséklet: +${state}</p>`;
  
    for(var u of state.list){
      tmp+=`<p>Hőmérséklet: +${state}</p>`;
    }
    document.getElementById('megjelenit').innerHTML=tmp+`</p>`;
  }
  //<li class="list-group-item">${unknown.name}</li>
  
  function renderUnknownId(){
    console.log(state.id);
    if(state.id!=""){
      var tmp=`<table class='table'><tr><th scope='col'>
    ID</th><th scope='col'>
    Name</th><th scope='col'>Year</th><th scope='col'>
    Color</th> <th scope="col">
    Pantone_value</th></tr>`;  
    tmp+=`<tr>
      <td>${state.id.id}</td>
      <td>${state.id.name}</td>
      <td>${state.id.year}</td>
      <td style="background-color:${state.id.color}">${state.id.color}</td>
      <td>${state.id.pantone_value}</td>    
      </tr>`;
      document.getElementById('unknownid').innerHTML=tmp+`</table>`;
    }
  }