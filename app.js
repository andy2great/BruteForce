var fs = require('fs');
var md5 = require('md5');
const readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('french.dic'),
    console: false
});


let found = false;
let password =  '';
const list = '0123456789abcdef'
const listLength = list.length;

racine = (val, count) =>{
    if (val >= listLength) return racine(Math.floor(val/listLength), ++count)
    return count;
}

randomPass = (index) => {
    let password = '';
    const loopCount = racine(index, 1);

    for (let i = 0; i < loopCount; i++) {
        password += list[Math.floor(index/(Math.pow(listLength, i))) % listLength];
    }
    console.log(password)
    return password;
}


let index = 161611776;
while (!found) {
    password = randomPass(index)
    const result = md5(`Elias de Kelliwic\'h ${password}`);
    found = result === '677518040b2d9c39757588205910bcab';
    index++;
}

console.log(found, password)


