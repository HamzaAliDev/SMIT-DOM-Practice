let elementh1 = document.getElementsByTagName('h1')
let elementh2 = document.getElementsByTagName('h2')
console.log(elementh2);
console.log(elementh2[0]);

elementh1[0].style.color = "red"
elementh1[1].style.color = "green"


for (let index = 0; index < elementh2.length; index++) {
     elementh2[index].style.backgroundColor = "black";
     elementh2[index].style.color = "white";
       
}

let elementTag = document.getElementsByClassName('anchor-tag')

for (let index = 0; index < elementTag.length; index++) {
     elementTag[index].style.color = 'red';
     elementTag[index].style.textDecoration = 'none'
     elementTag[index].style.fontSize = "1.5rem"
}

let a = document.createElement('a');
    a.innerHTML = "Google"
     a.href = "https://www.google.com"
    document.body.appendChild(a);