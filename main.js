
let name = prompt('Введите ваше имя');
let year = +prompt('Введите сегоднешный год');
let bornYear = +prompt('Введите вашe год рождение');


let res = function() {
    let result = (year - bornYear)
    return result
}

console.log(name + ', Ваш возраст ' + res());
