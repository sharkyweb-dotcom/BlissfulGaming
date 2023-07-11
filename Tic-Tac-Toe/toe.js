const alert=document.getElementById("alert")
let turn_x=true
function didIWin() {
    let return_value=false;
    for (let i=1;i<=3;i++) {
        ['row','column'].forEach((line)=>{
            ['X','O'].forEach((player)=>{
                let good=true;
                Object.values(document.getElementsByClassName(`${line}${i}`)).forEach((tile)=>{
                    if (tile.innerHTML!==player) {
                        good=false
                    }
                })
                if (good) {
                    return_value=player;
                    return;
                }
            })
            if (return_value) {return;}
        })
        if (return_value) {return return_value;}
    }
    [[0,4,8],[2,4,6]].forEach((tileArr)=>{
        ['X','O'].forEach((player)=>{
            let good=true
            tileArr.forEach((id)=>{
                let tile=document.getElementById(`tile${id}`)
                if (tile.innerHTML!==player) {
                    good=false
                }
            })
            if (good) {
                return_value=player;
                return player;
            }
        })
        if (return_value) {return return_value}
    })
    return return_value;
}
function fill(tile) {
    tile.style.opacity=1
    if (turn_x) {
        tile.innerHTML="X"
        alert.innerHTML="O"
        tile.classList.add("X")
    } else {
        tile.innerHTML="O"
        alert.innerHTML="X"
        tile.classList.add("O")
    }
    let win=didIWin()
    if (win) {
        document.getElementById("winAlert").innerHTML=`${win} won!`
    }
    turn_x=!turn_x;
}
createBoard(3,3,60,["white","white","black"],['pink',3,3],[['click',fill]],['opacity',0.5],[0])
