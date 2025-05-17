const list = document.getElementById('list')

function add() {
    const value = document.getElementById('value-user').value.trim()

    if (value != '') {
        const id = generateID()

        list.innerHTML += `
        <article class="item-list" id="${id}">
            <button onclick="checked(${id})"><img src="./img/checked.png"></button>

            <span>${value}</span>
            <button onclick="remove(${id})"><img src="./img/trash.png"></button>
        </article>`
    } else {alert('Insira algo primeiro...')};
}

function checked(id) {
    document.getElementById(id).style.color = "#a8ff9e";
}

function remove(id) {
    document.getElementById(id).remove();
}

function generateID() {
    const id = Math.random()
    return(id);
}