function whenButtonClick() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let operation = document.getElementById("operations").value;

    let result;
    switch(operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':

            if (Math.abs(number2) < Number.EPSILON) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            result = (number1 / number2).toFixed(3);
            break;
    }

    let resultsText = document.getElementById("result");
    let resultsPrev = resultsText.getElementsByClassName("result-item");
    for (let i = 0; i < resultsPrev.length; i++) {
        resultsPrev[i].classList.add("result-prev");
    }

    let newResult = document.createElement("div");
    newResult.classList.add("result-item");
    newResult.innerHTML = `<b>${number1} ${operation} ${number2} = ${result}</b>`;

    resultsText.append(newResult); 

    if (resultsText.children.length > 3) {
        resultsText.removeChild(resultsText.firstChild);
    }
}