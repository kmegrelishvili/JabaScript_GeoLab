const obj = [
    { Username: 'Keti', age: 82 },
    { Username: 'giorgi', age: 12 },
    { Username: 'sandro', age: 18 },
    { Username: 'nino', age: 20 }]


//console.log(obj[0].age);

let btn1 = document.querySelector('.addentries')
let btn2 = document.querySelector('.deleteentries')

// console.log(btn1)
// console.log(btn2)
function myFunctionAdd(list) {
    list.forEach((element) => {
        if (element.age > 18) {
            var li = document.createElement('li');
            li.setAttribute('class', 'item');
            li.textContent = "Username: " + element.Username + "  Age: " + element.age;
            document.getElementById('list').appendChild(li);
        }
    })
    btn1.disabled = true
    btn1.style.backgroundColor = "grey"
    btn2.style.display = 'inline-block'
    if (btn2.disabled == true) {
        btn2.disabled = false
        btn2.style.backgroundColor = "#60a3bc"
    }
}

function myFunctionDelete(list) {
    let li = document.querySelectorAll('.item')
    console.log(li)
    li.forEach((element) => {
        console.log(element)
        element.remove();
    })
    btn2.disabled = true
    btn2.style.backgroundColor = "grey"
    btn1.style.backgroundColor = "#60a3bc"
    if (btn2.disabled == true) {
        btn1.disabled = false
    }
}


function changecClass() {
    let p = document.getElementById('start');
    console.log((p.getAttribute('class')));

    if (p.getAttribute('class') === 'paragraphright') {
        p.setAttribute('class', 'paragraphleft')
        p.style = "text-align:left"
        console.log(p)
    }
    else if (p.getAttribute('class') === null || p.getAttribute('class') === 'paragraphleft') {
        p.setAttribute('class', 'paragraphright')
        p.style = "text-align:right"
        console.log(p)
    }
}
