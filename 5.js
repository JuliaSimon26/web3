
function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    let number = 1;
    return function () {
    return number++;
    } 
}

const count = createCounter(); //присваивает значение того, что возвращает функция

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5