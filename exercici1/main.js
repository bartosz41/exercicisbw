do{
    result = window.prompt("Introdueix un número:");
} while (isNaN(result));

table = document.getElementById("table");
document.getElementById("value").innerHTML = result;
for(i = 0; i<10; i++){
    const row = table.insertRow(i);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = i;
    cell2.innerHTML = result * i;
}

