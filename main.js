const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style.cssText = 'color: red';
document.getElementById('container').appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.cssText = 'color: blue';
document.getElementById('container').appendChild(h3);

const div = document.createElement('div');
div.style.border = 'black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

div.appendChild(h1);

const p2 = document.createElement('p2');
p2.textContent = 'ME TOO!';

div.appendChild(p2);

container.appendChild(div)

/*METHOD 2 

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');*/

const btn = document.querySelector('#btn');



/*btn.addEventListener('click', function (e) {
    console.log(e);
  });*/

btn.addEventListener('click', () => 
    {alert('Hello World'); } );

    btn.addEventListener('click', function (e) {
        e.target.style.background = 'blue';
      });
      