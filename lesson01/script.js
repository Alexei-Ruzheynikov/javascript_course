// console.log(3);
// console.log(2);
// имя переменной может начинаться с букв, $ или нижнего подчеркивания, но не должен состоять из ключевых слов
// переменные в разном регистре - разные переменные
// исользуется камелкейс
// не использовать транслит - русские слова английскими буквами
var myVar = 10;
var camelCase = 10;

// console.log("agePerson: ", agePerson);
// если var объявлена в коде, то она существует до ее объявления
// то есть переменная существует, но значение еще не присвоенно - undefined
// let и const видны после объявления - называется "всплытие"
// можно выводить в фигурных скобках {}  и let будет виден только там
let agePerson = 20;
console.log("agePerson: ", agePerson);
