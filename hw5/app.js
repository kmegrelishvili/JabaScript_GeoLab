
let btn = document.querySelector('.btn')
let form = document.querySelector('form')
let input = document.querySelector('.input') // sadac user wers da value-s daxmarebit mnishvnelobas wamovogebt
let ul = document.getElementById('list')

form.addEventListener('submit', (event) => { //eventlistener edeba mtlianad formas
    event.preventDefault(); // prevent redirection from action attribute in form

    if (input.value.trim()) { //შემოწმება რომ ცარიელი ტექსტი არ ჩაემატოს ლისთში 
        const li = document.createElement('li');
        li.setAttribute('class', 'item');

        const btnDelete = document.createElement('button')
        btnDelete.setAttribute('class', 'delete');
        btnDelete.textContent = "X";

        const span = document.createElement('span');
        span.setAttribute('class', 'span');
        btnDelete.addEventListener('click', (event) => {
            const parent = btnDelete.parentNode;
            parent.remove();
        })
        span.textContent = input.value;

        li.appendChild(span)
        li.appendChild(btnDelete)
        ul.appendChild(li);
        input.value = ""; // უჯრის გასუფთავება
        input.focus(); // მაუსის ფოკუსი
    }
});







