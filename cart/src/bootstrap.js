import faker from 'faker';
const mount = (el)=>{

    const cartLogic = `<div>total ${faker.random.number()}items added to cart</div>`
    el.innerHTML = cartLogic
}
if(process.env.NODE_ENV==='development'){
    const el = document.querySelector('#dev-cart');
    if(el){
        mount(el)
    }
}
export { mount }