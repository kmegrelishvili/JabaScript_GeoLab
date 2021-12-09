const arr = [
    {
        street: "153 Moen Villages",
        streetName: "Alycia Turnpike",
        buildingNumber: "20787",
        city: "East Breanamouth",
        zipcode: "18481",

    },
    {
        street: "74767 Antonio Mission",
        streetName: "Angela Cove",
        buildingNumber: "637",
        city: "Aldaview",
        zipcode: "57550",

    },
    {
        street: "471 Feest Summit",
        streetName: "Kulas Isle",
        buildingNumber: "3790",
        city: "East Zolaburgh",
        zipcode: "17098-5594",

    },
    {
        street: "5709 Harvey Mills Suite 016",
        streetName: "Cronin Harbors",
        buildingNumber: "9829",
        city: "Rodriguezland",
        zipcode: "03438-9221",

    }
];

const arr2 = [{
    street: "5709 Harvey Mills Suite 016",
    streetName: "Cronin Harbors",
    buildingNumber: "9829",
    city: "ბათუმი",
    zipcode: "03438-9221",

},
{
    street: "5709 Harvey Mills Suite 016",
    streetName: "Cronin Harbors",
    buildingNumber: "9829",
    city: "თბილისი",
    zipcode: "03438-9221"
}]


let btn1 = document.querySelector('.addentries')


function myFunctionAdd(list1, list2) {
    list = [...list1, ...list2]
    list.forEach((element) => {
        var li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.textContent = element.city;
        document.getElementById('list').appendChild(li);
    })
}






