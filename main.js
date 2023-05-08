const chess = document.querySelector(".chess");
const squares = document.querySelectorAll(".square");
let info = document.getElementById("info")
let chessPiece;

chess.addEventListener("dragstart", (e) => {
  chessPiece = e.target;
});

chess.addEventListener("drag", (e) => {
    info.textContent = "you are dragging " + e.target.id;
})

squares.forEach((square) => {
    square.addEventListener("dragover",(e) =>{
        e.preventDefault()
    })
    square.addEventListener("drop", (e)=>{
        e.target.append(chessPiece);
    })
});
