var productnameinput=document.getElementById('name')
var productpriceinput=document.getElementById('price')
var productmodelinput=document.getElementById('model')
var prodectdescinput=document.getElementById('des')
var addproduct=[];
if(localStorage.getItem('product')!=null){
    addproduct = JSON.parse(localStorage.getItem('product'))
}
function takeinput(){
    var print=
        {
            Name:productnameinput.value
            ,Price:productpriceinput.value
            , Model:productmodelinput.value
            ,description:prodectdescinput.value
        }
 addproduct.push(print)
localStorage.setItem('product',JSON.stringify(addproduct))
  display()
  clear()
}
function display(){
    var all=``
    for(var i=0;i<addproduct.length;i++){
        all+=`
        <tr>
        <td>${i+1}</td>
        <td>${addproduct[i].Name}</td>
        <td>${addproduct[i].Price}</td>
        <td>${addproduct[i].Model}</td>
        <td>${addproduct[i].description}</td>
        <td><button onclick="deleteitem(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateitem(${i})" class="btn btn-info">Update</button></td>
         </tr>
        `
    }
    document.getElementById('body').innerHTML=all
}
display()
function clear(){
    productnameinput.value=""
    productpriceinput.value=""
    productmodelinput.value=""
    prodectdescinput.value=""
}
function deleteitem(index){
    addproduct.splice(index,1)
    localStorage.setItem('product',JSON.stringify(addproduct))
    display()
}
function searchitem(){
var srch=document.getElementById('searchinput').value
var box=``
for(var i=0;i<addproduct.length;i++){
    if(addproduct[i].Name.toLowerCase().includes(srch.toLowerCase())){
        box+=`
        <tr>
        <td>${i+1}</td>
        <td>${addproduct[i].Name.replace(srch,'<span>'+srch+'</span>')}</td>
        <td>${addproduct[i].Price}</td>
        <td>${addproduct[i].Model}</td>
        <td>${addproduct[i].description}</td>
        <td><button onclick="deleteitem(${i})" class="btn btn-danger">Delete</button></td>
        <td><button class="btn btn-info">Update</button></td>
         </tr>
        `
    }
}
document.getElementById('body').innerHTML=box
}
function updateitem(index){
addproduct[index].Name=productnameinput.value
addproduct[index].Price=productpriceinput.value
addproduct[index].Model=productmodelinput.value
addproduct[index].description=prodectdescinput.value
localStorage.setItem('product',JSON.stringify(addproduct))
display()
clear()
}
