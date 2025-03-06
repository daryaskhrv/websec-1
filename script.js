

function whenButtonClick() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operations").value;


    number1 = Number(number1)
    number2 =parseInt(number2)

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
                
            }
            result = number1 / number2;

            break;
    }
}