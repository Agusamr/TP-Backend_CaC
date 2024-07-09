const form = document.getElementById("crear_pizza_form")
const btn = document.getElementById("btn-post")

const URL_API_BASE = "http://127.0.0.1:8000/lista-de-pizzas/pizza/"

btn.addEventListener(
    "click", (e) => {
        e.preventDefault()
        fetch(URL_API_BASE,{
            method: 'POST',
            body: new FormData(form)
        }).then(res => console.log(res))
        .catch(error => console.log({error}))
    }
)
const btnGet = document.getElementById("btn-get")
btnGet.addEventListener(
    "click", () => {
        fetch(URL_API_BASE)
        .then(res => res.json())
        .then(data =>console.log(data))
        .catch(error => console.log({error}))
    }
)
// class Pizza{
//     constructor({nombre,tamanio,precio}){
        
//         this.id = id
//         this.nombre = nombre
//         this.tamanio = tamanio
//         this.precio = precio
//         this.url = "http://127.0.0.1:8000/lista-de-pizzas/pizza/"
        
//     }

//     createDiv(){
//         this.div = document.createElement("div")

//         this.div.innerHTML =  `
//             <div id="${this.id}">
//                 <h4>${this.nombre}</h4>
//                 <hr>
//                 <ul>
//                     <li>tamaño: ${this.tamanio}</li>
//                     <li>precio: ${this.precio}</li>
                    
//                 </ul>
//             </div>
//         `

//         let btn = document.createElement("button")
//         btn.innerText = `Borrar Pizza ${this.nombre}`
//         btn.addEventListener("click", ()=>{
//             fetch(`${this.url}${this.id}/`,{method:"DELETE"})
//             .then(this.removeDisplay())
//             .catch(error => console.log({error}))
//         })
//         this.div.appendChild(btn)
//         return this.div

//     }
  
//     removeDisplay() {
//         this.div.remove();
//     }
// }


// const btnGet = document.getElementById("btn-get")
// btnGet.addEventListener(
//     "click", () => {
//         fetch(URL_API_BASE)
//         .then(res => res.json())
//         .then(data =>{
//             let container = document.getElementById("pizza")
//             data.map(p =>  new Pizza(p))
//             .forEach(p => container.appendChild(p.createDiv()))
//         } 
//         )
//         .catch(error => console.log({error}))
//     }
// )