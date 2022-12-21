const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const lettersnumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const colours = ["red","yellow","orange","green","blue","purple","pink","black","white", "light blue", "dark blue", "dark green", "light green"]
// & is letter, % is number, $ is colour
function random_item(items) {
    item = items[Math.floor(Math.random()*items.length)];
    return item
  }
function getData(items, i, loops) {
    const fs = require('fs')
    fs.readFile('hunts.txt', (err, info) => {
        if (err) throw err;
        data = info.toString()
        const splitData = data.split('\n');
        const randomNumber = Math.floor(Math.random() * splitData.length);
        line = splitData.splice(randomNumber, 1); 
        vars(line.toString(), items, i, loops)
    })
}
function duplicate(items, line) {
    if (items.includes(line.toString())) {
        getData(items)
        return
    }
}
function vars(line, items, i, loops) {
    duplicate(items, line)
    line = line.toString()
    if (line.includes('$')) {
        var colour = random_item(colours)
        line = line.replace('$', colour)
    }
    if (line.includes('&')) {
        var letter = random_item(letters)
        line = line.replace('&', letter)
    }
    if (line.includes('%')) {
        var number = random_item(numbers)
        line = line.replace('%', number)
    }
    console.log(line)
    items.push(line.toString())
    if (i === loops) {
    }
    return
}

loops = 10
items = [

]
for (let i = 0; i < loops; i++) {
    getData(items, i, loops)
}