// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr = ['akhil', 'yeluri', 'angular','developer'];

let output = '';

function a() {
return new Promise((resolve,reject)=>
{
  arr.forEach((arrs) => {
    output +=' '+ arrs;
  })
  reject('by Default resolve')
})
}

a().
then(document.body.innerHTML = '<h1>'+output+'<h1>')
.catch(document.body.innerHTML = '<h1>'+'AKHIL YELURI ANGULAR DEVELOPER')


