// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr = ['akhil', 'yeluri', 'angular', 'developer'];

let output = '';

//promises basically used for async calls
function a() {
  return new Promise((resolve, reject) => {
    arr.forEach((arrs) => {
      output += ' ' + arrs;
    });

    reject('Error Test');
  });
}

a().then((console.log('akhil yeluri')))
.catch(err=>console.log(err))
