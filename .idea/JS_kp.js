//Знаходимо всі елементи HTML розмітки зеідно id
let addElements = document.getElementById('addElements');
let sortElementName = document.getElementById('sortName');
let sortElementValue = document.getElementById('sortValue');
let deleteElements = document.getElementById('deleteElements');
let selectElements = document.getElementById('selectElements');
let outputDiv = document.getElementById('outputForm');
let arr=[];
let arrNew = [];
let arrWithAllElements = [];
let arrFlat=[];
let sort = [];
//За допомогою регулярних виразів переваряю данні які приходять в input
function isValid(username) {
    return /^[a-zA-Z0-9\s[=]+$/.test(username)
}
//"Вішаю" подію на кнопку Add щоб при натисканні данні з input записувались в div
addElements.onclick = function (ev) {
    ev.preventDefault();
    let input = document.getElementById('input1');
    let takeInput = input.value;
    input.value = '';
    let div = document.createElement('div');
    div.classList.add('addElement');
    //перевіряю чи виконується умова задана в регулярному виразі. Якщо так то тоді елемент додається
    if (isValid(takeInput)) {
        div.innerText = takeInput.trim();
        outputDiv.appendChild(div);
        arr = takeInput.split('=');
        let name = arr[0];
        //за допомогою методу trim() прибираю всі зайві пробіли вписані користувачем
        let nameTrim = name.trim();
        let value = arr[1];
        let valueTrim = value.trim();
        arrNew = [{name: nameTrim, value: valueTrim}];
        arrWithAllElements.push(arrNew);
        //виношу всі елементи внутрішніх масивів в один масив за допомогою методу flat()
        arrFlat = arrWithAllElements.flat();
        console.log(arrFlat);
    }
}

//"Вішаю" подію на кнопку Sort by Name
    sortElementName.onclick = function (ev) {
        ev.preventDefault();
        //Сортую елементи масиву за характеристикою name
        sort = arrFlat.sort((a, b) => a.name.localeCompare(b.name));
        //Обнуляю форму перед тим як записати туди відсортовані дані
        outputDiv.innerHTML = '';
        //за допомогою циклу for створюю новий елемент div та записую туди відсортовані дані
        for (let i = 0; i < sort.length; i++) {
            let div = document.getElementsByClassName('addElement');
            let div2 = document.createElement('div');
            div2.innerText = sort[i].name + ' = ' + sort[i].value;
            outputDiv.appendChild(div2);
        }
    }
    //"Вішаю" подію на кнопку SortbyValue
        sortElementValue.onclick = function (ev) {
            ev.preventDefault();
//Сортую елементи масиву за характеристикою value
            sort = arrFlat.sort((a, b) => a.value.localeCompare(b.value));
            outputDiv.innerHTML = '';
            for (let j = 0; j < sort.length; j++) {
                let div = document.getElementsByClassName('addElement');
                let div3 = document.createElement('div');
                div3.innerText = sort[j].name + ' = ' + sort[j].value;
                outputDiv.appendChild(div3);
            }
        }

        ////"Вішаю" подію на кнопку Delete
    deleteElements.onclick = function (ev) {
        ev.preventDefault();
        outputDiv.innerHTML = '';

    }









