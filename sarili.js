const a = document.querySelectorAll('.value');
const b = document.querySelector('#submit');
const c = document.querySelector('#sum');

const aa = a.length;

b.addEventListener('click', () => {
  let sum = 0;

  for (let i = 0; i < aa; i++) {
    sum += Number(a[i].value);
  }

  c.innerHTML = Number(sum);
});
