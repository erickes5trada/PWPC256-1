/* eslint-disable no-alert */
/* eslint-disable no-console */
import './stylesheets/style.css';
import './stylesheets/myStyles.css';

console.log('Webpack funcionando!!');

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolve');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling an async funcion');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
