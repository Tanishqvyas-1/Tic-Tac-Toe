let music=new Audio("music.mp3")
let Audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let Turn="X"
let isgameover=false
// function to change to turn
const changeturn=()=>{
    return Turn==="X"?"0":"X"
}
// function to change win
music.play()
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" won!"
            isgameover=true
            let imgBox = document.querySelector(".imgbox img");
            imgBox.style.display = "block";
            imgBox.style.width = "200px";
        }
    })
}
// game logic
let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=Turn
            Turn=changeturn()
            Audioturn.play()
            checkWin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+Turn
            }
        }
    })
})
// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    Turn="X"
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for "+Turn
    }
    let imgBox = document.querySelector(".imgbox img")
    imgBox.style.display = "none";
})