let colort = "red"
let mouseclick = false
let clikdoble = 0


let nomber_row = document.querySelector('.nomber_row')
for (let i = 0; i < 15; i+=1){
    let num = document.createElement('div')
    num.innerHTML = 1
    num.classList.add('num_row')
    nomber_row.appendChild(num)
}






let field = document.querySelector('.field')
for (let i = 0; i < 225; i+=1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', '${i}')
    field.appendChild(cell)

}
let nomber_col = document.querySelector('.nomber_col')
for (let i = 0; i < 15; i+=1){
    let num = document.createElement('div')
    num.innerHTML = 1
    num.classList.add('num_col')
    nomber_col.appendChild(num)
}
let cells = document.querySelectorAll('.cell')

for(let cell of cells){
    cell.style.backgroundColor = "blue"
}

document.addEventListener('mouseup', function(){
        mouseclick = false
    
    }) 
document.addEventListener('mousedown', function(){
        mouseclick = true
    }) 


for (let cell of cells){
    cell.addEventListener('click', function(){
        cell.style.backgroundColor = colort
        
        
    }) 
cell.addEventListener('mousemove', function(){
        if (mouseclick == true)
        cell.style.backgroundColor = colort
    })
} 
document.querySelector('.redpaper').addEventListener('click', function(){
    colort = 'red'
    }) 

// document.querySelector('.greenpaper').addEventListener('click', function(){
//     colort = 'green'
//     }) 

document.querySelector('.delaypaper').addEventListener('click', function(){
    colort = 'blue'
    }) 

document.querySelector('.allpaper').addEventListener('click', function(){
    for(let cell of cells){
        cell.style.backgroundColor = "blue"
    }
    printirg(g)
    }) 


let a = ''


setInterval(function(){
     a = ''
    for (let cell of cells){
   
    if(cell.style.backgroundColor == "blue"){
    a += '0';}
    if(cell.style.backgroundColor == "red"){
    a += '1'}
    if(cell.style.backgroundColor == "green"){
    a += '2'}
  

        
        
    }
document.cookie = `user=${a}; max-age=1000000000000;`
;}
, 1000)


let cookies = document.cookie
cookies = cookies.split(';')




for (let i = 0; i < cookies.length; i+=1){
    let cookie = cookies[i]
    let name_and_value = cookie.split('=')
    let name = name_and_value[0]
    a = name_and_value[1]
    if(name == ' user'){
        console.log(a)
    for (let i = 0; i < cells.length; i+=1){
   
    if(a[i] == '0'){
    cells[i].style.backgroundColor = "blue";}
    if(a[i] == '1'){
    cells[i].style.backgroundColor = "red"}
    if(a[i] == '2'){
    cells[i].style.backgroundColor = "green"}    
    }
}}

irgsp = []
let g = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
level = document.querySelector('.level')
level.innerHTML = 0
printirg(g)
irgsp.push("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
irgsp.push("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
irgsp.push("000000000000000000000000000000000000000000000000000000000000000222222222000000000000000000000000000000000000222222222000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
irgsp.push("000000000000000000000000000000000000000000000000222222220000000000000000000000000000000000000222222220000000000000000000000000000000000000222222220000000000000000000000000000000000000000000000000000000000000000000000000000000")
irgsp.push("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")


document.querySelector('.refresh').addEventListener('click',function (){
    b = ''
for (let cell of cells){

if(cell.style.backgroundColor == "blue"){
b += '0';}
if(cell.style.backgroundColor == "red"){
b += '1'}
if(cell.style.backgroundColor == "green"){
b += '2'}}

   for(let i = 0; i < irgsp.length-1; i++){

       if(b == irgsp[i].replaceAll('2', '1')){
           printirg(irgsp[i+1])
            g = irgsp[i+1]
            level.innerHTML = i+1
            if (i+1 == 4){
                level.innerHTML = 0
            }
       }
       
       
       
       
       //printirg(g)
       //irgsp.push(g)//могут быть проблемы
       
   }
   console.log(b)
})







// let g = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222200000000000000000000000000000000000000000000000000000222222222000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

// let g = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222200000000000000000000000000000000000000000000000000002222222222000000000000000000000000000000000000000000000000022222222222200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 "


function printirg(g){
for (let i = 0; i < cells.length; i+=1){

    if(g[i] == '0'){
    cells[i].style.backgroundColor = "blue";}
    if(g[i] == '1'){
    cells[i].style.backgroundColor = "red"}
    if(g[i] == '2'){
    cells[i].style.backgroundColor = "green"}    
    }   
}