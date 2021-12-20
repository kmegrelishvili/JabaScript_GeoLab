let ul1 = document.getElementById("list1")
let ul2 = document.getElementById("list2")
let ul3 = document.getElementById("list3")



async function test1(url) {
    try {
        const resolve = await fetch(url)
        console.log(resolve)
        return resolve.json();
    }
    catch (err) {
        console.log(err)

    }

}


test1('https://jsonplaceholder.typicode.com/users').then(item => {
    let title1 = document.querySelector('.ul1')
    title1.textContent = "Getting User Name Data with async - await, try - catch"
    item.forEach(element => {
        let li = document.createElement('li')
        ul1.appendChild(li)
        li.textContent = element.name
    })
})

test1('https://fakerapi.it/api/v1/books?_quantity=10').then(item => {
    let title1 = document.querySelector('.ul2')
    title1.textContent = "Getting book titles Data with async - await, try - catch "
    item.data.forEach(element => {
        let li = document.createElement('li')
        ul2.appendChild(li)
        li.textContent = element.title
    })
})

axios.get('https://reqres.in/api/users?page=2').then(item => {
    let title1 = document.querySelector('.ul3')
    title1.textContent = "Getting email Data with try await method "
    item.data.forEach(element => {
        let li = document.createElement('li')
        ul3.appendChild(li)
        li.textContent = element.email
    })
})
