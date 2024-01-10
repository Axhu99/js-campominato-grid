// I puntatori
const grill = document.getElementById('grill');
const form = document.querySelector('form'); 

const getCell = (num) =>{
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = num;
    
    return cell;
} 

// evento che parte al click del bottone
form.addEventListener('click', (event) =>{
    event.preventDefault();

    //pulire tutto quello che c'e' all'interno cosi' non c'e' uno spam di griglie
    grill.innerHTML = ''; 

    //cliclo FOR che serve a creare la griglia
    for (i = 1 ; i <= 100 ; i++){
        //chiamo la funzione per la creazione delle celle 
        const grid = getCell(i);
       
    
        grid.addEventListener('click', () =>{
            grid.classList.toggle('click')
        }) 
        
        //stampiamo il risultato
        grill.appendChild(grid);
    }
})

