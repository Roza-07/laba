const { add, isEven, reverseString } = require('../src/math');

console.log("=== Запуск тестов ===\n");

// Тест 1
if (add(2, 3) === 5 && add(-1, 1) === 0) {
    console.log("✓ Тест 1 пройден: add работает");
} else {
    console.log("✗ Тест 1 провален: add не работает");
    process.exit(1);
}

// Тест 2
if (isEven(4) === true && isEven(5) === false) {
    console.log("✓ Тест 2 пройден: isEven работает");
} else {
    console.log("✗ Тест 2 провален: isEven не работает");
    process.exit(1);
}

// Тест 3
if (reverseString("hello") === "olleh" && reverseString("abc") === "cba") {
    console.log("✓ Тест 3 пройден: reverseString работает");
} else {
    console.log("✗ Тест 3 провален: reverseString не работает");
    process.exit(1);
}

console.log("\n=== Все тесты пройдены! ===");
