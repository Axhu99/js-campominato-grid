const grill = document.getElementById('grill');

for (i = 0 ; i < 100 ; i++){
    
    //creo una cella 
    
    const cell = document.createElement('div');
    cell.className = 'cell';

    grill.appendChild(cell);
}
