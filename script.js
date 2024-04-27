function removeConnectionRequest(element) {
    element.closest(".card-list-item").remove();
    let elementNumberRequest= document.querySelector("#connectionRequestNumber");
    let numberRequest = Number(elementNumberRequest.textContent);
    numberRequest --;
    elementNumberRequest.textContent = numberRequest;
}
function ConnectionRequestadd(elementAdd){
    let connection = elementAdd.closest('.buttons').previousElementSibling; 
    let connectionList = document.querySelector('#myConnections');
    connectionList.innerHTML += `<li class="card-list-item start">
        ${connection.innerHTML}
    </li>`;
    elementAdd.closest(".card-list-item").remove();
    let elementNumberRequest= document.querySelector("#connectionRequestNumber");
    let numberRequest = Number(elementNumberRequest.textContent);
    numberRequest --;
    elementNumberRequest.textContent = numberRequest;

    let totalNumberConnectionRequest = document.querySelector("#totalConnections");
    let totalNumberConnections = Number(totalNumberConnectionRequest.textContent);
    totalNumberConnections ++;
    totalNumberConnectionRequest.textContent = totalNumberConnections; 
}
function changeName(){
    newName= prompt("Enter a new name:");
    if(newName !== null && newName !== ''){
        document.querySelector('.cardName').textContent = newName;
    }

}
