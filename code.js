//  b) отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');

//d) замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = 'Твій дім там, де про тебе думають. <br>- Джирая (м/ф "Наруто: Ураганні хроніки ")';

//змініть кожному елементу колір фону на червоний
//змініть кожному елементу колір тексту на синій
rules.style.backgroundColor = 'red';
rules.style.color = 'blue';

//отримати весь список класів елемента з id=rules і вивести їх в console.log
let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);

//поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < fcRules.length; i++) {
    fcRules[i].style.color = 'red';
}
