/*
  Product

  Create
  Read
  Update
  Delete

  CRUD

*/

var state = {
    products: [
      {
        id: uuidv4(),
        name: "Kerékpármez 1",
        price: 2500,
        isInStock: true,
        penznem:" FT",
        kep:"https://www.triumph-sports.com/wp-content/uploads/2019/06/D66-1-2.jpg",
      },
      {
        id: uuidv4(),
        name: "Kerékpármez 2",
        price: 3500,
        isInStock: false,
        penznem:" FT",
        kep:"https://www.triumph-sports.com/wp-content/uploads/2019/03/D13.jpg",
      },
      {
        id: uuidv4(),
        name: "Kerékpármez 3",
        price: 5500,
        isInStock: true,
        penznem:" €",
        kep:"https://m.media-amazon.com/images/I/61wi-26SbbL._UX569_.jpg",
      }
    ],
    editedId: ''
  };
  
  function renderEditProduct() {
  
    if(state.editedId === '') {
      document.getElementById('edit-product').innerHTML = '';
      return;
    }
  
    var foundProduct;
    for(var product of state.products) {
      if(product.id === state.editedId) {
        foundProduct = product;
        break;
      }
    }
    
    var editFormHTML = `
      <h3>Termék szerkesztése:</h3>
      <form id="update-product" class="p-5">
        <label class="w-100">
          Név:
          <input class="form-control" type="text" name="name" value="${foundProduct.name}">
        </label>
        <label class="w-100">
          Ár:
          <input class="form-control" type="number" name="price" value="${foundProduct.price}">
        </label>
        <label class="w-100">
              Pénznem:
              <input class="form-control" type="text" name="penznem" value="${foundProduct.penznem}">
            </label>
              <label class="w-100">
                Kép:
                <input class="form-control" type="text" name="kep" value="${foundProduct.kep}">
              </label>
              <label class="w-100">
          Van készleten?
          <input type="checkbox" name="isInStock" ${foundProduct.isInStock ? 'checked' : ''}>
        </label>
        <button class="btn btn-success" type="submit">Küldés</button>
      </form>
    `;
  
    document.getElementById('edit-product').innerHTML = editFormHTML;
  
    document.getElementById('update-product').onsubmit = function (event) {
      event.preventDefault();
      var price = Number(event.target.elements.price.value);
      var name = event.target.elements.name.value;
      var isInStock = event.target.elements.isInStock.checked;
      var penznem=event.target.elements.penznem.value;
      var kep =event.target.elements.kep.value;
  
      var foundIndex;
      for(var index = 0; index < state.products.length; index++) {
        if(state.products[index].id === state.editedId) {
          foundIndex = index;
          break;
        }
      }
  
      // state change
      state.products[foundIndex] = {
        id: state.editedId,
        name: name,
        price: price,
        isInStock: isInStock,
        penznem: penznem,
        kep:kep
      };
      state.editedId = '';
  
      // render
      renderProducts();
      renderEditProduct();
  
    }
    
    
  }
  
  function renderProducts() {
    var productsHTML = "";
  
    for (var product of state.products) {
      productsHTML += `
          <div class="card m-2 p-2 ${product.isInStock ? "" : "bg-danger"}" style="width: 15rem">
          <img class="card-img-top" src="${product.kep}">
            <p>${product.name}</p>
            <p>${product.price}${product.penznem}</p>
            <button class="btn btn-info float-right edit-product mb-2" data-productid="${product.id}">
              Szerkesztés
            </button>
            <button class="btn btn-dark float-right delete-product" data-productid="${product.id}">
              Törlés
            </button>
          </div>
        `;
    }
  
    document.getElementById("product-list-component").innerHTML = productsHTML;
  
    for(var editBtn of document.querySelectorAll('.edit-product')) {
      editBtn.onclick = function (event) {
        var id = event.target.dataset.productid;
        state.editedId = id;
        renderEditProduct();
      }
    }
  
    for(var deleteBtn of document.querySelectorAll('.delete-product')) {
      // action
      deleteBtn.onclick = function (event) {
        var id = event.target.dataset.productid;
  
        var foundIndex;
        for(var index = 0; index < state.products.length; index++) {
          if(state.products[index].id === id) {
            foundIndex = index;
            break;
          }
        }
  
        // state change
        state.products.splice(foundIndex, 1);
        
        // render
        renderProducts();
      }
    }
    // action
document.getElementById("create-product").onsubmit = function(event) {
  event.preventDefault();
  var price = Number(event.target.elements.price.value);
  var name = event.target.elements.name.value;
  var isInStock = event.target.elements.isInStock.checked;
  var penznem=event.target.elements.penznem.value;
  var kep=event.target.elements.kep.value;
  
    // state change
    state.products.push({
      id: uuidv4(),
      name: name,
      price: price,
      isInStock: isInStock,
      penznem: penznem,
      kep:kep
    });
      // render
      renderProducts();
    };
  }
  
  window.onload = renderProducts;
  
  // action, state change, render
  // tömbhöz új elem hozzáadása: state.products.push({name: '...', price: 2500, isInStock: false})
  

  
  
  
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}