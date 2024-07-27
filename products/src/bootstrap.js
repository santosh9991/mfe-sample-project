import faker from 'faker';



const mount = (el)=>{
    let products = '';
    for(let i=0; i< 3; i++){
        //gets fake product name
        const name = faker.commerce.productName();
        //joins the divs with fake product names
        products+=`<div>${name}</div>`

    }
    el.innerHTML = products
    console.log('conainer el', el)
}
if(process.env.NODE_ENV==='development'){
    // NODE_ENV is an environement variable set by webpack. We added mode as development in webpack config.
    // It we are running this in container it would also have a development mode. It is bit tricker to implement
    // One easy way could be to have a unoque div id inside the html that could only be identified by products team.
    // If there is some element with that element in the id, we are going to assume that we are running in product in isolation
    const el = document.querySelector('#dev-products');
    if(el){
        mount(el)
    }

}
export { mount }
//when we run this code directly browsers dont understand import statement. Instead of executing it directly we use webpack
// dependency we installed. i/p JS -----> webpack -------> transforms------>browser understandable