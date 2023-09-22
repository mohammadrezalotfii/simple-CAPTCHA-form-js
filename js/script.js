let fname1 = `mohammadreza`;
let lname1 = `lotfi`;
let fname2 = `pouya`;
let lname2 = `haraty`;
let fname = document.getElementById(`fname`);
let lname = document.getElementById(`lname`);
let btn = document.getElementById(`submit`);
let capcha = document.getElementById(`capcha`);
let ans = document.getElementById(`number`);
let num1 = Number(`${Math.floor(Math.random() * 100)}`);
let num2 = Number(`${Math.floor(Math.random() * 10)}`);
let reset = document.getElementById(`reset`);
let alertFname = document.getElementById(`alertFname`);
let alertLname = document.getElementById(`alertLname`);
let alertCapcha = document.getElementById(`alertCapcha`);
capcha.innerHTML = `${num1} + ${num2} = ?`;
reset.addEventListener("click", function () {
  window.location.reload();
});
btn.addEventListener("click", function () {
  if (fname.value == fname1) {
    if (lname.value == lname1) {
      if (ans.value == num1 + num2) {
        window.location = "https://github.com/mohammadrezalotfii";
      } else {
        alertCapcha.style.display = "inline-flex";
        alertCapcha.style.left = 16 + "px";
      return true;
    }
    } else {
      alertLname.style.display = "inline-flex";
      alertLname.style.left = 16 + "px";
      return true;
    }
  } else if (fname.value == fname2) {
    if (lname.value == lname2) {
      if (ans.value == num1 + num2) {
        window.location = "https://pouyahrt.com/index.html#page1";
      } else {
        alertCapcha.style.display = "inline-flex";
        alertCapcha.style.left = 16 + "px";
      }
    } else {
      alertLname.style.display = "inline-flex";
      alertLname.style.left = 16 + "px";
    }
  } else {
    alertFname.style.display = "inline-flex";
    alertFname.style.left = 16 + "px";
    return 0;
  }
});
