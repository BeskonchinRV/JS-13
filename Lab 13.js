//Задание 1
var m1 = [];
for (let i = 0; i < 4; i++) {
    m1[i] = [];
    for (let j = 0; j < 4; j++) {
        m1[i][j] = Math.floor(Math.random() * 5);
    }
}
var m2 = [];
for (let i = 0; i < 4; i++) {
    m2[i] = [];
    for (let j = 0; j < 4; j++) {
        m2[i][j] = Math.floor(Math.random() * 5);
    }
}
console.log("Первая матрица:");
console.log(m1);

console.log("Вторая матрица:");
console.log(m2);

var result = [];
for (let i = 0; i < 4; i++) {
    result[i] = [];
    for (let j = 0; j < 4; j++) {
        result[i][j] = m1[i][j] + m2[i][j];
    }
}

console.log("Результат сложения матриц:");
console.log(result);
//Задание 2
function generateMatrix(rows, columns) {
    var matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }

    return matrix;
}
var width = prompt("Введите ширину матрицы:");
var height = prompt("Введите высоту матрицы:");
var myMatrix = generateMatrix(width, height);
console.log(myMatrix);
//Задание 3
function genMatrix(size) {
    var matrix;

    do {
        matrix = [];
        for (let i = 0; i < size; i++) {
            matrix[i] = [];
            for (let j = 0; j < size; j++) {
                matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
        var mainDiagonalSum = 0;
        var antiDiagonalSum = 0;
        for (let i = 0; i < size; i++) {
            mainDiagonalSum += matrix[i][i];
            antiDiagonalSum += matrix[i][size - 1 - i];
        }
    } while (mainDiagonalSum !== antiDiagonalSum);
    console.log("Сгенерированная матрица:");
    for (let i = 0; i < size; i++) {
        console.log(matrix[i]);
    }
    console.log("Сумма чисел диагонали в матрице: " + mainDiagonalSum);
}
genMatrix(5);
//Задание 4
var x = parseFloat(prompt("Введите координату x точки:"));
var y = parseFloat(prompt("Введите координату y точки:"));
var radius = parseFloat(prompt("Введите радиус окружности:"));
var distanceToCenter = Math.sqrt(x * x + y * y);
if (distanceToCenter <= radius) {
    console.log("Точка находится внутри окружности.");
} else {
    console.log("Точка находится вне окружности.");
}
