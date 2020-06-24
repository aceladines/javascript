const a = document.querySelectorAll('.value');
const b = document.querySelector('#totalValue');
const c = document.querySelector('#submit');
const d = document.querySelector('#totalValue');

var validNumber = new RegExp(/^\d*\d*$/);
var lastValid = document.getElementById('value1').value;
function validateNumber(elem) {
  if (validNumber.test(elem.value)) {
    lastValid = elem.value;
  } else {
    elem.value = lastValid;
  }
}

c.addEventListener('click', () => {
  let sum = 0;
  const aaa = a.length;
  for (i = 0; i < aaa; i++) {
    sum += Number(a[i].value);
  }
  d.value = Number(sum);
});

// function numbersOnly(input) {
//   var regex = /[^0-9]/gi;
//   input.value = input.value.replace(regex, '');
// }
