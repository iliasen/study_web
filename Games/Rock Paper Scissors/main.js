let userData
let computerData
let globalCount= 0
let userCount = 0
let computerCount = 0
const roundCount = document.getElementById('roundCount')
const score = document.getElementById("score")
const status = document.getElementById("status")
const battle = document.getElementById("battle")


function changeImage(){
    let userSelectView = document.getElementById("userSelectView")
    let computerSelectView = document.getElementById("computerSelectView")
    battle.setAttribute("style" ,"display:block")
    computerData = Math.floor(Math.random() *3) + 1
    switch (userData){ // убрать value
        case 1: userSelectView.setAttribute("src","res/icons8-rock-96.png")
            break
        case 2: userSelectView.setAttribute("src","res/icons8-scissors-96.png")
            break
        case 3: userSelectView.setAttribute("src","res/icons8-roll-of-paper-96.png")
            break
    }
    switch (computerData){ // убрать value
        case 1: computerSelectView.setAttribute("src","res/icons8-rock-96.png")
            break
        case 2: computerSelectView.setAttribute("src","res/icons8-scissors-96.png")
            break
        case 3: computerSelectView.setAttribute("src","res/icons8-roll-of-paper-96.png")
            break
    }
}

function setUserData(data){
    userData = data
    letPlay()
}

function letPlay(){
    if(globalCount<5){
        changeImage()
        console.log("Userdata: " + userData ,"ComputerData: " + computerData)
        switch (userData){
            case 1:

                if(userData === computerData){
                    console.log("Ничья")
                    status.innerHTML = "Ничья"
                }
                else if (computerData === 2){
                    console.log("Вы проиграли")
                    computerCount++
                    status.innerHTML = "Вы проиграли раунд"
                }
                else {console.log("Победа")
                    userCount++
                    status.innerHTML = "Вы выиграли раунд"
                }
                break
            case 2:
                if(userData === computerData){
                    console.log("Ничья")
                    status.innerHTML = "Ничья"
                }
                else if (computerData === 1){
                    console.log("Вы проиграли")
                    computerCount++
                    status.innerHTML = "Вы проиграли раунд"
                }
                else {console.log("Победа")
                    userCount++
                    status.innerHTML = "Вы выиграли раунд"
                }
                break
            case 3:
                if(userData === computerData){
                    console.log("Ничья")
                    status.innerHTML = "Ничья"
                }
                else if (computerData === 1){
                    console.log("Вы проиграли")
                    computerCount++
                    status.innerHTML = "Вы проиграли раунд"
                }
                else {console.log("Победа")
                    userCount++
                    status.innerHTML = "Вы выиграли раунд"
                }
                break
            default: status.innerHTML = "Вы не выбрали предмет"
        }
        globalCount++
        roundCount.innerHTML ="Раунд: " + globalCount
        score.innerText = userCount + " : " + computerCount

        if(globalCount === 5){
            roundCount.innerHTML ="Раунд: " + globalCount + ". Время подводить итоги"
            if(userCount === computerCount) alert("Ничья")
            else{if(userCount > computerCount) alert('Вы выиграли !')
                else alert('Вы проиграли 😐')
            }
        }
    }
}
