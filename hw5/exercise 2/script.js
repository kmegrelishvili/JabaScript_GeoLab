let login = document.getElementById("login")
let modal = document.querySelector('.loginCont')
let page = document.querySelector('.pagehide')
const uname = document.querySelector('.uname')
const psw = document.querySelector('.psw')
const usbmt = document.getElementById("usbmt")
const close = document.querySelector('.close')

login.addEventListener('click', (event) => {
    modal.style.display = 'block';
    page.style.display = 'none';
    console.log(event)
    uname.style.display = 'block';
    psw.style.display = 'block';

})

const msg = document.createElement('p')
modal.appendChild(msg)
usbmt.addEventListener('click', (event) => {

    if (uname.value.trim() && psw.value.trim()) {
        modal.style.display = 'none';
        page.style.display = '';
        msg.textContent = ''

    } else {
        msg.textContent = "Enter Username & Password "
        msg.style.color = 'red'
    }
    //გასუფთავდეს და არ შეინახოს მონაცემები ხელმეორედ დაკლიკებისას
    uname.value = ''
    psw.value = ''

})

close.addEventListener('click', (event) => {
    modal.style.display = 'none';
    page.style.display = '';
})