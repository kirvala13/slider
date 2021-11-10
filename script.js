let left = document.querySelector('.left');
let rights = document.querySelector('.right');
let container = document.querySelector('.container');
let currentindex = 0;
const slideobj = [
    { 
        id:1,
        image:"https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg",
        tittle:'food',
        description: "blah blac"
    },
    {
        id:2,
        image:"https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg",
        tittle:'food2',
        description: "food2 describ"
    },   {
        id:3,
        image:"https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg",
        tittle:'food3',
        description: "food3 describ"
    },
    { 
        id:1,
        image:"https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg",
        tittle:'food4',
        description: "food4"
    },
]
function display(index){
for(let i = 0; i< slideobj.length;i++){
    let result= `
    <div class="card"  id='${slideobj[i].id}'>
    <img src="${slideobj[i].image}" alt="">
    <h1>${slideobj[i].tittle}</h1>
    <p>${slideobj[i].description}</p>
  </div>
    `
    container.innerHTML += result;
    
}

}

display()
rights.addEventListener('click', (id) => {
    container.innerHTML=" ";
    let lastElement = slideobj.pop();
    let bla = slideobj.unshift(lastElement);
    display()
})




left.addEventListener('click', () => {
    container.innerHTML= " ";
    let firstElement = slideobj.shift();
    let last = slideobj.push(firstElement);
    display();
 })