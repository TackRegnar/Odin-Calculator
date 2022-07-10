function adder(num1, num2) {
  return num1 + num2;
}

function subtracter(num1, num2) {
  return num1 - num2;
}

function multiplyer(num1, num2) {
  return num1 * num2;
}

function divider(num1, num2) {
  return num1 / num2;
}

function operate(op, num1, num2) {
  if (op === "add") {
    return adder(num1, num2);
  } else if (op === "subtract") {
    return subtracter(num1, num2);
  } else if (op === "multiply") {
    return multiplyer(num1, num2);
  } else if (op === "divide") {
    return divider(num1, num2);
  }
}

function main() {
  let num1 = 0;
  let num2 = 0;
  //number buttons
  let input = document.getElementsByClassName("input")[0];
  let n0 = document.getElementById("n0");
  let n1 = document.getElementById("n1");
  let n2 = document.getElementById("n2");
  let n3 = document.getElementById("n3");
  let n4 = document.getElementById("n4");
  let n5 = document.getElementById("n5");
  let n6 = document.getElementById("n6");
  let n7 = document.getElementById("n7");
  let n8 = document.getElementById("n8");
  let n9 = document.getElementById("n9");

  n0.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "0";
  });
  n1.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "1";
  });
  n2.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "2";
  });
  n3.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "3";
  });
  n4.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "4";
  });
  n5.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "5";
  });
  n6.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "6";
  });
  n7.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "7";
  });
  n8.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "8";
  });
  n9.addEventListener('click', () => {
    clear_input(num1);
    input.textContent += "9";
  });

  //operations
  let op = ""

  let o1 = document.getElementById("o1");
  let o5 = document.getElementById("o5");


  //+ button
  o1.addEventListener('click', () => {
    op = "add";
    console.log(num1)
    if (num1 === 0) {
      num1 = Number(input.textContent);
    } else {
      num2 = Number(input.textContent);
      num1 = operate(op, num1, num2);
    }
    input.textContent = num1;
  });

  //= button
  o5.addEventListener('click', () => {
    num2 = Number(input.textContent);
    num1 = operate(op, num1, num2);
    input.textContent = num1;
  });

}

//clears the input block if its the last total or the default 0.
function clear_input(num1) {
  let input = document.getElementsByClassName("input")[0];
  if (Number(input.textContent) === num1 || input.textContent === "0") {
    input.textContent = "";
  }
}
main();
