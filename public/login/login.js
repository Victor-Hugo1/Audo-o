const container = document.getElementById('container');
const botaoRegistrar = document.getElementById('registrar');
const botaoLogin = document.getElementById('login');

botaoRegistrar.addEventListener('click', () =>{
    container.classList.add("active");
 });

 botaoLogin.addEventListener('click', () =>{
    container.classList.remove("active");
 });