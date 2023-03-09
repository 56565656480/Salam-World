let a = document.querySelector('button');
a.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt("Enter Name of student")
    a.textContent = 'Roll No:1' + name
}