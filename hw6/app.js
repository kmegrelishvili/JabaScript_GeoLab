


arr = ['https://jsonplaceholder.typicode.com/users', 'https://fakerapi.it/api/v1/books?_quantity=10', 'https://reqres.in/api/users?page=2']


let ul1 = document.getElementById("list1")
let ul2 = document.getElementById("list2")
let ul3 = document.getElementById("list3")


for (let link of arr) {
    asnc(link)
}

function asnc(url) {
    fetch(url)
        .then(response => response.json())
        .then(rtrn => {
            let item = []
            if (url == arr[0]) {
                item = rtrn
                let title1 = document.querySelector('.ul1')
                title1.textContent = "User Data From " + url
                item.forEach(element => {
                    let li = document.createElement('li')
                    ul1.appendChild(li)
                    li.textContent = element.name
                })
            }
            if (url == arr[1]) {
                item = rtrn.data
                let title2 = document.querySelector('.ul2')
                title2.textContent = "Title Data From " + url
                item.forEach(element => {
                    let li = document.createElement('li')
                    ul2.appendChild(li)
                    li.textContent = element.title
                })
            }
            if (url == arr[2]) {
                item = rtrn.data
                let title3 = document.querySelector('.ul3')
                title3.textContent = "Email Data From " + url
                item.forEach(element => {
                    let li = document.createElement('li')
                    ul3.appendChild(li)
                    li.textContent = element.email
                })
            }

        })

}

// task2 Promise
// ფრომისი არის ყუთივით, რომელიც თავიდან არის ცარიელი და მერე მასში მოტავსებულია დაბრუნებული მნიშნელობა. then-ით ვეუბნებით, რომ როგორც კი მნიშვნელობა იქნება, განხორცილდეს ოპერაციები. then-ს გადავცემთ ეროუ ფუნქციას, რომელსაც არგუმენტად გადავცემთ დაბრუნებულ ვალიუს. ფრომისი გამოხატავს ასინქრონული ოპერაციის საბოლოო შესრულებას ან უარყოფას.


//ამ მაგალითში სერვერთან იგზავნება მოთხოვნა სადაც თუ წარმატებით დაბრუნდა და იმეილი გვაქვს, resolve-ს ენიჭება იმეილის მნიშვნელობა 
const myPromise = new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(json => {
            if (json.data[0].email) {
                resolve("succses! იუზერის იმელია " + json.data[0].email)
            }
        })
        .catch(err => {
            reject(err)
        })

})

//შემდეგ ასევე then-ის დახმარებით ფრომისის საშუალებით ვბეჭდავთ და ვამოწმებთ სტატუსს
myPromise.then((val) => console.log(" Status:", val));
