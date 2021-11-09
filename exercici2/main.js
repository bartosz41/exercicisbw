const table = document.getElementById("table");

let columns = window.prompt("Quantes columnes tindrà la taula?: ");
while(isNaN(columns)){
    columns = window.prompt("Quantes columnes tindrà la taula?: ");
}

let rows = window.prompt("Quantes files tindrà la taula?: ");
while(isNaN(rows)){
    rows = window.prompt("Quantes files tindrà la taula?: ");
}


for(i=0;i < rows; i++){
    const row = table.insertRow(i);
    for(j=0; j < columns; j++){
        const cell = row.insertCell(j);
        cell.innerHTML = (Math.floor(Math.random()*100));
    }
}