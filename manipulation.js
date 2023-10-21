const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');

para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const header3 = document.createElement('h3');

header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

container.appendChild(header3);

const pinkBackground = document.createElement('div');

pinkBackground.style.backgroundColor = "pink";
pinkBackground.style.border = "1px solid black";
container.appendChild(pinkBackground);

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
pinkBackground.appendChild(heading1);

const para2 = document.createElement('p');

para2.textContent = "ME TOO!";
pinkBackground.appendChild(para2);

function alertFunction(){
  alert("We're Doing Big Tings!")
}


const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

const lastBtn = document.querySelector("#btn2");
lastBtn.addEventListener('click', function(e) {
  e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  })
})
