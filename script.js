//1
let textone =  document.querySelector('#one')
textone.innerText = Math.floor(Math.random() * (100 - 0 + 1) + 0)
console.log(textone);
//2
let names = ['Alex','John','Constantine','Kabachok','Tyler','Smith']
let alex = names.slice(0, 1)
let alexname = document.querySelector('#Alex')
alexname.innerText = alex

let John = names.slice(1, 2)
let Jhonname = document.querySelector('#John')
Jhonname.innerText = John

let Constantine = names.slice(2, 3)
let Constantinename = document.querySelector('#Constantine')
Constantinename.innerText = Constantine

let Kabachok = names.slice(3, 4)
let Kabachokname = document.querySelector('#Kabachok')
Kabachokname.innerText = Kabachok

let Tyler = names.slice(4, 5)
let Tylername = document.querySelector('#Tyler')
Tylername.innerText = Tyler

let Smith = names.slice(5, 6)
let Smithname = document.querySelector('#Smith')
Smithname.innerText = Smith
 



