let sum = 0;

// 10번의 입력을 받기 위한 for 루프
for (let i = 0; i < 10; i++) {
    let userInput = prompt("값을 입력하세요:", "");

    sum += parseFloat(userInput);
}

alert(sum);