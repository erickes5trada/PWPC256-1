import './stylesheets/style.css'

console.log("Webpack funcionando!!");

let show = (m = "hola") => {
  alert(m);
}

show();

function resolveAfter2Seconds(){
  return new Promise(resolve =>{
    setTimeout(() =>{
      resolve('resolve');
    },2000);
  });
}

async function asyncCall(){
  console.log("Calling an async funcion");
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

