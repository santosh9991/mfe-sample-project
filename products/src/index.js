import faker from 'faker';

let products = '';
for(let i=0; i< 3; i++){
    //gets fake product name
    const name = faker.commerce.productName();
    //joins the divs with fake product names
    products+=`<div>${name}</div>`

}
document.querySelector("#dev-products").innerHTML = products
//when we run this code directly browsers dont understand import statement. Instead of executing it directly we use webpack
// dependency we installed. i/p JS -----> webpack -------> transforms------>browser understandable