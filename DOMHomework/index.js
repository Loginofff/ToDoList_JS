const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list")
const clearBtnElement = document.getElementById("clear")
const clearOneBtn = document.getElementById("clearOne")
const persons = [];
const clearList = function () {
    while (listElement.hasChildNodes()) {
        listElement.firstChild.remove();
    }
}
const clearOne = function() {
    if (listElement.hasChildNodes()){
        listElement.firstChild.remove()
    }
}
function clearInput (event) {
    event.target.nickname.value = "";
    event.target.place.value = "";

}

function changeStatus (event){
    if(event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
    } else {
        event.target.style.textDecoration = "line-through";
    }
}

clearBtnElement.addEventListener ('click', clearList);
clearOneBtn.addEventListener ('click', clearOne);
formElement.addEventListener('submit', (event) => {
    event.preventDefault();//не отправляет на другую страницу
   
    

    const person = ({name:event.target.nickname.value,place:event.target.place.value})
    persons.push(person)

    const liElement = document.createElement("li");
    liElement.textContent =`${person.name} ${person.place}  🕛 `;

    liElement.onclick = function(event){
    listElement.onclick = changeStatus;
    }
    liElement.insertAdjacentHTML('beforeend', '')
    listElement.append(liElement)
    clearInput(event);
    })