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
  } else if (op === "divide" && num2 === 0) {
    return "You can't devide by zero...";
  } else if (op === "divide") {
    return divider(num1, num2);
  }
}

function main() {
  let num1 = 0;
  let num2 = 0;
  let is_first_num = true;
  let total = 0;
  let disable_ops = true;
  let can_clear = true;
  let disable_equals = true;
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
    can_clear = clear_input(can_clear);
    input.textContent += "0";
    disable_ops = false;
    disable_equals = false;
  });
  n1.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "1";
    disable_ops = false;
    disable_equals = false;
  });
  n2.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "2";
    disable_ops = false;
    disable_equals = false;
  });
  n3.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "3";
    disable_ops = false;
    disable_equals = false;
  });
  n4.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "4";
    disable_ops = false;
    disable_equals = false;
  });
  n5.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "5";
    disable_ops = false;
    disable_equals = false;
  });
  n6.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "6";
    disable_ops = false;
    disable_equals = false;
  });
  n7.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "7";
    disable_ops = false;
    disable_equals = false;
  });
  n8.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "8";
    disable_ops = false;
    disable_equals = false;
  });
  n9.addEventListener('click', () => {
    can_clear = clear_input(can_clear);
    input.textContent += "9";
    disable_ops = false;
    disable_equals = false;
  });

  //operations
  let op = ""

  let o1 = document.getElementById("o1");
  let o2 = document.getElementById("o2");
  let o3 = document.getElementById("o3");
  let o4 = document.getElementById("o4");
  let o5 = document.getElementById("o5");


  //+ button
  o1.addEventListener('click', () => {
    if (disable_ops === false) {
      if (is_first_num === true) {
        num1 = Number(input.textContent);
        is_first_num = false;
        can_clear = true;
        op = "add";
      } else {
        num2 = Number(input.textContent);
        total = operate(op, num1, num2);
        input.textContent = total;
        can_clear = true;
        num1 = total;
        op = "add";
      }
    }
  });

  //- button
  o2.addEventListener('click', () => {
    if (disable_ops === false) {
      if (is_first_num === true) {
        num1 = Number(input.textContent);
        is_first_num = false;
        can_clear = true;
        op = "subtract";
      } else {
        num2 = Number(input.textContent);
        total = operate(op, num1, num2);
        input.textContent = total;
        can_clear = true;
        num1 = total;
        op = "subtract";
      }
    }
  });

  //* button
  o3.addEventListener('click', () => {
    if (disable_ops === false) {
      if (is_first_num === true) {
        num1 = Number(input.textContent);
        is_first_num = false;
        can_clear = true;
        op = "multiply";
      } else {
        num2 = Number(input.textContent);
        total = operate(op, num1, num2);
        input.textContent = total;
        can_clear = true;
        num1 = total;
        op = "multiply";
      }
    }
  });

  //"/" button
  o4.addEventListener('click', () => {
    if (disable_ops === false) {
      if (is_first_num === true) {
        num1 = Number(input.textContent);
        is_first_num = false;
        can_clear = true;
        op = "divide";
      } else {
        num2 = Number(input.textContent);
        total = operate(op, num1, num2);
        input.textContent = total;
      }
      can_clear = true;
      num1 = total;
      op = "divide";
    }
  });

  //= button
  o5.addEventListener('click', () => {
    if (disable_ops === false) {
      if (disable_equals === false) {
        num2 = Number(input.textContent);
        total = operate(op, num1, num2);
        total = operate(op, num1, num2);
        input.textContent = total;
        can_clear = true;
        is_first_num = true;
        disable_equals = true;
      }
    }
  });
  //the clear buttons
  let c = document.getElementById("clear");
  let ac = document.getElementById("allclear");

  c.addEventListener('click', () => {
    can_clear = true
    input.textContent = "0";
  });

  ac.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    is_first_num = true;
    total = 0;
    disable_ops = true;
    can_clear = true;
    disable_equals = true;
    input.textContent = "0";
  });

}


//clears the input block if its the last total or the default 0.
function clear_input(can_clear) {
  let input = document.getElementsByClassName("input")[0];
  if (can_clear === true) {
    input.textContent = "";
    return false;
  }
}
main();
