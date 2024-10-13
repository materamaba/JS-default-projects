const X = "&#10005;"
const O = "&#9711;"
currentChart = O

map =  new Array(9).fill(null)

function win(id){
    if(id==1){
        winchar = X
    }
    else{
        winchar = O
    }
    document.getElementById('who').innerHTML = winchar
    document.getElementById('win').style.display = "inline"
}
function draw(){
    document.getElementById('win').innerHTML = "DRAW"
    document.getElementById('win').style.backgroundColor = "grey"
    document.getElementById('win').style.display = "inline"
}

function check() {



    const combinations = [
        [0, 1, 2], // Wiersz 1
        [3, 4, 5], // Wiersz 2
        [6, 7, 8], // Wiersz 3
        [0, 3, 6], // Kolumna 1
        [1, 4, 7], // Kolumna 2
        [2, 5, 8], // Kolumna 3
        [0, 4, 8], // Przekątna 1
        [2, 4, 6]  // Przekątna 2
    ];
    
    for (var combination of combinations) {
        const [a, b, c] = combination; 
        if (map[a] === map[b] && map[b] === map[c] && map[a] !== null  && map[b] !== null  && map[c] !== null) {
            win(map[a])
            return true;
        }
    }
    
    c=0
    for(i of map){
        if(i!=null){
            c++
        }
    }
    if(c == 9){
        draw()
    }
    
    return false;
}



function game(cell, id){
    if(document.getElementById(cell).innerHTML == "&nbsp;"){
        document.getElementById(cell).innerHTML = currentChart
        if(currentChart == O){
            currentChart = X
            map[id] = 0
        }
        else{
            currentChart = O
            map[id] = 1
        }
        console.log(map)
        check()
        document.getElementById('turn').innerHTML = currentChart
    }
}