// import moment from 'moment';
// console.log(moment().format());
// import axios from 'axios';
import { sum } from './lib.js';
import lib from './lib.js'

console.log('givi')
sum(2, 3, 6, 5)

console.log('This is square', lib.square(7))


axios.post('https://reqres.in/api/register', {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
})
    .then((response) => {
        console.log(response)
    })

