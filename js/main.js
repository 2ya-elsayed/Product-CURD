var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCategory = document.getElementById("productCategory")
var productDesc = document.getElementById("productDesc")
//
var productCount = document.getElementById("productCount")
var productContainer;

if (localStorage.getItem("products") == null) {
    productContainer = []
}
else {
    productContainer = JSON.parse(localStorage.getItem("products"))
    displayProduct()
}

function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productDesc.value,
        count: productCount.value
    }
    if (productCount.value > 1) {
        for (let i = 0; i < productCount.value; i++) {
            productContainer.push(product)
        }
    }
    else {
        productContainer.push(product)
    }
    localStorage.setItem("products", JSON.stringify(productContainer))
    displayProduct()
    clearInp()
}
//displayProduct
function displayProduct() {
    var rowProduct = "";
    //                      100
    for (var i = 0; i < productContainer.length; i++) {
        rowProduct += `
        <tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button type="button" class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
            </td>
            <td><button type="button" class="btn btn-warning">Update</button>
            </td>
        </tr>`
    }
    document.getElementById("tBody").innerHTML = rowProduct
}
//clear
function clearInp() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";
    productCount.value = "" ;
}
// Delete
function deleteRow(i) {
    productContainer.splice(i, 1)
    localStorage.setItem("products", JSON.stringify(productContainer))
    displayProduct()
}
// DeleteAll
function deleteAll() {
    productContainer.splice(0)
    localStorage.setItem("products", JSON.stringify(productContainer))
    displayProduct()
}   
// search 
function search(kelma){
    var rowProduct2 = ""
    for (var i = 0; i < productContainer.length; i++) {
        if( productContainer[i].name.includes(kelma.trim()) ==  true ){
            rowProduct2 += `
            <tr>
                <td>${i + 1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td><button type="button" class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
                </td>
                <td><button type="button" class="btn btn-warning">Update</button>
                </td>
            </tr>`
        }
        }
        document.getElementById("tBody").innerHTML = rowProduct2
    }


// var x ="mohamesalah"
// x.includes("sa") ///true