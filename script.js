const a = document.querySelector('.parent');
const b = document.createElement('p');
const c = document.createElement('p');

a.appendChild(b);
a.appendChild(c);

b.innerHTML = "Hello World";
b.textContent = "paragraph";
c.textContent = "Parlour";

c.classList.add('dom');
b.classList.add('pompa');