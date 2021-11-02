const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");

const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cn = document.getElementById("cn");
const cl = document.getElementById("cl");

let num ="";
let letra = "";


const fnA1 = () => {
    if (letters.innerHTML == "") {
        letters.innerHTML = "A";
        letra = "A"
    } else {
        numbers.innerHTML = "1";
        num = "1";
    }
};
const fnB2 = () => {
    if (letters.innerHTML == "A") {
        letters.innerHTML += "B";
        letra = "AB";
    }else{
        if (numbers.innerHTML== "1"){
            numbers.innerHTML += "2"
            num = "12";
        }else if(letra != "A" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "1") {
            alert("FALTAN NUMEROS");
        }
        }
    };
const fnC3 = () => {
    if (letters.innerHTML == "AB") {
        letters.innerHTML += "C";
        letra = "ABC";
    }else{
        if (numbers.innerHTML== "12"){
            numbers.innerHTML += "3"
            num = "123";
        }else if(letra != "AB" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "12") {
            alert("FALTAN NUMEROS");
        }
        }
    };
const fnD4 = () => {
    if (letters.innerHTML == "ABC") {
        letters.innerHTML += "D";
        letra = "ABCD"
    }else{
        if (numbers.innerHTML== "123"){
            numbers.innerHTML += "4";
            num = "1234"
        }else if(letra != "ABC" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "123") {
            alert("FALTAN NUMEROS");
        }
    }
};
const fnE5 = () => {
    if (letters.innerHTML == "ABCD") {
        letters.innerHTML += "E";
        letra = "ABCDE"
    }else{
        if (numbers.innerHTML== "1234"){
            numbers.innerHTML += "5";
            num = "12345";
        }else if(letra != "ABCD" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "1234") {
            alert("FALTAN NUMEROS");
        }
    }
};
const fnF6 = () => {
    if (letters.innerHTML == "ABCDE") {
        letters.innerHTML += "F";
        letra = "ABCDEF";
    }else{
        if (numbers.innerHTML== "12345"){
            numbers.innerHTML += "6";
            num = "123456";
        }else if(letra != "ABCDE" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "12345") {
            alert("FALTAN NUMEROS");
        }
    }
};
const fnG7 = () => {
    if (letters.innerHTML == "ABCDEF") {
        letters.innerHTML += "G";
        letra = "ABCDEFG";
    }else{
        if (numbers.innerHTML== "123456"){
            numbers.innerHTML += "7"
            num = "1234567";
        }else if(letra != "ABCDEF" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "123456") {
            alert("FALTAN NUMEROS");
        }
    }
};
const fnH8 = () => {
    if (letters.innerHTML == "ABCDEFG") {
        letters.innerHTML += "H";
        letra = "ABCDEFGH";
    }else{
        if (numbers.innerHTML== "1234567"){
            numbers.innerHTML += "8"
            num = "12345678";
        }else if(letra != "ABCDEFG" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "1234567") {
            alert("FALTAN NUMEROS");
        }
    }
};
const fnI9 = () => {
    if (letters.innerHTML == "ABCDEFGH") {
        letters.innerHTML += "I";
        letra = "ABCDEFGHI";
    }else{
        if (numbers.innerHTML== "12345678"){
            numbers.innerHTML += "9"
            num = "123456789";
        }else if(letra != "ABCDEFGH" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "12345678") {
            alert("FALTAN NUMEROS");
        }
    }
};
const fnJ0 = () => {
    if (letters.innerHTML == "ABCDEFGHI") {
        letters.innerHTML += "J";
        letra = "ABCDEFGHIJ"
    }else{
        if (numbers.innerHTML== "123456789"){
            numbers.innerHTML += "10"
            num = "12345678910"
        }else if(letra != "ABCDEFGHI" && num == "") {
            alert("FALTAN LETRAS");
        }else if (letra == "ABCDEFGHIJ" && num != "123456789") {
            alert("FALTAN NUMEROS");
        }
    }
};
console.log(letters.innerHTML);
const fnCn = () => {
  numbers.innerHTML = "";
};
const fnCl = () => {
  letters.innerHTML = "";
};




a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};
f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
j0.onclick = () => {
  fnJ0();
};
cn.onclick = () => {
  fnCn();
};
cl.onclick = () => {
  fnCl();
};
