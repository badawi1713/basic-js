// string(text)
const fullName = "Dzaky Ahmad Badawi";
console.log('Hi my name is', fullName);

// integer/number(bilangan bulat)
const age = 22;
console.log(age + 10);

// float(bilangan desimal)
const floatNumber = 22.5;
console.log(floatNumber);

// boolean (true / false)
const booleanExample = true;
console.log(booleanExample);

// Object { key: value }
const Person = {
    fullName: 'Red John',
    age: '50'
};
console.log(Person.fullName + ', ' + Person.age);

// Array []
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'black', 'white'];
console.log('My favorite colors are', colors[0] + ' and ' + colors['3'])

// Array-Object [{}]
const Car = [{"merk":"Honda", "color":"red"}, {"merk":"Toyota", "color":"black"}, {"merk":"Subaru", "color":"blue"}];
console.log('First car:', Car[0]);
console.log('Second car:', Car[1]);
console.log('Third car:', Car[2]);
